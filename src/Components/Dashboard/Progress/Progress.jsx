import React from "react";
import style from "./Progress.module.css"
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function Progress() {
    var percentage = 15

    return (
        <div className={`mt-5 d-flex ${style.container}`}>
            <div className={`col-4 ${style.containerStatistics}`}>
                <div className={style.titleProgress}>
                    <h3>Progress overview</h3>
                </div>
                <div className={style.progressBar}>
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                    textColor: "#ffffff",
                    textSize: "25px",
                    pathColor: "#FED200",
                    trailColor: "#FF794F"
                    })}
                />
                </div>
                <div className={style.infoProgress}>

                </div>
                
            </div>
            <div className={'col-8'}>
                <div className={'row'}>
                    <div className={`col-2 ${style.divTitle}`}>
                        <div>
                            <h2 className={style.title}>Progress</h2>
                        </div>
                    </div>
                    <div className={`col-8 ${style.divHr}`}>
                        <hr />
                    </div>
                </div>
                <div className={'row mt-5'}>
                    <div className={`col-3 ${style.card}`}>
                        <div className={style.spanText}>
                            <span>Total <br /> Webinars </span>
                        </div>
                        <div className={style.spanNum}>
                            <span>9</span>
                        </div>
                    </div>
                    <div className={`col-3 ${style.card2}`}>
                        <div className={style.spanText}>
                            <span>Pending <br /> Assignments </span>
                        </div>
                        <div className={style.spanNum}>
                            <span>0</span>
                        </div>
                    </div>
                    <div className={`col-3 ${style.card2}`}>
                        <div className={style.spanText}>
                            <span>Total <br /> Units </span>
                        </div>
                        <div className={style.spanNum}>
                            <span>5</span>
                        </div>
                    </div>
                </div>
                <div className={'row mt-5'}>
                    <div className={`col-3 ${style.card}`}>
                        <div className={style.spanText}>
                            <span>Total <br /> Readings </span>
                        </div>
                        <div className={style.spanNum}>
                            <span>14</span>
                        </div>
                    </div>
                    <div className={`col-3 ${style.card2}`}>
                        <div className={style.spanText}>
                            <span>Total <br /> Videos </span>
                        </div>
                        <div className={style.spanNum}>
                            <span>0</span>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className={style.confirm}>
                        <span>Confirm your account details Please confirm your email and phone number. 😰</span>                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Progress