import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import Logo from '../../Assets/IMG/Group.png'
import style from './AdminHeader.module.css';
import FeatherIcon from 'feather-icons-react';
import iconDrop from '../../Assets/IMG/Notification - Iconly---Bold.png'
import iconChatBold from '../../Assets/IMG/Chat - Iconly---Bold.png'
import notification1 from '../../Assets/IMG/thumb-notification1.png'
import notification2 from '../../Assets/IMG/thumb-notification2.png'
import notification3 from '../../Assets/IMG/thumb-notification3.png'
import imgProfile from '../../Assets/IMG/Placeholders/Profile/Picture.png'
import imgDownProfile from '../../Assets/IMG/Arrow---Down-2 - Iconly---Bold.png'

function AdminHeader(props) {
    const [dropDownShow, setdropDownShow] = useState('none')
    const iconDropdown = <img src={iconDrop} />
    const iconChat = <img src={iconChatBold} />

    function dropdownClic(){
        if(dropDownShow == 'none'){
            setdropDownShow('')
        } else {
            setdropDownShow('none')
        }        
    }
    return (
        <Navbar className={`position-relative ${style.navBarHeader}`} px-3 collapseOnSelect expand="lg" variant="light">
            <Navbar.Brand href="#home"><img src={Logo} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-md-auto">
                    <div className={style.box}>
                        <div className={style.containerSearch}>
                            <input className={style.inputSearch} type="search" id="search" placeholder="Search and Find" />
                            <span className={style.spanIcon}><FeatherIcon className={style.icon} icon="search" /></span>
                        </div>
                    </div>
                </Nav>
                <Nav className={`ms-auto align-items-center`}>
                    <button className={style.buttonAdd}>+ ADD</button>
                    <div className={style.dropdown} onClick={()=>{dropdownClic()}}>
                        <button class={style.dropbtn}>{iconDropdown}
                            <FeatherIcon className={style.iconCircle} icon="circle" fill="#3D84FF" />
                        </button>                        
                        <div className={style.dropdownContent} style={{display: dropDownShow}} >
                        <svg className={`bi bi-caret-up-fill ${style.caretUp}`} width="40px" height="40px" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 22h-24l12-20z"/>
                        </svg>
                            <a className={`col-12 ${style.itemDrop}`} href="#">
                                    <div className="col-2">
                                        <img src={notification1} />
                                    </div>
                                    <div className={`col-10 ${style.itemDropText}`}>
                                        <h6>You have a new session to re...</h6>
                                        <span>Today, 10:30AM</span>
                                    </div>
                            </a>
                            <a className={`col-12 ${style.itemDrop}`} href="#">
                                    <div className="col-2">
                                        <img src={notification2} />
                                    </div>
                                    <div className={`col-10 ${style.itemDropText}`}>
                                        <h6>You have a virtual session…</h6>
                                        <span>Yesterday, 9:45PM</span>
                                    </div>
                            </a>
                            <a className={`col-12 ${style.itemDrop}`}href="#">
                                    <div className="col-2">
                                        <img src={notification3} />
                                    </div>
                                    <div className={`col-10 ${style.itemDropText}`}>
                                        <h6>You have a face to face sta…</h6>
                                        <span>Yesterday, 10:00PM</span>
                                    </div>
                            </a>
                        </div>
                    </div>
                    <Nav.Link href="#">{iconChat}</Nav.Link>
                    <Nav.Link className={style.nameProfile} href="#">
                        Claurence Russ
                    </Nav.Link>
                    <Nav.Link href="#">
                        <div>
                        <img src={imgProfile}/>
                        <img className="p-2" src={imgDownProfile} />
                        </div>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default AdminHeader;