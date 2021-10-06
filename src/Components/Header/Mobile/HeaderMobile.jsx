import React from "react"
import style from "./HeaderMobile.module.css"
import Logo from './../../../Assets/IMG/Group.png'
import imgProfile from './../../../Assets/IMG/Placeholders/Profile/Picture.png'
import FeatherIcon from 'feather-icons-react';

function HeaderMobile() {
    return (
        <div>
            <div className={`container-fluid ${style.navbarContainer}`}>
                <nav className={`row ${style.navbar}`}>
                    <div className={`col-2`}>
                        <button role="button" className={style.sidenavToggle}>
                            <span className={style.sidenavIconBar}></span>
                            <span className={style.sidenavIconBar}></span>
                            <span className={style.sidenavIconBar}></span>
                        </button>
                    </div>
                    <div className={`col-7 ${style.imgLogo}`}>
                        <img src={Logo} />
                    </div>
                    <div className={`col-2 ${style.imgProfile}`}>
                        <img src={imgProfile} />
                        <FeatherIcon className={style.iconCircle} icon="circle" fill="#3D84FF" />
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default HeaderMobile

