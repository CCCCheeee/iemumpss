import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';

const BurgerMenus = ({setMenuOpen, menuOpen}) => {

      const [home, setHome] = useState(false)
      const [event, setEvent] = useState(false)
      const [blog, setBlog] = useState(false)
      const [committee, setCommittee] = useState(false)

      const router = useRouter()
      const [path, setPath] = useState("")
      useEffect(() => {
        setPath(router.pathname)
      }, [router])

      const openMobileMenu = menu => {
        
        if( menu == 'home'){
          setHome(!home)
          setEvent(false)
          setBlog(false)
          setCommittee(false)
        }
        else if( menu == 'event'){
          setHome(false)
          setEvent(!event)
          setBlog(false)
          setCommittee(false)
        }
        else if( menu == 'blog'){
          setHome(false)
          setEvent(false)
          setBlog(!blog)
          setCommittee(false)
        }
        else if( menu == 'committee'){
          setHome(false)
          setEvent(false)
          setBlog(false)
          setCommittee(!committee)
        }
      }; 

      return (
        <div className={menuOpen ? "sidebar__area open": "sidebar__area"}>
          <div className="sidebar__wrapper">
            <div className="sidebar__close">
                <button className="sidebar__close-btn" id="sidebar__close-btn" onClick={() => setMenuOpen(false)}>
                  <span><i className="fas fa-times"></i></span>
                  <span>close</span>
                </button>
            </div>
            <div className="sidebar__content">
                <div className="logo mb-40">
                  <Link href="/"><img src="assets/img/logo/logo.png" alt="logo"/></Link>
                </div>
                <div className="mm-menu">
                  <ul>
                    <li>
                      <a onClick={() => { openMobileMenu('home'); }}>Home</a>
                    </li>
                    <li>
                      <a onClick={() => { openMobileMenu('event'); }}>Event</a>

                    </li>
                    <li>
                      <a onClick={() => { openMobileMenu('blog'); }}>Blog</a>
                    </li>
                    <li className={committee ? "has-droupdown active" : "has-droupdown"}>
                      <a onClick={() => { openMobileMenu('committee'); }}>Committee</a>
                      <ul className={committee ? "sub-menu active" : "sub-menu"}>
                        <li><Link href="/22-23">Committee 22/23</Link></li>
                        <li><Link href="/21-22">Committee 21/22</Link></li>
                   
                    </ul>
                  </li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </div>

                <div className="sidebar__search p-relative mt-40 ">
                  <form action="#">
                      <input type="text" placeholder="Search..."/>
                      <button type="submit"><i className="fas fa-search"></i></button>
                  </form>
                </div>
                {/* <div className="sidebar__cart mt-30">
                  <a href="#">
                      <div className="header__cart-icon">
                        <svg viewBox="0 0 24 24">
                            <circle className="st0" cx="9" cy="21" r="1"/>
                            <circle className="st0" cx="20" cy="21" r="1"/>
                            <path className="st0" d="M1,1h4l2.7,13.4c0.2,1,1,1.6,2,1.6h9.7c1,0,1.8-0.7,2-1.6L23,6H6"/>
                        </svg>
                      </div>
                      <span className="cart-item">2</span>
                  </a>
                </div> */}
            </div>
          </div>
        </div>
      );
}

export default BurgerMenus;