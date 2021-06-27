import React from 'react';
import styled from 'styled-components'
import Section from './Section'

const Home = () => {

    return(
        <div>
          <Container>
            <Section /> 
          </Container>
        </div>
    )
}

const Container = styled.div`
    height:100vh;
`

export default Home