import React from "react"
import style from "./Search.module.css"
import FeatherIcon from 'feather-icons-react';

function Search(){
    return(
        <div className={`container-fluid ${style.containerSearchNav}`}>
                <div className={` col-12 ${style.container}`}>
                <div className={`${style.containerSearch}`}>
                    <input className={style.inputSearch} type="search" id="search" placeholder="Search and Find" />
                    <span className={style.spanIcon}><FeatherIcon className={style.icon} icon="search" /></span>
                </div>
                </div>
            </div>
    )
}

export default Search