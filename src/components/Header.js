import React, { useState } from 'react';
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'
import { Link } from "react-scroll";

const Header = () => {

    const [ sideBarStatus, setSideBarStatus] = useState(false);
    const cars  = useSelector(selectCars)
    console.log(cars)

    return(
        <Container>
            <a href="#section1">
                <img src='/images/logo.svg' alt='' />
            </a>
            <Menu>
                {/* cars && cars.map((car, index)=> 
                    <a key={index} href='#'>{car}</a>
                ) */}
                <Link 
                activeClass="active" 
                to="section1" 
                spy={true}
                smooth={true} 
                offset={0}
                duration={1000}>
                    Model S
                </Link>
                
                <Link 
                activeClass="active" 
                to="section2" 
                spy={true}
                smooth={true} 
                offset={0}
                duration={1000}>
                    Model Y
                </Link>
                
                <Link 
                activeClass="active" 
                to="section3" 
                spy={true}
                smooth={true} 
                offset={0}
                duration={1000}>
                    Model 3
                </Link>
                
                <Link 
                activeClass="active" 
                to="section4" 
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}>
                    Model X
                </Link>
                
                <Link 
                activeClass="active" 
                to="section5" 
                spy={true}
                smooth={true} 
                offset={0}
                duration={1000}>
                    Solar Panels
                </Link>
                
                <Link 
                activeClass="active" 
                to="section6" 
                spy={true}
                smooth={true} 
                offset={0}
                duration={1000}>
                    Solar Roof
                </Link>
            </Menu>
            <RightMenu>
                <a href='#shop'>Shop</a>
                <a href='#account'>Tesla Account</a>
                <CustomMenu onClick= { ()=>setSideBarStatus(true) }/>
            </RightMenu>
            <BurgerNav show={sideBarStatus}>
                <CloseWrap>
                    <CustomClose onClick= { ()=>setSideBarStatus(false) }/>
                </CloseWrap>
                <li>Existing Inventory</li>
                <li>Used Inventory</li>
                <li>Trade-In</li>
                <li>CyberTruck</li>
                <li>Roadster</li>
                <li>Semi</li>
                <li>Charging</li>
                <li>Powerwall</li>
                <li>Commercial Energy</li>
                <li>Utilities</li>
                <li>Find Us</li>
                <li>Support</li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
        cursor: pointer;
    }

    @media(max-width: 768px){
        display: none;
    }


`

const RightMenu = styled.div`
    display: flex;
    align-items: center;

    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 10;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show? 'translateX(0)':'translateX(100%)'};
    transition: transform 0.2s ease-in;
    li{
        padding: 10px;
        font-weight: 500;
        margin: 12px 0px;
        cursor: pointer;
    }

    li:hover{
        background: #F2F2F2;
        border-radius: 10px;
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrap = styled.div`
    display: flex;
    justify-content: flex-end;
`
