import React from 'react';
import health from '../img/health.jpg';
import caring from '../img/caring_for_loved_one.png';
import monitor from '../img/monitor_health.png';
import clipboard from '../img/clipboard.png';
import medTrack from '../img/medication_tracker_ex.png';
import sickLog from '../img/sickness_log_ex.png';
import resource from '../img/resources_ex.png';
import graph from '../img/graph_example.jpg';
import med from '../img/med_example.jpeg';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (    
        <body className="home_page">
            <section>
                <div className="slogan">
                    <h2>Your Wingman to Health</h2>
                    <p>Track your medication, log your sickness, and find resources to support your health</p>
                    <Link to="/signin" ><button>Login</button></Link>
                    <Link to="/signin" ><button>Sign Up</button></Link>
                    <img src={health} alt="cartoon drawings of healthcare workers"/>
                </div>
            </section>

            <section className="col_two space">
                <h2>Perfect If You Are</h2>
                <div className="flex-container">
                    <div className="card border-0">
                        <img src={monitor} alt="cartoon woman monitoring health"/>
                            <p>Monitoring Your Own Health</p>
                    </div>
                    <div className="card border-0">
                        <img src={caring} alt="cartoon representation of caring for a loved one"/>
                            <p>Caring For Loved Ones</p>
                    </div>
                    <div className="card border-0">
                        <img src={clipboard} alt="abstract art"/>
                            <p>Searching For Diagnosis</p>
                    </div>
                </div>
            </section>

            <div className="examples">
                <section>
                    <div className="container">
                        <div className="example-description">
                            <h4>Medication Tracker</h4>
                            <p>Track your dosage, visualize your plan, schedule refills</p>
                        </div>
                        <img src={medTrack} alt="Picture of Med Tracker examples"/>
                    </div>

                </section>

                <section>
                    <div className="container">
                        <div className="example-description">
                            <h4>Log Sickness</h4>
                            <p>Track symptoms, log dates, visualize data</p>
                        </div>
                        <img src={sickLog} alt="Example picture of sickness log"/>
                    </div>
                </section>

                <section>
                    <div className="container last">
                        <div className="example-description">
                            <h4>Find Resources</h4>
                            <p>Enter your symptoms, find resources</p>
                        </div>
                        <img src={resource} id="resource" alt="Example picture of resources/finding diagnosis"/>
                    </div>
                </section>
            </div>

            <div className="summary">
                <section>
                    <h4>Summarize Your Health</h4>
                    <p>See simple visualizations of your sickness history</p>
                    <img src={graph} alt="example of wrapped health"/>
                </section>
            </div>


            <div className="overview">
                <section>
                    <div className="container">
                        <h4>Your Simple Sickness Tracker</h4>
                        <p>Make Health Easier</p>
                        <img className="overview_img" src={med} alt="Picture of mobile look"/>
                    </div>
                </section>
            </div>
        </body>
    )
}