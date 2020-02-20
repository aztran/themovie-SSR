import React from 'react';
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { siteConfig } from 'utils/config'

const SeoConfig = ({ description, lang, meta, title }) => {
    const metaDescription = description || siteConfig.siteDescription
    const metaTitle = title || siteConfig.siteTitle

    return (
        <Helmet
            htmlAttributes={{
                lang
            }}
            title={metaTitle}
            titleTemplate={`%s | ${siteConfig.siteTitle}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription
                },
                {
                    property: `og:title`,
                    content: metaTitle
                },
                {
                    property: `og:description`,
                    content: metaDescription
                },
                {
                    name: `twitter:creator`,
                    content: siteConfig.author
                },
                {
                    name: `twitter:title`,
                    content: metaTitle
                },
                {
                    name: `twitter:description`,
                    content: metaDescription
                }
            ].concat(meta)}

        />
    );
}

SeoConfig.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``
}

SeoConfig.propTypes = {
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired
}

export default SeoConfig;
