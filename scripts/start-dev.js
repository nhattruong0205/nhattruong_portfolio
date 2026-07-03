const { spawn } = require('child_process');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const childProcesses = [];
let isShuttingDown = false;

function startProcess(name, args, cwd) {
  const child = spawn(npmCommand, args, {
    cwd,
    stdio: 'inherit',
    env: process.env,
  });

  child.on('error', (error) => {
    console.error(`${name} failed to start`, error);
    shutdown(1);
  });

  child.on('exit', (code, signal) => {
    if (isShuttingDown) {
      return;
    }

    const exitCode = typeof code === 'number' ? code : 1;
    const reason = signal ? `signal ${signal}` : `code ${exitCode}`;
    console.error(`${name} exited unexpectedly with ${reason}`);
    shutdown(exitCode);
  });

  childProcesses.push(child);
}

function shutdown(exitCode = 0) {
  if (isShuttingDown) {
    return;
  }

  isShuttingDown = true;

  childProcesses.forEach((child) => {
    if (!child.killed) {
      child.kill('SIGTERM');
    }
  });

  setTimeout(() => process.exit(exitCode), 150);
}

process.on('SIGINT', () => shutdown(0));
process.on('SIGTERM', () => shutdown(0));

startProcess('API server', ['run', 'start:server'], rootDir);
startProcess('React dev server', ['run', 'start:client'], rootDir);
