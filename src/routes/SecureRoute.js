import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Logo from '../assets/img/logo.svg';
import SidebarMenu from '../component/SidebarMenu';

const SecureRoute = () => {
    const checkToken = useSelector((state) => state.auth.isAuthenticate)
    return (
        <>
            {checkToken ?
                <div id="appWrapper">
                    {/* sidebar area */}
                    <div id="sidebar">
                        {/* sibar logo box */}
                        <div className="logoBoxSidebar">
                            <a href="/">
                                <img src={Logo} alt="" />
                                <span>Craft</span>
                            </a>
                        </div>
                        {/* nav menu box */}
                        <div className="sidebarMenuBox hover-scroll-y">
                            <SidebarMenu />
                        </div>
                    </div>
                    <div id="mainAppContent">
                        {/* app header area */}
                        <header id='AppHeader'>
                            ssdvdv
                        </header>
                        <div id="ContentPreview">
                            <Outlet />
                        </div>
                        <div id="appFooter">
                            footer
                        </div>
                    </div>
                </div>
            :
                <Navigate to='/login'/>
            }
        </>
    )
}
export default SecureRoute;