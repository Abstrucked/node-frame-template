const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

let defaultMeta = {
  title: "My Frame",
  description: "My first frame!",
  imgURL: "https://www.philmohun.com/content/images/size/w960/2022/12/farcaster-banner.png"
}

class Button {
  constructor(label, action, target) {
      this.label = label;
      this.action = action;
      this.target = target;

  }
}
function changeBackground() {
  console.log("Changing background")
  defaultMeta.imgURL="https://imgs.search.brave.com/3WBtpqLlJzgkfpxEFkBN3Sd_yaoQ0-BPKGl5x9acgAA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2QwL0V0aC1kaWFt/b25kLXJhaW5ib3cu/cG5n"
}

const farcasterMeta = {
  frame: "This is a frame!",
  buttons: [
    new Button("Frame Validator", "link", "https://warpcast.com/~/developers/frames"),
    new Button("Change Background", "post", `/`),

  ]
}

let buttons = ""
for(let i = 0; i < farcasterMeta.buttons.length; i++) {
  const button = farcasterMeta.buttons[i];
  buttons += i < 4 ?`
    <meta property="fc:frame:button:${i+1}" content="${button.label}">
    <meta property="fc:button:${i+1}:action"  content="${button.action}">
    <meta property="fc:button:${i+1}:target" content="${button.target}">\n`: ''
};


console.log(buttons)
  const html = `
  <!DOCTYPE html>
    <html>
        <head>
            <title>${defaultMeta.title}</title>
            <meta property="og:title" content=${defaultMeta.title}>
            <meta property="og:description" content=${defaultMeta.description}>
            <meta property="og:image" content=${defaultMeta.imgURL}>
            <!-- CUSTOM META TAGS -->
            <meta property="fc:frame" content="${farcasterMeta.frame}">
            <meta property="fc:frame:image" content=${defaultMeta.imgURL}>
            <!-- Buttons -->
            ${buttons}
        </head>
        <body>
            <h1>${defaultMeta.title}</h1>
            <h2>${defaultMeta.description}</h2>
        </body>
    </html>
`;

console.log(html)
app.get('/', (req, res) => {
  res.send(html);
});
app.post('/', (req, res) => {{
  changeBackground()
  res.send(html)}
});
app.listen(port, () => {
  console.log("listening to port ", port)
})