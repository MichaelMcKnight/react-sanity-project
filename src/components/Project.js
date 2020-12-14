import React, { useState, useEffect } from 'react';
import sanityClient from '../client';

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
            <div className="container">
                <h1>Projects</h1>
                <h2>This page houses my projects. I created this page to expand my knowledge of schemas. I created a new schema specifically for this page to pull from the projects section of the backend in Sanity.</h2>
                <section>
                    { projectData && projectData.map((project, index) => (
                        <img src={ project.mainImage.asset.url } alt={ project.mainImage.alt } />
                    ))};
                </section>
            </div>
        </main>
    )
}