import Head from "next/head";
import { MetaTags } from "~/data-types/MetaTags";

type SeoProps = {
    metaTags: MetaTags;
}

export default function Seo({ metaTags }: SeoProps) {

    return (
        <>
            <Head>
                <title key="title">{metaTags.title}</title>
                <meta name="description" key="description" content={metaTags.description} />
                <meta property="og:type" key="og_type" content={metaTags.type} />
                {metaTags.title && <meta property="og:title" key="og_title" content={metaTags.title} />}
                {metaTags.description && (
                    <meta property="og:description" key="og_description" content={metaTags.description} />
                )}

                <meta property="og:url" key="og_URL" content={metaTags.og_URL ? metaTags.og_URL : metaTags.canonical} />
                {/* A url of an image for Facebook to use in a preview. */}
                <meta property="og:image" key="og_image" content={metaTags.og_image ? metaTags.og_image : metaTags.image} />
                <meta property="og:site_name" key="og_site_name"
                    content={metaTags.og_site_name ? metaTags.og_site_name : metaTags.title} />
                {/* End of OpenGraph Tag */}

                {/*Twitter displayed card*/}
                {metaTags.twitter_site &&
                    <meta name="twitter:card" key="twitter_card" content="summary" />}

                {/*this will define the description of the post*/}
                {metaTags.description &&
                    <meta name="twitter:description" key="twitter_description" content={metaTags.description} />}

                {/* Twitter account */}
                {metaTags.twitter_site &&
                    <meta name="twitter:site" key="twitter_site" content={metaTags.twitter_site} />}
                {/* Name of Website */}
                {metaTags.twitter_domain &&
                    <meta name="twitter:domain" key="twitter_domain" content={metaTags.twitter_domain} />}

                {/* Image preview of shared post */}
                {metaTags.twitter_site &&
                    <meta name="twitter:image:src" key="twitter_img" content={metaTags.image} />}

            </Head>
        </>
    )
}