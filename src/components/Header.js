import React, { useState } from 'react';
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'

const Header = () => {

    const [ sideBarStatus, setSideBarStatus] = useState(false);
    const cars  = useSelector(selectCars)
    console.log(cars)

    return(
        <Container>
            <a>
                <img src='/images/logo.svg' alt='' />
            </a>
            <Menu>
                { cars && cars.map((car, index)=> 
                    <a key={index} href='#'>{car}</a>
                ) }
                <a href='#'>Solar Panels</a>
                <a href='#'>Solar Roof</a>
            </Menu>
            <RightMenu>
                <a href='#'>Shop</a>
                <a href='#'>Tesla Account</a>
                <CustomMenu onClick= { ()=>setSideBarStatus(true) }/>
            </RightMenu>
            <BurgerNav show={sideBarStatus}>
                <CloseWrap>
                    <CustomClose onClick= { ()=>setSideBarStatus(false) }/>
                </CloseWrap>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">CyberTruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Semi</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Powerwall</a></li>
                <li><a href="#">Commercial Energy</a></li>
                <li><a href="#">Utilities</a></li>
                <li><a href="#">Find Us</a></li>
                <li><a href="#">Support</a></li>
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
