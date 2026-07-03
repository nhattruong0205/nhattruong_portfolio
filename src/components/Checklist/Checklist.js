import { useEffect, useState } from 'react';

function formatDateLabel(dateKey) {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(`${dateKey}T12:00:00`));
}

function createTask(taskText) {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    text: taskText,
    completed: false,
  };
}

function getTodayKey() {
  return new Date().toLocaleDateString('en-CA');
}

function getPreviousDateKey(dateKey) {
  const date = new Date(`${dateKey}T12:00:00`);
  date.setDate(date.getDate() - 1);

  return date.toLocaleDateString('en-CA');
}

function getMillisecondsUntilNextMidnight() {
  const now = new Date();
  const nextMidnight = new Date(now);

  nextMidnight.setHours(24, 0, 0, 0);

  return nextMidnight.getTime() - now.getTime();
}

function resetTaskCompletion(tasks) {
  return tasks.map((task) => ({ ...task, completed: false }));
}

function getNextStreakState(tasks, dayKey, currentStreakCount, currentStreakAwardedDate) {
  const completedAllTasks = tasks.length > 0 && tasks.every((task) => task.completed);

  if (!completedAllTasks || !dayKey || currentStreakAwardedDate === dayKey) {
    return {
      streakCount: currentStreakCount,
      streakAwardedDate: currentStreakAwardedDate,
    };
  }

  return {
    streakCount:
      currentStreakAwardedDate === getPreviousDateKey(dayKey) ? currentStreakCount + 1 : 1,
    streakAwardedDate: dayKey,
  };
}

function Checklist() {
  const todayKey = getTodayKey();
  const storageKey = 'dailyChecklistTasks';
  const lastResetKey = 'dailyChecklistLastReset';
  const streakCountKey = 'dailyChecklistStreakCount';
  const streakAwardedDateKey = 'dailyChecklistStreakAwardedDate';
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [lastResetDate, setLastResetDate] = useState(todayKey);
  const [streakCount, setStreakCount] = useState(0);
  const [streakAwardedDate, setStreakAwardedDate] = useState('');

  useEffect(() => {
    const savedTasks = window.localStorage.getItem(storageKey);
    const savedLastResetDate = window.localStorage.getItem(lastResetKey);
    const savedStreakCount = Number.parseInt(window.localStorage.getItem(streakCountKey) ?? '0', 10);
    const savedStreakAwardedDate = window.localStorage.getItem(streakAwardedDateKey) ?? '';
    const currentDateKey = getTodayKey();
    const initialStreakCount = Number.isNaN(savedStreakCount) ? 0 : savedStreakCount;

    setStreakCount(initialStreakCount);
    setStreakAwardedDate(savedStreakAwardedDate);

    if (!savedTasks) {
      setTasks([]);
      setLastResetDate(currentDateKey);
      return;
    }

    try {
      const parsedTasks = JSON.parse(savedTasks);

      if (!Array.isArray(parsedTasks)) {
        setTasks([]);
        setLastResetDate(currentDateKey);
        return;
      }

      const shouldResetTasks = savedLastResetDate !== currentDateKey;
      const nextStreakState = shouldResetTasks
        ? getNextStreakState(
            parsedTasks,
            savedLastResetDate,
            initialStreakCount,
            savedStreakAwardedDate
          )
        : {
            streakCount: initialStreakCount,
            streakAwardedDate: savedStreakAwardedDate,
          };

      const nextTasks = shouldResetTasks ? resetTaskCompletion(parsedTasks) : parsedTasks;
      const nextResetDate = shouldResetTasks ? currentDateKey : savedLastResetDate || currentDateKey;

      window.localStorage.setItem(storageKey, JSON.stringify(nextTasks));
      window.localStorage.setItem(lastResetKey, nextResetDate);
      window.localStorage.setItem(streakCountKey, String(nextStreakState.streakCount));
      window.localStorage.setItem(streakAwardedDateKey, nextStreakState.streakAwardedDate);
      setTasks(nextTasks);
      setLastResetDate(nextResetDate);
      setStreakCount(nextStreakState.streakCount);
      setStreakAwardedDate(nextStreakState.streakAwardedDate);
    } catch (error) {
      setTasks([]);
      setLastResetDate(currentDateKey);
    }
  }, []);

  function persistChecklist(
    nextTasks,
    nextResetDate = lastResetDate,
    nextStreakCount = streakCount,
    nextStreakAwardedDate = streakAwardedDate
  ) {
    window.localStorage.setItem(storageKey, JSON.stringify(nextTasks));
    window.localStorage.setItem(lastResetKey, nextResetDate);
    window.localStorage.setItem(streakCountKey, String(nextStreakCount));
    window.localStorage.setItem(streakAwardedDateKey, nextStreakAwardedDate);
    setTasks(nextTasks);
    setLastResetDate(nextResetDate);
    setStreakCount(nextStreakCount);
    setStreakAwardedDate(nextStreakAwardedDate);
  }

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const nextResetDate = getTodayKey();
      const nextTasks = resetTaskCompletion(tasks);
      const nextStreakState = getNextStreakState(
        tasks,
        lastResetDate,
        streakCount,
        streakAwardedDate
      );

      window.localStorage.setItem(storageKey, JSON.stringify(nextTasks));
      window.localStorage.setItem(lastResetKey, nextResetDate);
      window.localStorage.setItem(streakCountKey, String(nextStreakState.streakCount));
      window.localStorage.setItem(streakAwardedDateKey, nextStreakState.streakAwardedDate);
      setTasks(nextTasks);
      setLastResetDate(nextResetDate);
      setStreakCount(nextStreakState.streakCount);
      setStreakAwardedDate(nextStreakState.streakAwardedDate);
    }, getMillisecondsUntilNextMidnight());

    return () => window.clearTimeout(timeoutId);
  }, [
    lastResetDate,
    lastResetKey,
    storageKey,
    streakAwardedDate,
    streakAwardedDateKey,
    streakCount,
    streakCountKey,
    tasks,
  ]);

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedTask = newTask.trim();

    if (!trimmedTask) {
      return;
    }

    persistChecklist([...tasks, createTask(trimmedTask)]);
    setNewTask('');
  }

  function toggleTask(taskId) {
    persistChecklist(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function removeTask(taskId) {
    persistChecklist(tasks.filter((task) => task.id !== taskId));
  }

  function clearCompletedTasks() {
    persistChecklist(tasks.filter((task) => !task.completed));
  }

  function resetStreak() {
    persistChecklist(tasks, lastResetDate, 0, '');
  }

  function handleGoBack() {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    window.location.assign('/');
  }

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <section className="mx-auto max-w-4xl space-y-6 px-6 py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Personal Planner
          </p>
          <h1 className="text-3xl font-bold text-gray-900">Checklist</h1>
          <p className="max-w-2xl text-gray-600">
            A simple browser-saved checklist for your daily tasks with no login required.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleGoBack}
            className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 transition hover:border-gray-300 hover:text-gray-900"
          >
            Go back
          </button>
          <span className="rounded-2xl border border-amber-100 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-700">
            Streak {streakCount}
          </span>
          <button
            type="button"
            onClick={resetStreak}
            className="inline-flex items-center rounded-full border border-amber-200 px-4 py-2 text-sm font-semibold text-amber-700 transition hover:border-amber-300 hover:bg-amber-50"
          >
            Reset streak
          </button>
          <span className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
            {completedCount} of {tasks.length} done
          </span>
        </div>
      </div>

      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-gray-900">Tasks for {formatDateLabel(lastResetDate)}</p>
            <p className="mt-1 text-sm text-gray-500">
              Checked boxes reset at midnight each day. Your streak only increases if the whole day stayed completed.
            </p>
          </div>
          {completedCount > 0 ? (
            <button
              type="button"
              onClick={clearCompletedTasks}
              className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 transition hover:border-emerald-200 hover:text-emerald-700"
            >
              Clear completed
            </button>
          ) : null}
        </div>

        <form className="mt-5 flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
          <input
            type="text"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
            placeholder="Add a task for today"
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-emerald-300 focus:bg-white"
            aria-label="Add a task for today"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Add task
          </button>
        </form>

        {tasks.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-dashed border-gray-200 bg-gray-50 px-5 py-8 text-center">
            <p className="text-sm font-semibold text-gray-700">No tasks yet.</p>
            <p className="mt-2 text-sm text-gray-500">Add one thing you want to get done next.</p>
          </div>
        ) : (
          <div className="mt-6 space-y-3">
            {tasks.map((task) => (
              <article
                key={task.id}
                className={`flex flex-col gap-3 rounded-2xl border p-4 shadow-sm transition sm:flex-row sm:items-center sm:justify-between ${
                  task.completed
                    ? 'border-emerald-100 bg-emerald-50/70'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <label className="flex min-w-0 flex-1 items-start gap-3">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span
                    className={`text-sm leading-6 ${
                      task.completed ? 'text-gray-500 line-through' : 'text-gray-800'
                    }`}
                  >
                    {task.text}
                  </span>
                </label>
                <button
                  type="button"
                  onClick={() => removeTask(task.id)}
                  className="inline-flex items-center justify-center rounded-full border border-gray-200 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gray-500 transition hover:border-red-200 hover:text-red-600"
                >
                  Remove
                </button>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Checklist;
