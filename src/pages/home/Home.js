import React from 'react';
import "./Home.css"; // Import your CSS file with animation styles
import home from '../../assets/homeheader.jpg';



function Home() {
    return (
        <>
            <div className="mycontainer">
                    <img className="content" alt="Relaxing massage" src={home} />
            </div>

            <div className="info animated-info">
                <div className="grid">
                    <div className="col">

                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;