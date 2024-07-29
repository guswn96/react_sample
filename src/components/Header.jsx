import React, { useState } from 'react'

const headerNav = [
    {
        title: "intro",
        url: "#intro",
    },
    {
        title: "skill",
        url: "#skill",
    },
    {
        title: "site",
        url: "#site",
    },
    {
        title: "port",
        url: "#port",
    },
    {
        title: "contact",
        url: "#contact",
    }
]

const Header = () => {

    const [show,setShow] = useState(false); /* useState(false) : 현재상태 아무것도 안가짐 */
    // const [show,setShow] : show라는 변수 안에 들어가는 것은 setShow도 동일한 값을 가져감(비서같은 역할)
    const toggleMenu = () => {
        setShow((prevShow) => !prevShow);
        //toggle과 같은 역할 뭔가 들어가면 없애고 없으면 넣어주는 역할
        //setShow값에 show가 들어가면 없애주고 없으면 넣어주고...
    }

  return (
    <header id='header' role='banner'>
        <div className="header_inner">
            <div className="header_logo">
                <a href="/">Portfolio<em>react</em></a>
            </div>
            <div className={`header_nav ${show ? "show" : ""}`} role='navigation' aria-label='메인메뉴'>
                <ul>
                    {headerNav.map((nav,key)=>(
                        // nav는 변수 key값은 index(회전해야하는 대상)
                        <li key={key}>
                            <a href={nav.url}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="header_nav_mobile" id='headerToggle' aria-controls='primary_menu' aria-expanded ={show ? "true" : "false"} role='button' tabIndex="0" onClick={toggleMenu}>
                <span></span>
            </div>
        </div>
    </header>
  )
}

export default Header
