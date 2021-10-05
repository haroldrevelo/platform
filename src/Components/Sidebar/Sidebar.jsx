import React, { useState } from 'react';
import style from './Sidebar.module.css';
import homeIconBold from './../../Assets/IMG/menu/Home - Iconly---Bold.png';
import homeIcon from './../../Assets/IMG/menu/Home - Iconly---Bold Copy.png'
import copyIcon from './../../Assets/IMG/menu/copy.png';
import copyIconBold from './../../Assets/IMG/menu/copy bold.png'
import copyX from '../../Assets/IMG/menu/copyX.png';
import copyXBold from '../../Assets/IMG/menu/CopyX bold.png';
import copyBarras from '../../Assets/IMG/menu/copyBarras.png';
import copyBarrasBold from '../../Assets/IMG/menu/copyBarras bold.png';
import copyPuntos from '../../Assets/IMG/menu/copyPuntos.png';
import copyPuntosBold from '../../Assets/IMG/menu/copyPuntos bold.png';

function Sidebar(props) {
    const [selected, setSelected] = useState(0)

    function handleOnclick(num){
        if(num != selected){
            setSelected(num)
        }
    }

    return (
        <sidebar className={`${style.sidenavNav} ${style.sidenavCollapsed}`}>
            <button role="button" className={style.sidenavToggle} aria-expanded="false">
                <span className={style.sidenavIconBar}></span>
                <span className={style.sidenavIconBar}></span>
                <span className={style.sidenavIconBar}></span>
            </button>
            <div role="menu" className={style.sidenavMenu}>
                <div onClick={()=>{handleOnclick(0)}} role="presentation" className={`${selected == 0 ? `${style.sidenavItem} ${style.sidenavSelected} ${style.sidenavHighlighted}` : `${style.sidenavItem}`}`}>
                    <div className={style.sidenavNavItem} role="menuitem" tabindex="-1">
                        <div className={style.sidenavNavIcon}>
                            <img src={selected == 0 ? homeIconBold : homeIcon} />
                        </div>
                        <div className={style.sidenavNavText}>Home</div>
                    </div>
                </div>
                <div onClick={()=>{handleOnclick(1)}} role="presentation" className={`${selected == 1 ? `${style.sidenavItem} ${style.sidenavSelected} ${style.sidenavHighlighted}` : `${style.sidenavItem}`}`}>
                    <div className={style.sidenavNavItem} role="menuitem" tabindex="-1">
                        <div className={style.sidenavNavIcon}>
                            <img src={selected == 1 ? copyIconBold : copyIcon} />
                        </div>
                        <div className={style.sidenavNavText}>Charts</div>
                    </div>
                </div>
                <div onClick={()=>{handleOnclick(2)}} role="presentation" className={`${selected == 2 ? `${style.sidenavItem} ${style.sidenavSelected} ${style.sidenavHighlighted}` : `${style.sidenavItem}`}`}>
                    <div className={style.sidenavNavItem} role="menuitem" tabindex="-1">
                        <div className={style.sidenavNavIcon}>
                            <img src={selected == 2 ? copyXBold : copyX} />
                        </div>
                        <div className={style.sidenavNavText}>Charts</div>
                    </div>
                </div>
                <div onClick={()=>{handleOnclick(3)}} role="presentation" className={`${selected == 3 ? `${style.sidenavItem} ${style.sidenavSelected} ${style.sidenavHighlighted}` : `${style.sidenavItem}`}`}>
                    <div className={style.sidenavNavItem} role="menuitem" tabindex="-1">
                        <div className={style.sidenavNavIcon}>
                            <img src={selected == 3 ? copyBarrasBold : copyBarras} />
                        </div>
                        <div className={style.sidenavNavText}>Charts</div>
                    </div>
                </div>
                <div onClick={()=>{handleOnclick(4)}} role="presentation" className={`${selected == 4 ? `${style.sidenavItem} ${style.sidenavSelected} ${style.sidenavHighlighted}` : `${style.sidenavItem}`}`}>
                    <div className={style.sidenavNavItem} role="menuitem" tabindex="-1">
                        <div className={style.sidenavNavIcon}>
                            <img src={selected == 4 ? copyPuntosBold : copyPuntos} />
                        </div>
                        <div className={style.sidenavNavText}>Charts</div>
                    </div>
                </div>
            </div>
        </sidebar>
    )
}

export default Sidebar;