import Document, { Head, Main, NextScript } from 'next/document'

import Helmet from 'react-helmet'
import React from 'react'

export default class extends Document {
    static async getInitialProps(ctx) {

        const originalRenderPage = ctx.renderPage
        try {

            const documentProps = await Document.getInitialProps(ctx)
            return {
                ...documentProps,
                helmet: Helmet.renderStatic()

            }
        } finally {

        }
    }
    get helmetHtmlAttrComponents() {
        return this.props.helmet.htmlAttributes.toComponent()
    }

    get helmetBodyAttrComponents() {
        return this.props.helmet.bodyAttributes.toComponent()
    }

    get helmetHeadComponents() {
        return Object.keys(this.props.helmet)
            .filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
            .map(el => this.props.helmet[el].toComponent())
    }

    render() {
        return (
            <html {...this.helmetHtmlAttrComponents}>
                <Head>{this.helmetHeadComponents}</Head>
                <body {...this.helmetBodyAttrComponents}>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
