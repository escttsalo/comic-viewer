import React from 'react';
import { Block, Footer, Container, Notification, Box } from 'react-bulma-components';


//Style Components
import { StyledLink, StyledPar, StyledStr } from './Styled/FooterStyles';

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
    );
};

export default AppFooter;