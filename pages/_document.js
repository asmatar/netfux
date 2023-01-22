import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
      <Head />
      <body>
        <div id="overlay"></div>
        <div id="modal"></div>
        <div id="modalCast"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
    )
  }
}

export default MyDocument