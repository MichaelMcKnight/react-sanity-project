import React from 'react';
import logo from '../logo.svg';
import bgImage from '../my_react_app_bg.jpg';

export default function Home() {
    return (
        <main className="home-page p-relative full-height d-flex justify-content-center align-items-center flex-column overflow-hidden">
            <div className="container white-txt center-txt p-relative z-index-3">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8">
                        <h1>React Blog</h1>
                        <p>Hello! Welcome to my React blog. I built this project to further my React.js knowledge. I combined React with Sanity.io to build a dynamic blog.</p>
                        <p>I already had basic knowledge of React prior to this project. This project was created to give me a better idea of how dynamic content is handled with React. I followed this wonderful video, and made my own modifications. I used the bootstrap grid system along with some custom classes rather than the Tailwind CSS library.</p>
                        <a target="_blank" rel="noreferrer noopener" href="https://www.youtube.com/watch?v=NO7_jgzVgbc">https://www.youtube.com/watch?v=NO7_jgzVgbc</a>
                        <img src={ logo } alt="React.js" className="App-logo"/>
                    </div>
                </div>
            </div>
            <div className="overlay"></div>
            <div className="full-bg p-absolute" style={{ backgroundImage: `url(${ bgImage })` }}></div>
        </main>
    )
}