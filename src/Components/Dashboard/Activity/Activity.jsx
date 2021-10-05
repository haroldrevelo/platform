import React from "react";
import style from "./Activity.module.css"
import imgArrow from "./../EventsComponent/img/right-arrow.svg"
import Accordion from "./Accordion/Accordion"

function Activity() {
    return (
        <div className="col-12">
            <div className="row">
                <div className={`col-1 ${style.divTitle}`}>
                    <div>
                        <h2 className={style.title}>Activity</h2>
                    </div>
                </div>
                <div className={`col-10 ${style.divHr}`}>
                    <hr />
                </div>
                <div className={`col-1 ${style.buttonContainer}`}>
                    <button className={style.buttonArrow}><img className={style.imgArrow} src={imgArrow} /></button>
                </div>
            </div>
            <div className="mt-4">
                <Accordion />
            </div>
        </div>
    )
}

export default Activity