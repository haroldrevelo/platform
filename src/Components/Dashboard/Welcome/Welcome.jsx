import React from 'react';
import WelcomeGuy from './../../../Assets/IMG/Group 9.png';
import style from './Welcome.module.css'
import flag from './../../../Assets/IMG/Screen Shot 2020-09-24 at 3.34.23 PM.png'

function Welcome() {
    return (
        <div className="col-12 mt-5">
            <div className={style.floatBox}>
                <div>
                    <span className={style.textCurrently}>Currently Learning</span>
                </div>
                <div className={style.flagContainer}>
                    <img src={flag}/>
                    <h3 className={style.english}>English</h3>
                </div>
            </div>
            <div>
                <h2 className={style.title}>Dashboard</h2>
            </div>
            <div className={style.background}>
                <div className="col-3">
                    <img src={WelcomeGuy} />
                </div>
                <div className={`col-9 ${style.textContainer}`}>
                    <h3 className={style.welcomeText}>Welcome back, Clarence</h3>
                    <span className={style.spanText}>Ta-da! You're up to date.</span><span className={style.emoji}>🥳</span>
                </div>
            </div>
        </div>
    )
}

export default Welcome