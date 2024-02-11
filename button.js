
class Button {
  constructor(label, action, target) {
    this.label = label;
    this.action = action;
    this.target = target;

  }
  render(i) {
    return `
            <!-- Button:${i+1} -->
            <meta property="fc:frame:button:${i + 1}" content="${this.label}">
            <meta property="fc:button:${i + 1}:action"  content="${this.action}">
            <meta property="fc:button:${i + 1}:target" content="${this.target}">`
  }
}

module.exports = {Button}



