import React from 'react';
import health from '../img/health.jpg';

export default function AboutPage() {
    return (
        <main className="main-about">
            <div className='about-heading'>
                <h2>Our Mission</h2>
            </div>
            <div className='about-text'>
                <p>We are your one stop shop to track all your daily medical needs.</p>
                <p>With your busy life, it can often be difficult to prioritize your health.
                But that's no excuse for not keeping up with what your body needs.</p>
                <p>We wanted to create an application that simplifies your daily health needs.
                With features such as a sickness log, a medication tracker, and even a resource search enginge,
                we are here with all the support you need to take care of yourself.
                </p>
                <p>With Health Wingman by your side, step towards better health today!</p>
                <img src={health} alt="cartoon drawings of healthcare workers"/>
            </div>
        </main>
    )
}