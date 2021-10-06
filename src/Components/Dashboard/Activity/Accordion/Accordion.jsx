import React, { useEffect, useState } from "react";
import style from "./Accordion.module.css"
import icon1 from "./../../../../Assets/IMG/ic-followers.png"
import icon2 from "../../../../Assets/IMG/ic-events.png"
import icon3 from "../../../../Assets/IMG/ic-assignments.png"
import arrowDown from "./../../../../Assets/IMG/Arrow-Down-Bold.png"
import arrowUp from "./../../../../Assets/IMG/Arrow-Up-Bold-2.png"

function Accordion() {
    const [arrowToggle1, setarrowToggle1] = useState(true)
    const [arrowToggle2, setarrowToggle2] = useState(false)
    const [arrowToggle3, setarrowToggle3] = useState(false)
    
    function onClicToggle (num){
        if(num == 1){
            if(arrowToggle1){
                setarrowToggle1(false)
            } else if(arrowToggle2){
                setarrowToggle1(true)
                setarrowToggle2(false)
            } else if (arrowToggle3){
                setarrowToggle1(true)
                setarrowToggle3(false)
            } else {
                setarrowToggle1(true)
            }
        }
        if(num == 2){
            if(arrowToggle1){
                setarrowToggle1(false)
                setarrowToggle2(true)
            } else if (arrowToggle2){
                setarrowToggle2(false)
            } else if (arrowToggle3){
                setarrowToggle2(true)
                setarrowToggle3(false)
            } else {
                setarrowToggle2(true)
            }
        }
        if(num == 3){
            if(arrowToggle1){
                setarrowToggle1(false)
                setarrowToggle3(true)
            } else if (arrowToggle3){
                setarrowToggle3(false)
            } else if(arrowToggle2){
                setarrowToggle2(false)
                setarrowToggle3(true)
            } else{
                setarrowToggle3(true)
            }
        }
    }

    return (
        <>
            <div className={`${style.container}`} onClick={()=>onClicToggle(1)}>
                <div className={`${style.cardContainer}`}>
                    <div className={`col-3 col-mb-1 ${style.imgIcon}`}>
                        <img src={icon1} />
                    </div>
                    <div className={`col-9 ${style.textP}`}>
                        <p>You have new 5 followers including <strong>Kathryn Crawford</strong> and <strong>Piper Shaw</strong></p>
                    </div>
                    <div className={`${style.divToggle}`}>
                        <img src={arrowToggle1 ? arrowUp : arrowDown} />
                    </div>
                </div>
                <div className={style.textOpen} style={arrowToggle1 ? {} : { display: 'none'}}>
                    <p>
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem 
                    </p>
                </div>
            </div>
            <div className={`${style.container}`} onClick={()=>onClicToggle(2)}>
                <div className={`${style.cardContainer}`}>
                    <div className={`col-3 col-mb-1 ${style.imgIcon}`}>
                        <img src={icon2} />
                    </div>
                    <div className={`col-9 ${style.textP}`}>
                        <p>3 new events were added to your calendar</p>
                    </div>
                    <div className={`${style.divToggle}`}>
                        <img src={arrowToggle2 ? arrowUp : arrowDown} />
                    </div>
                </div>
                <div className={style.textOpen} style={arrowToggle2 ? {} : { display: 'none'}}>
                    <p>
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem 
                    </p>
                </div>
            </div>
            <div className={`${style.container}`} onClick={()=>onClicToggle(3)}>
                <div className={`${style.cardContainer}`}>
                    <div className={`col-3 col-mb-1 ${style.imgIcon}`}>
                        <img src={icon3} />
                    </div>
                    <div className={`col-9 ${style.textP}`}>
                        <p>You have 3 pending readings to complete 🤓</p>
                    </div>
                    <div className={`${style.divToggle}`}>
                        <img src={arrowToggle3 ? arrowUp : arrowDown} />
                    </div>
                </div>
                <div className={style.textOpen} style={arrowToggle3 ? {} : { display: 'none'}}>
                    <p>
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem 
                    </p>
                </div>
            </div>
        </>
    )
}

export default Accordion