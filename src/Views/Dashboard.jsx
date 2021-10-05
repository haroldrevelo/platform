import React, { useState, useEffect } from 'react';
import Activity from '../Components/Dashboard/Activity/Activity';
import Events from '../Components/Dashboard/EventsComponent/EventsComponent';
import Progress from '../Components/Dashboard/Progress/Progress';
import Welcome from './../Components/Dashboard/Welcome/Welcome'

function Dashboard() {

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

        useEffect(() => {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return windowDimensions;
    }

    console.log(getWindowDimensions())
    return (
        <div className="container" style={{ paddingLeft: '10vh' }}>
            <div className="row">
                <Welcome />
            </div>
            <div className="row mt-5">
                <Events />
            </div>
            <div className="row mt-5">
                <Activity />
            </div>
            <div>
                <Progress />
            </div>
        </div>
    )
}

export default Dashboard