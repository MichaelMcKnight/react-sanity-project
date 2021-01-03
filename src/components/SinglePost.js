import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import sanityClient from '../client';
import BlockContent from '@sanity/block-content-to-react';
import { ImArrowLeft2 } from 'react-icons/im';

export default function SinglePost() {
    const [singlePost, setSinglePost] = useState(null);
    const { slug } = useParams();

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
        .then((data) => setSinglePost(data[0]))
        .catch(console.error);
    }, [slug]);

    if (!singlePost) return <div>Loading...</div>;

    return (
        <main className="px-3 py-5">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-12">
                        <Link to="/post" className="larger-txt d-flex align-items-center">
                            <ImArrowLeft2/> 
                            &nbsp;
                            <p className="mb-0">Back to all posts.</p>
                        </Link>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8">
                        <article>
                            <img className="mb-4" src={ singlePost.mainImage.asset.url } alt={ singlePost.title } />
                            <h2>{ singlePost.title }</h2>
                            <div>
                                <BlockContent blocks={ singlePost.body } id="dt1c3017" dataset="production" />
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </main>
    )
}