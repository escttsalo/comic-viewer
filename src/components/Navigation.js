import React, { useState } from 'react';
import { Button, Box, Message, Navbar, Form} from 'react-bulma-components';

const {Brand, Item, Burger, Container, Menu, Link, Dropdown } = Navbar;
const {Field, Label, Control, Input, Help} = Form;

export default function Navigation(){
    let [isActive, setActive] = useState('');

    const handleClick = e => {
        e.preventDefault();
        isActive==='' ? setActive("is-active") : setActive(isActive="");
    };

    return (
        <Navbar color={'dark'} size={'large'} transparent={true}>
            {/* left side */}
            <Brand>
                <Item href="https://github.com/escttsalo/comic-viewer">
                    <i className="fab fa-github fa-3x"/>
                </Item>

                <Item href="https://github.com/escttsalo/comic-viewer" backgroundColor='danger'>
                    <img 
                        alt="Bulma: a modern CSS framework based on Flexbox"
                        height="28"
                        src="https://bulma.io/images/bulma-logo.png"
                        width="112"
                    />
                </Item>
                {/* Hamburger style menu in mobile */}
                <Burger data-target='navbarmenu' onClick={handleClick} className={isActive}/>
            </Brand>

            {/*Menu on right */}
            <Menu id='navbarmenu' className={isActive}>
                <Container>
                    {/* fluff */}
                </Container>
                <Container align="right" style={{width: 300 , justifyContent: 'space-around'}}>
                    <Item href="#" renderAs='div' hoverable={true} > 
                        <Link color='light' arrowless={true} renderAs='div' style={{width: 300 , justifyContent: 'space-around'}} >
                            <Button color='danger' renderAs='span' >
                                Login
                            </Button>
                        </Link>
                        <Dropdown right={true}>
                            <Item href='#' style={{flexDirection: 'row-reverse'}}>
                                <Box>
                                    <Message color='info' size='small'>
                                        <Message.Body>
                                            Please enter your login credentials.
                                        </Message.Body>
                                    </Message>
                                    <Field>
                                        <Label>
                                            Username
                                        </Label>
                                        <Control>
                                            <Input 
                                                placeholder='Username'
                                                type='text'
                                            />
                                        </Control>
                                        <Help> Invalid username! </Help>

                                        <Label>
                                            Password
                                        </Label>
                                        <Control>
                                            <Input 
                                                placeholder='Password'
                                                type='text'
                                            />
                                        </Control>
                                        <Help> Invalid password! </Help>

                                        <Field>
                                            <Control>
                                                <Button color='link'>
                                                    Send
                                                </Button>
                                            </Control>
                                        </Field>
                                    </Field>
                                </Box>
                            </Item>
                        </Dropdown>
                    </Item>
                </Container>
            </Menu>
        </Navbar>
    );
};