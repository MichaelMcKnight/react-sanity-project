import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client';

export default function Post() {
    const [postData, setPostData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "post"]
            {
                title,
                slug,
                mainImage {
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }
        `)
        .then((data) => setPostData(data))
        .catch(console.error);

    }, []);

    return(
        <main>
            <section>
                <div className="container">
                    <h1>Blog Posts</h1>
                    <h2>Welcome to the blog page. Everything is coming from Sanity.io.</h2>
                    <section>
                        { postData && postData.map((post, index) => (

                        <article>
                            <Link to={"/post/" + post.slug.current} key={ post.slug.current }>
                                <span key={ index }>
                                    <img
                                    src={ post.mainImage.asset.url }
                                    alt={ post.mainImage.alt }
                                    />
                                    <span>
                                        <h3>{ post.title }</h3>
                                    </span>
                                </span>
                            </Link>
                        </article>
                        ))};
                    </section>
                </div>
            </section>
        </main>
    )
}