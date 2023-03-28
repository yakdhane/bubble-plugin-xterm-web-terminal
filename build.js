
const { spawn } = require('child_process');

const args = ['--build-from-source'];
const options = { stdio: 'inherit' };

spawn('npm', args, options);
