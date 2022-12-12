import Document, { Html, Head, Main, NextScript } from 'next/document'

/* export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div id="overlay"></div>
        <div id="modal"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} */

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
      <Head />
      <body>
        <div id="overlay"></div>
        <div id="modal"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
    )
  }
}

export default MyDocument