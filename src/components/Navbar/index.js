import React from 'react'
import { FaBars } from 'react-icons/fa'
import { 
    Nav, 
    NavLogo,
    NavbarContainer, 
    MobileIcon, 
    NavMenu, 
    NavItem,
    NavLinks, 
    NavBtn,
    NavBtnLink } from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav> 
                <NavbarContainer> 
                    <NavLogo to='/'>home</NavLogo>
                        <MobileIcon> 
                            <FaBars />
                        </MobileIcon> 
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='about'>
                                    About
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='beep'>
                                    Beep
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='discover'>
                                    Discover
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                    <NavBtn>
                        <NavBtnLink to ="/portal">Portal</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar
