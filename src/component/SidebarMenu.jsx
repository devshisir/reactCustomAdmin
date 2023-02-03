import React from 'react'
import { 
    Dashboard,
    Pages,
} from '../utils/IconImport'
import SVGinject from '@iconfu/svg-inject';
import { BiChevronDown } from "react-icons/bi";


function SidebarMenu() {
  return (
    <>
    <nav className='sidebarMenu'>
        <ul>
            <li className='menuItem'>
                <a href="/" className='menuLink'> 
                    <span className='icon'>
                        <img className='injectable' onLoad={(e) => SVGinject(e.target)} src={Dashboard} alt="" />
                    </span>
                    <span className='menuContent'>Dashboard</span>
                </a>
            </li>
            <li className='menuDevider'>
                <p className='text-uppercase'>CRAFTED</p>
            </li>
            <li>
                <div className="accordion" id="menuAcordions">
                    <div className="singleMenuBox">
                        <li class="accordion-header menuItem" id="headingOne">
                            <button type="button" data-bs-toggle="collapse" data-bs-target="#acordionMenu01" aria-expanded="true">
                            <span className='icon'>
                                <img className='injectable' onLoad={(e) => SVGinject(e.target)} src={Pages} alt="" />
                            </span>
                                <span className='menuContent'>Pages</span>
                                <span className='menuArrowIcon'><BiChevronDown /></span>
                            </button>
                        </li>
                        <div id="acordionMenu01" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#menuAcordions">
                            <div className="acordionMenuItem">
                                <ul>
                                    <li className='subMenuItem'>
                                        <a href="/">User Profile</a>
                                    </li>
                                    <li className='subMenuItem'>
                                        <a href="/">Social</a>
                                    </li>
                                    <li className='subMenuItem'>
                                        <a href="/">About</a>
                                    </li>
                                    <li className='subMenuItem'>
                                        <a href="/">FAQ</a>
                                    </li>
                                    <li className='subMenuItem'>
                                        <a href="/">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            
        </ul>
    </nav>
    </>
  )
}

export default SidebarMenu