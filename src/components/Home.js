import React from 'react';

export default function Footer() {
    return (
        <main>
            <section>
                <div className="slogan">
                    <h2>Your Wingman to Health</h2>
                    <p>Track your medication, log your sickness, and find resources to support your health</p>
                    <button>Login</button>
                    <button>Sign Up</button>
                    
                </div>
            </section>

            <section className="col_two space">
                <h2>Perfect If You Are</h2>
                <div className="flex-container">
                    <div className="card border-0">
                        
                            <p>Monitoring Your Own Health</p>
                    </div>
                    <div className="card border-0">
                        
                            <p>Caring For Loved Ones</p>
                    </div>
                    <div className="card border-0">
                        
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
                        
                    </div>

                </section>

                <section>
                    <div className="container">
                        <div className="example-description">
                            <h4>Log Sickness</h4>
                            <p>Track symptoms, log dates, visualize data</p>
                        </div>
                        
                    </div>
                </section>

                <section>
                    <div className="container last">
                        <div className="example-description">
                            <h4>Find Resources</h4>
                            <p>Enter your symptoms, find resources</p>
                        </div>
                        
                    </div>
                </section>
            </div>

            <div className="summary">
                <section>
                    <h4>Summarize Your Health</h4>
                    <p>See simple visualizations of your sickness history</p>
                    
                </section>
            </div>


            <div className="overview">
                <section>
                    <div className="container">
                        <h4>Your Simple Sickness Tracker</h4>
                        <p>Make Health Easier</p>
                        
                    </div>
                </section>
            </div>
        </main >
    )
}