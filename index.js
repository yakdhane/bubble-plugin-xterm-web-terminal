
const xterm = require('xterm');
const BubblePlugin = require('./bubblePlugin');

const term = new xterm.Terminal({
  cursorBlink: true,
});

term.open(document.getElementById('terminal'));

const bubblePlugin = new BubblePlugin(term);
term.loadAddon(bubblePlugin);

term.focus();
