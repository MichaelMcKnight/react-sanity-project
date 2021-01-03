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
        <main className="light-grey-bg">
            <section>
                <div className="container px-3 py-5">
                    <div className="row mb-4 justify-content-center">
                        <div className="col-12 col-md-10">
                            <h1>Blog Posts</h1>
                            <p>Welcome to the blog page. I'm using Sanity's blog schema to dynamically pull content from the backend. Click the posts to see more!</p>
                        </div>
                    </div>
                    
                    <section className="row justify-content-center">
                        { postData && postData.map((post, index) => (
                        <article className="col-12 col-md-5 mx-2 mb-4" key={ index }>
                            <Link to={"/post/" + post.slug.current} key={ post.slug.current }>
                                <div className="blog-post" style={{ height: '100%' }}>
                                    <img
                                    src={ post.mainImage.asset.url }
                                    alt={ post.mainImage.alt }
                                    />
                                    <div className="center-txt px-2 py-4">
                                        <h3 className="mb-0">{ post.title }</h3>
                                    </div>
                                </div>
                            </Link>
                        </article>
                        ))}
                    </section>
                </div>
            </section>
        </main>
    )
}