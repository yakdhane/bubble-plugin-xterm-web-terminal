
const addon = require('../build/Release/addon');

class BubblePlugin {
  constructor(terminal) {
    this.terminal = terminal;
    this.bubbles = [];
    this.currentBubble = null;
    this.init();
  }

  init() {
    this.terminal.on('data', (data) => {
      if (this.currentBubble) {
        this.currentBubble.write(data);
      }
    });
  }

  createBubble() {
    const bubble = new addon.Bubble();
    this.bubbles.push(bubble);
    this.currentBubble = bubble;
    bubble.on('close', () => {
      this.removeBubble(bubble);
    });
    return bubble;
  }

  removeBubble(bubble) {
    const index = this.bubbles.indexOf(bubble);
    if (index !== -1) {
      this.bubbles.splice(index, 1);
    }
    if (this.currentBubble === bubble) {
      this.currentBubble = null;
    }
  }
}

module.exports = BubblePlugin;
