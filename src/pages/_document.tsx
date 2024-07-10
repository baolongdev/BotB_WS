import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { doExtraStyle } from "../utils/genAntdCss";
import { StyleProvider, createCache } from "@ant-design/cssinjs";
import { beVietnamPro, montserrat, pecita } from "../utils/fonts";

const MyDocument = () => (
  <Html
    lang="vi"
    dir="ltr"
    className={`${montserrat.variable} ${pecita.variable} ${beVietnamPro.variable}`}
  >
    <Head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#dcdce7"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#111111"
      />
      <meta name="msapplication-navbutton-color" content="#111111" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
    </Head>

    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const cache = createCache();
  let fileName = "";
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
      (
        <StyleProvider cache={cache}>
          <App {...props} />
        </StyleProvider>
      ),
    });

  const initialProps = await Document.getInitialProps(ctx);
  // 1.1 extract style which had been used
  fileName = doExtraStyle({
    cache,
  });
  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        {/* 1.2 inject css */}
        {fileName && <link rel="stylesheet" href={`/${fileName}`} />}
      </>
    ),
  };
};

export default MyDocument;
