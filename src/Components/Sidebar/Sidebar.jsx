import React, { useState } from 'react';
import style from './Sidebar.module.css';
import homeIcon from './../../Assets/IMG/menu/Home - Iconly---Bold.png';
import copyIcon from './../../Assets/IMG/menu/copy.png';
import copyX from '../../Assets/IMG/menu/copyX.png';
import copyBarras from '../../Assets/IMG/menu/copyBarras.png';
import copyPuntos from '../../Assets/IMG/menu/copyPuntos.png';

function Sidebar(props) {
    return (
        <sidebar className={`${style.sidenavNav} ${style.sidenavCollapsed}`}>
            <button role="button" className={style.sidenavToggle} aria-expanded="false">
                <span className={style.sidenavIconBar}></span>
                <span className={style.sidenavIconBar}></span>
                <span className={style.sidenavIconBar}></span>
            </button>
            <div role="menu" className={style.sidenavMenu}>
                <div role="presentation" className={`${style.sidenavItem} ${style.sidenavSelected} ${style.sidenavHighlighted}`}>
                    <div className={style.sidenavNavItem} role="menuitem" tabindex="-1">
                        <div className={style.sidenavNavIcon}>
                            <img className={style.imgIcons} src={homeIcon} />
                        </div>
                        <div className={style.sidenavNavText}>Home</div>
                    </div>
                </div>
                <div role="presentation" className={`${style.sidenavItem} ${style.sidenavExpandable}`}>
                    <div className={style.sidenavNavItem} role="menuitem" tabindex="-1">
                        <div className={style.sidenavNavIcon}>
                            <img src={copyIcon} />
                        </div>
                        <div className={style.sidenavNavText}>Charts</div>
                    </div>
                </div>
                <div role="presentation" className={`${style.sidenavItem} ${style.sidenavExpandable}`}>
                    <div className={style.sidenavNavItem} role="menuitem" tabindex="-1">
                        <div className={style.sidenavNavIcon}>
                            <img src={copyX} />
                        </div>
                        <div className={style.sidenavNavText}>Charts</div>
                    </div>
                </div>
                <div role="presentation" className={`${style.sidenavItem} ${style.sidenavExpandable}`}>
                    <div className={style.sidenavNavItem} role="menuitem" tabindex="-1">
                        <div className={style.sidenavNavIcon}>
                            <img src={copyBarras} />
                        </div>
                        <div className={style.sidenavNavText}>Charts</div>
                    </div>
                </div>
                <div role="presentation" className={`${style.sidenavItem} ${style.sidenavExpandable}`}>
                    <div className={style.sidenavNavItem} role="menuitem" tabindex="-1">
                        <div className={style.sidenavNavIcon}>
                            <img src={copyPuntos} />
                        </div>
                        <div className={style.sidenavNavText}>Charts</div>
                    </div>
                </div>
            </div>
        </sidebar>
    )
}

export default Sidebar;