import React from 'react';
import logo from '../logo.svg';
import bgImage from '../my_react_app_bg.jpg';

export default function Home() {
    return (
        <main className="home-page p-relative full-height d-flex justify-content-center align-items-center flex-column overflow-hidden">
            <div className="container white-txt center-txt p-relative z-index-3">
                <h1>React Blog</h1>
                <p>Hello! Welcome to my React blog. I built this project to further my React.js knowledge. Have a look around.</p>
                <img src={ logo } alt="React.js" className="App-logo"/>
            </div>
            <div className="overlay"></div>
            <div className="full-bg p-absolute" style={{ backgroundImage: `url(${ bgImage })` }}></div>
        </main>
    )
}