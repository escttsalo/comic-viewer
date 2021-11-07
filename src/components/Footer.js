import React from 'react';
import styled from 'styled-components';
import { Block, Footer, Container, Notification, Box } from 'react-bulma-components';


//Style Components
const StyledLink = styled.a`
    color: blue;
    a:link{
        color: white;
    }
`;

const StyledPar = styled.p`
    color: beige;
    background-color: dark;
`;

const StyledStr = styled.strong`
    color: beige;
`;


//Style Object 
const boxStyles = {
    textAlign: 'center',
    color: 'blue', 
    width: '30%', 
    marginTop: '2rem', 
    margin: 'auto',
};


//Component
const AppFooter = () => {
    return (
        <div>
            <Footer backgroundColor='dark'>
                <Container backgroundColor='dark'>
                    <Box style={boxStyles} backgroundColor='black'>
                        <StyledPar>
                            Built with <StyledStr>Bulma</StyledStr> and <StyledStr>React</StyledStr>.
                            Source code is on <StyledLink href='https://github.com/escttsalo/comic-viewer'>Github</StyledLink>.
                        </StyledPar>
                    </Box>
                </Container>
                <Container backgroundColor='dark' style={{paddingTop: 20}}>
                    <Block style={boxStyles} backgroundColor='black'>
                        <Notification backgroundColor='black'>Links here</Notification>
                    </Block>
                </Container>
            </Footer>
        </div>
    );
};

export default AppFooter;