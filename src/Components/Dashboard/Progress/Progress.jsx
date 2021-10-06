import React, { useState } from "react";
import style from "./Progress.module.css"
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import useWindowDimensions from "../../../Layouts/useWindowDimensions";

function Progress() {
    const [done, setDone] = useState(29)
    const [missing, setMissing] = useState(16)
    const [selected, setSelected] = useState()
    const [percentage, setPercentage] = useState(55)
    const [size, setSize] = useState(useWindowDimensions())

    const infoArray = [
        { percentage: 44, done: 40, missing: 50 },
        { percentage: 100, done: 10, missing: 0 },
        { percentage: 80, done: 30, missing: 40 },
        { percentage: 64, done: 90, missing: 50 },
        { percentage: 40, done: 20, missing: 30 }
    ]

    function handleonClic(num) {
        if (num == 0) {
            setPercentage(infoArray[num].percentage)
            setDone(infoArray[num].done)
            setMissing(infoArray[num].missing)
            setSelected(num)
        }
        if (num == 1) {
            setPercentage(infoArray[num].percentage)
            setDone(infoArray[num].done)
            setMissing(infoArray[num].missing)
            setSelected(num)
        }
        if (num == 2) {
            setPercentage(infoArray[num].percentage)
            setDone(infoArray[num].done)
            setMissing(infoArray[num].missing)
            setSelected(num)
        }
        if (num == 3) {
            setPercentage(infoArray[num].percentage)
            setDone(infoArray[num].done)
            setMissing(infoArray[num].missing)
            setSelected(num)
        }
        if (num == 4) {
            setPercentage(infoArray[num].percentage)
            setDone(infoArray[num].done)
            setMissing(infoArray[num].missing)
            setSelected(num)
        }
    }

    return (
        <div className={size.width > 768 ? `mt-5 d-flex ${style.container}` : `mt-5 ${style.container}`}>
            <div className={`col-12 col-md-4 ${style.containerStatistics}`}>
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
                <div className={`${style.infoProgress}`}>
                    <div style={{ width: '50%' }}>
                        <div style={{ display: "flex", width: '80%' }}>
                            <div style={{
                                position: 'absolute',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <span style={{
                                    padding: '7px',
                                    margin: '20px 15px',
                                    cursor: 'pointer',
                                    borderRadius: '50%',
                                    background: '#FED200'
                                }}></span>
                            </div>
                            <div className={`${style.textCompleted}`}>
                                <span>Completed</span>
                            </div>
                        </div>
                        <div className={style.divHours}>
                            <h2>{done}</h2><span>hours</span>
                        </div>
                    </div>
                    <div className={style.divDivisor}>
                        <hr />
                    </div>
                    <div style={{ width: '50%' }}>
                        <div style={{ display: "flex", width: '80%' }}>
                            <div style={{
                                position: 'absolute',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <span style={{
                                    padding: '7px',
                                    margin: '20px 15px',
                                    cursor: 'pointer',
                                    borderRadius: '50%',
                                    background: '#FF794F'
                                }}></span>
                            </div>
                            <div className={`${style.textCompleted}`}>
                                <span>Left to go</span>
                            </div>
                        </div>
                        <div className={style.divHours}>
                            <h2>{missing}</h2><span>hours</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={size.width > 768 ? 'col-mb-8' : 'col-12 col-mb-8 mt-5'}>
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
                {
                    size.width > 768 ?
                        <>
                            <div className={'row mt-5'}>
                                <div onClick={() => { handleonClic(0) }} className={`col-2 ${selected == 0 ? style.cardSelected : style.card}`} >
                                    <div className={style.spanText}>
                                        <span>Total <br /> Webinars </span>
                                    </div>
                                    <div className={style.spanNum}>
                                        <span>9</span>
                                    </div>
                                </div>
                                <div onClick={() => { handleonClic(1) }} className={`col-2 ${selected == 1 ? style.card2Selected : style.card2}`}>
                                    <div className={style.spanText}>
                                        <span>Pending <br /> Assignments </span>
                                    </div>
                                    <div className={style.spanNum}>
                                        <span>0</span>
                                    </div>
                                </div>
                                <div onClick={() => { handleonClic(2) }} className={`col-2 ${selected == 2 ? style.card2Selected : style.card2}`}>
                                    <div className={style.spanText}>
                                        <span>Total <br /> Units </span>
                                    </div>
                                    <div className={style.spanNum}>
                                        <span>5</span>
                                    </div>
                                </div>
                            </div>
                            <div className={'row mt-5'}>
                                <div onClick={() => { handleonClic(3) }} className={`col-2 ${selected == 3 ? style.cardSelected : style.card}`}>
                                    <div className={style.spanText}>
                                        <span>Total <br /> Readings </span>
                                    </div>
                                    <div className={style.spanNum}>
                                        <span>14</span>
                                    </div>
                                </div>
                                <div onClick={() => { handleonClic(4) }} className={`col-2 ${selected == 4 ? style.card2Selected : style.card2}`}>
                                    <div className={style.spanText}>
                                        <span>Total <br /> Videos </span>
                                    </div>
                                    <div className={style.spanNum}>
                                        <span>0</span>
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className={'row mt-5'}>
                                <div onClick={() => { handleonClic(0) }} className={`col-5 ${selected == 0 ? style.cardSelected : style.card}`} >
                                    <div className={style.spanText}>
                                        <span>Total <br /> Webinars </span>
                                    </div>
                                    <div className={style.spanNum}>
                                        <span>9</span>
                                    </div>
                                </div>
                                <div onClick={() => { handleonClic(1) }} className={`col-5 ${selected == 1 ? style.card2Selected : style.card2}`}>
                                    <div className={style.spanText}>
                                        <span>Pending <br /> Assignments </span>
                                    </div>
                                </div>
                            </div>
                            <div className={'row'}>
                                <div onClick={() => { handleonClic(3) }} className={`col-5 ${selected == 3 ? style.cardSelected : style.card}`}>
                                    <div className={style.spanText}>
                                        <span>Total <br /> Readings </span>
                                    </div>
                                    <div className={style.spanNum}>
                                        <span>14</span>
                                    </div>
                                </div>
                                <div onClick={() => { handleonClic(4) }} className={`col-5 ${selected == 4 ? style.card2Selected : style.card2}`}>
                                    <div className={style.spanText}>
                                        <span>Total <br /> Videos </span>
                                    </div>
                                </div>
                            </div>
                            <div className={'row'}>
                                <div onClick={() => { handleonClic(2) }} className={`col-5 ${selected == 2 ? style.card2Selected : style.card2}`}>
                                    <div className={style.spanText}>
                                        <span>Total <br /> Units </span>
                                    </div>
                                    <div className={style.spanNum}>
                                        <span>5</span>
                                    </div>
                                </div>
                            </div>
                        </>
                }
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