import React, { useState } from "react";
import style from "./EventsToday.module.css"
import card1 from "./../../../../Assets/IMG/card1.png"
import card2 from "./../../../../Assets/IMG/thumbnail.png"
import useWindowDimensions from "../../../../Layouts/useWindowDimensions";

function EventsToday() {
    const [size, setSize] = useState(useWindowDimensions())
    return (
        <div className={style.container}>
            <div className={style.spanTop}>
                <div className="row">
                    <div className={`col-6 col-md-5 ${style.divToday}`}>EVENTS TODAY </div>
                    <div className={`col-6 col-md-7 ${style.divHr}`}><hr /></div>
                </div>
            </div>
            {
                size.width > 768 ?
                    <>
                        <div>
                            <div className={size.width > 768 ? `${style.cardContainer}` : `col-6 ${style.cardContainer}`}>
                                <div>
                                    <img src={card1} />
                                </div>
                                <div className={`col-12 col-mb-10 ${style.card}`}>
                                    <span>10:30AM</span>
                                    <h6>You have a new session to re...</h6>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={size.width > 768 ? `${style.cardContainer}` : `col-6 ${style.cardContainer}`}>
                                <div>
                                    <img src={card2} />
                                </div>
                                <div className={`col-12 col-mb-10 ${style.card}`}>
                                    <span>2:15PM</span>
                                    <h6>Team Building Activity</h6>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className={style.containerFull}>
                            <div>
                                <div className={style.cardContainer}>
                                    <div>
                                        <img src={card1} />
                                    </div>
                                    <div className={` ${style.card}`}>
                                        <span>10:30AM</span>
                                        <h6>You have a new session to re...</h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={style.cardContainer}>
                                    <div>
                                        <img src={card2} />
                                    </div>
                                    <div className={` ${style.card}`}>
                                        <span>2:15PM</span>
                                        <h6>Team Building Activity</h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={style.cardContainer}>
                                    <div>
                                        <img src={card2} />
                                    </div>
                                    <div className={` ${style.card}`}>
                                        <span>2:15PM</span>
                                        <h6>Team Building Activity</h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={style.cardContainer}>
                                    <div>
                                        <img src={card2} />
                                    </div>
                                    <div className={` ${style.card}`}>
                                        <span>2:15PM</span>
                                        <h6>Team Building Activity</h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={style.cardContainer}>
                                    <div>
                                        <img src={card2} />
                                    </div>
                                    <div className={` ${style.card}`}>
                                        <span>2:15PM</span>
                                        <h6>Team Building Activity</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }

        </div>
    )
}

export default EventsToday