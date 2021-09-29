import React from "react";
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang='en'>
                <Head />
                <body>
                    <Main />
                    {/* Here we will mount our modal portal */}
                    <div id="modal" />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

/*
MyDocument.getInitialProps = async ctx => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.

    const styledComponentsSheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: App => props => styledComponentsSheet.collectStyles(<App {...props} />),
        });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        //styles: (
        //    <React.Fragment>
        //        {initialProps.styles}
        //        {materialSheets.getStyleElement()}
        //        {styledComponentsSheet.getStyleElement()}
        //    </React.Fragment>
        //),
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [
            ...React.Children.toArray(initialProps.styles),
            styledComponentsSheet.getStyleElement(),
        ],
    };
};
*/

export default MyDocument;
