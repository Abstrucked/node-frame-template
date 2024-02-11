const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const defaultMeta = {
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

const farcasterMeta = {
  frame: "This is a frame!",
  buttons: [
    new Button("Frame Validator", "link", "https://warpcast.com/~/developers/frames")
    new Button("Change Background", "post", `${defaultMeta.imgURL=""}`)
  ]
}



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
            ${farcasterMeta.buttons.map((button, i) => {
              return i < 4 ?`<meta property="fc:button:${i+1}" content="${button.label}" data-action="${button.action}" data-target="${button.target}">`: ''
  
})}
        </head>
        <body>
            <h1>${defaultMeta.title}</h1>
            <h2>${defaultMeta.description}</h2>
        </body>
    </html>
`;

app.get('/', (req, res) => {
  res.send(html);
});

app.listen(port, () => {
  console.log("listening to port ", port)
})