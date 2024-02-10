const express = require('express');
const app = express();

port = 3000;

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
  frame: ""
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
            <meta property="fc:frame" content=contenthere">
            <meta property="fc:frame:image" content=${defaultMeta.imgURL}>
            <!-- Buttons -->
            <meta property="fc:frame:button1" content="ClickMe!">
            <meta property="fc:frame:button1:action" content="link">
            <meta property="fc:frame:button1:target" content="">
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