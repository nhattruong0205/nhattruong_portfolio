import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dashboard from './components/Dashboard/Dashboard';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { MemoryRouter } from 'react-router-dom';
import Checklist from './components/Checklist/Checklist';
import News from './components/News/News';
import { news } from './data/news';

afterEach(() => {
  window.localStorage.clear();
  jest.restoreAllMocks();
});

test('renders portfolio hero content', () => {
  render(<Dashboard />);
  expect(screen.getByText('Nhat Truong')).toBeInTheDocument();
  expect(screen.getByText(/Medical Imaging/i)).toBeInTheDocument();
});

test('navigation bar does not expose the checklist link', () => {
  render(<NavigationBar />);

  expect(screen.queryByText('Checklist')).not.toBeInTheDocument();
  expect(screen.getByText('Projects')).toBeInTheDocument();
});

test('news timeline shows the latest updates first and can expand', async () => {
  render(
    <MemoryRouter>
      <News />
    </MemoryRouter>
  );

  const items = screen.getAllByRole('listitem');
  expect(items).toHaveLength(Math.min(news.length, 5));

  const newest = [...news].sort((a, b) => b.date.localeCompare(a.date))[0];
  expect(items[0]).toHaveTextContent(newest.title);

  if (news.length > 5) {
    await userEvent.click(screen.getByRole('button', { name: /show all/i }));
    expect(screen.getAllByRole('listitem')).toHaveLength(news.length);
  }
});

test('checklist adds tasks without a login flow', async () => {
  render(<Checklist />);

  expect(screen.getByRole('button', { name: /go back/i })).toBeInTheDocument();
  await userEvent.type(screen.getByLabelText(/add a task for today/i), 'Finish project update');
  await userEvent.click(screen.getByRole('button', { name: /add task/i }));

  expect(screen.getByText('Finish project update')).toBeInTheDocument();
});

test('checklist keeps tasks after leaving and reopening the page', async () => {
  const { unmount } = render(<Checklist />);

  await userEvent.type(screen.getByLabelText(/add a task for today/i), 'Call advisor');
  await userEvent.click(screen.getByRole('button', { name: /add task/i }));

  expect(screen.getByText('Call advisor')).toBeInTheDocument();

  unmount();

  render(<Checklist />);

  expect(screen.getByText('Call advisor')).toBeInTheDocument();
});

test('checklist awards streak only once per day after all tasks are ticked', async () => {
  render(<Checklist />);

  await userEvent.type(screen.getByLabelText(/add a task for today/i), 'Finish homework');
  await userEvent.click(screen.getByRole('button', { name: /add task/i }));

  expect(screen.getByText(/streak 0/i)).toBeInTheDocument();

  await userEvent.click(screen.getByRole('checkbox'));
  expect(screen.getByText(/streak 0/i)).toBeInTheDocument();

  await userEvent.click(screen.getByRole('checkbox'));
  expect(screen.getByText(/streak 0/i)).toBeInTheDocument();
});

test('checklist awards streak on the next day only if the previous day ended completed', () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayKey = yesterday.toLocaleDateString('en-CA');

  window.localStorage.setItem(
    'dailyChecklistTasks',
    JSON.stringify([
      {
        id: 'task-1',
        text: 'Finish homework',
        completed: true,
      },
    ])
  );
  window.localStorage.setItem('dailyChecklistLastReset', yesterdayKey);
  window.localStorage.setItem('dailyChecklistStreakCount', '0');
  window.localStorage.setItem('dailyChecklistStreakAwardedDate', '');

  render(<Checklist />);

  expect(screen.getByText(/streak 1/i)).toBeInTheDocument();
});

test('checklist can reset the streak manually', async () => {
  window.localStorage.setItem('dailyChecklistStreakCount', '3');
  window.localStorage.setItem('dailyChecklistStreakAwardedDate', '2026-01-01');

  render(<Checklist />);

  expect(screen.getByText(/streak 3/i)).toBeInTheDocument();

  await userEvent.click(screen.getByRole('button', { name: /reset streak/i }));

  expect(screen.getByText(/streak 0/i)).toBeInTheDocument();
});
