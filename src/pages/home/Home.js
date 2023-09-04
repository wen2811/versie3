import React from 'react';
import "./Home.css"; // Import your CSS file with animation styles
import Navigation from "../../components/navigation/Navigation";
import home from '../../assets/homeheader.jpg';



function Home() {
    return (
        <>
            <div className="mycontainer">
                <div className="content">
                    <img alt="Relaxing massage" src={home} />
                </div>
            </div>

            <div className="info animated-info">
                <div className="grid">
                    <div className="col">
                        <strong>A Journey of Self-Care</strong>
                        <p>Welcome to Moshi Moshi Spa. The destination where every treatment is a celebration of self, and every moment is an invitation to shine.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;