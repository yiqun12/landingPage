import React, {useState, useEffect} from 'react'
import { Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    HamburgerIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
 } from './Navbar.elements'
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles';
import logo from './logo_fork_trans.png'; // adjust the path to your actual image location
import { useMemo } from 'react';
import { useMyHook } from '../myHook';

//import logo from './Logo.png';


function Navbar() {
  /**listen to localtsorage */
  const { id, saveId } = useMyHook(null);
  useEffect(() => {
    //console.log('Component B - ID changed:', id);
  }, [id]);

  // for translations sake
  const trans = JSON.parse(sessionStorage.getItem("translations"))
  const t = useMemo(() => {
    const trans = JSON.parse(sessionStorage.getItem("translations"))
    const translationsMode = sessionStorage.getItem("translationsMode")

    return (text) => {

      if (trans != null) {
        if (translationsMode != null) {
          if (trans[text] != null) {
            if (trans[text][translationsMode] != null) {
              return trans[text][translationsMode]
            }
          }
        }
      }

      return text
    }
  }, [sessionStorage.getItem("translations"), sessionStorage.getItem("translationsMode")])


  const changeLanguage = (e) => {
    saveId(Math.random())
    var languageCode = e.target.value
    sessionStorage.setItem("translationsMode", languageCode)
  }

  const languageOption = () => {
    //console.log(sessionStorage.getItem("translationsMode"))
    if (sessionStorage.getItem("translationsMode") == null)
      return 'en'
    else
      return sessionStorage.getItem("translationsMode")
  }

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const [homeClick, setHomeClick] = useState(false);
    const [servicesClick, setServicesClick] = useState(false);
    const [productsClick, setProductsClick] = useState(false);

    const handleHomeClick = () => {
        setHomeClick(true);
        setProductsClick(false);
        setServicesClick(false);
    }
    const handleServicesClick = () => {
        setHomeClick(false);
        setProductsClick(false);
        setServicesClick(true);
    }
    const handleProductsClick = () => {
        setHomeClick(false);
        setProductsClick(true);
        setServicesClick(false);
    }

    const handleClick = () =>  setClick(!click);
    
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        // so if the screensize is <= 960px then set button state to false
        if(window.innerwidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'> 
                    <div style={{
      width: '50px', 
      height: '50px',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <img 
        src={logo} 
        alt="Logo"
        style={{
          width: '100px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }} 
      />
    </div>
    {t("EatifyDash")} 
                    </NavLogo>
                    <HamburgerIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </HamburgerIcon>
                    <NavMenu  click={click} >
                    <NavItem disabled>
                    <select style={{"margin":"auto","margin-top":"30px"}} class="selectpicker" data-width="fit" onChange={changeLanguage}>
              {/**如果选择中文，框显示成lang，如果是eng,框显示语言 */}
              <option value='en' data-content='<span class="flag-icon flag-icon-us"></span> English' selected={languageOption() == 'en' ? true : false}>English</option>
              <option value='ch' data-content='<span class="flag-icon flag-icon-mx"></span> Chinese' selected={languageOption() == 'ch' ? true : false}>中文</option>
            </select>
            </NavItem>
                        <NavItem onClick={handleHomeClick} homeClick={homeClick}>
                            <NavLinks to='/' onClick={closeMobileMenu}>
                            {t("Home")}
                            </NavLinks>
                        </NavItem>
                    
                    
                        <NavItem onClick={handleServicesClick} servicesClick={servicesClick}>
                            <NavLinks to='/services' onClick={closeMobileMenu}>
                                
                                {t("Services")}
                            </NavLinks>
                        </NavItem>
                    
                    
                        <NavItem onClick={handleProductsClick} productsClick={productsClick}>
                            <NavLinks to='/careers' onClick={closeMobileMenu}>
                                
                                {t("Careers")}
                            </NavLinks>
                        </NavItem>

                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>    
        </>
    )
}

export default Navbar
