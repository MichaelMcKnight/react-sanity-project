import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
import BlockContent from '@sanity/block-content-to-react';

export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]
        {
            title,
            body,
            projectType,
            mainImage {
                asset->{
                    _id,
                    url
                },
                alt,
            },
            tags,
            link
        }`)
        .then((data) => setProjectData(data))
        .catch(console.error);
    }, []);

    return (
        <main>
            <div className="container px-3 py-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8">
                        <h1>Projects</h1>
                        <p>There is only one project here... my portfolio site! You can view other projects there. I created this page specifically to advance my knowledge of creating schema files to create new backend features in Sanity.io and pull data to the front-end. Click the image to go to my portfolio. ✌️</p>
                        <section>
                            { projectData && projectData.map((project, index) => (
                                <div className="project" key={ index }>
                                    <a target="_blank" rel="noreferrer noopener" href={ project.link }>
                                        <img src={ project.mainImage.asset.url } alt={ project.mainImage.alt } />
                                    </a>
                                    <h2 className="mt-4">{ project.title }</h2>
                                    <div className="body">
                                        <BlockContent blocks={ project.body } id="dt1c3017" dataset="production" />
                                    </div>
                                </div>
                            ))}
                        </section>
                    </div>
                </div>
            </div>
        </main>
    )
}