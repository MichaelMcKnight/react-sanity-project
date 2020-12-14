import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

export default function SinglePost() {
    const [singlePostData, setSinglePostData] = useState(null);
    const { slug } = useParams();

    const builder = imageUrlBuilder(sanityClient);
    function urlFor(source) {
        return builder.image(source);
    }

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]
        {
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
            },
            body,
        }`)
        .then((data) => setSinglePostData(data[0]))
        .catch(console.error);
    }, [slug]);

    if (!singlePostData) return <div>Loading...</div>;

    return (
        <main>
            <div className="container">
                <article>
                    <div>
                        <BlockContent blocks={singlePostData.body} id="dt1c3017" dataset="production" />
                    </div>
                </article>
            </div>
        </main>
    )
}