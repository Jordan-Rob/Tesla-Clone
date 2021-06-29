import React from 'react';
import styled from 'styled-components'
import Section from './Section'

const Home = () => {

    return(
        <div>
          <Container>
            <Section 
            title='Model S'  
            description='Order Online for Touchless Delivery'
            backgroundImg='model-s.jpg'
            leftBtnText= 'Custom Order'
            rightBtnText='Existing Inventory'
            id="section1"
            /> 
            <Section 
            title='Model Y'  
            description='Order Online for Touchless Delivery'
            backgroundImg='model-y.jpg'
            leftBtnText= 'Custom Order'
            rightBtnText='Existing Inventory'
            id="section2"
            /> 
            <Section 
            title='Model 3'  
            description='Order Online for Touchless Delivery'
            backgroundImg='model-3.jpg'
            leftBtnText= 'Custom Order'
            rightBtnText='Existing Inventory'
            id="section3"
            /> 
            <Section 
            title='Model X'  
            description='Order Online for Touchless Delivery'
            backgroundImg='model-x.jpg'
            leftBtnText= 'Custom Order'
            rightBtnText='Existing Inventory'
            id="section4"
            /> 
            <Section 
            title='Lowest Cost Solar Panels in America'  
            description='Money-back guarantee'
            backgroundImg='solar-panel.jpg'
            leftBtnText= 'Custom Order'
            rightBtnText='Learn More'
            id="section5"
            /> 
            <Section 
            title='Solar for New Roofs'  
            description='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
            backgroundImg='solar-roof.jpg'
            leftBtnText= 'Custom Order'
            rightBtnText='Learn More'
            id="section6"
            /> 
            <Section 
            title='Accesories'  
            description=''
            backgroundImg='accessories.jpg'
            leftBtnText= 'Shop Now'
            id="section7"
            /> 
          </Container>
        </div>
    )
}

const Container = styled.div`
    height:100vh;
`

export default Home