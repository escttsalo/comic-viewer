import React, { useState } from 'react';
import { Button, Navbar } from 'react-bulma-components';
import LoginForm from './LoginForm';
import ProfileForm from './ProfileForm';

const {Brand, Item, Burger, Container, Menu, Link, Dropdown } = Navbar;

const initialActive = {
    burger: '',
    modal: '',
};

const menuName = {
    profile: 'Profile',
    login: 'Login'
};


export default function Navigation(){
    const [isActive, setActive] = useState(initialActive);
    const [loggedIn, setLoggedIn] = useState(false);
    const [activeItem, setActiveItem] = useState(false);
    const { burger, modal } = isActive;

    const handleClick = e => {
        e.preventDefault();
        console.log(e.target.className);
        setActiveItem(!activeItem);
        if (e.target.className.search('burger')>0) {
            burger==='' ? setActive({...isActive, burger: 'is-active'}) : setActive({...isActive, burger: '' });
        }
        if (e.target.className.search('button')>0) {
            console.log('check');
            modal==='' ? setActive({...isActive, modal: 'is-active'}) : setActive({...isActive, modal: ''});
        }
    };

    const handleLogin = e => {
        e.preventDefault();
        setLoggedIn(!loggedIn);
    };

    const handleLink = e => { //eslint-disable-line
        e.preventDefault();
        setActiveItem(!activeItem);
    };

    return (
        <Navbar color={'dark'} size={'large'} transparent={true}>
            {/* left side */}
            <Brand>
                <Item href="https://github.com/escttsalo/comic-viewer">
                    <i className="fab fa-github fa-3x"/>
                </Item>

                <Item href="/" backgroundColor='danger'>
                    <img 
                        alt="Bulma: a modern CSS framework based on Flexbox"
                        height="28"
                        src="https://bulma.io/images/bulma-logo.png"
                        width="112"
                    />
                </Item>
                {/* Hamburger style menu in mobile */}
                <Burger data-target='navbarmenu' onClick={handleClick} className={burger}/>
            </Brand>

            {/*Menu on right */}
            <Menu id='navbarmenu' className={burger} backgroundColor='dark'>
                <Container>
                    {/* fluff */}
                </Container>
                <Container align="right" backgroundColor='dark'>
                    <Item renderAs='div' active={activeItem} style={{ cursor: 'default', width: 300, justifyContent: 'center'}}> 
                        <Link color='light' arrowless renderAs='div' backgroundColor='dark'>
                            <Button color='danger' renderAs='span' onClick={handleClick}>
                                {/* Login/Profile*/}
                                { !loggedIn ? menuName.login : menuName.profile }
                            </Button>
                        </Link>
                        <Dropdown renderAs='div' right boxed backgroundColor='dark'>
                            <Item renderAs='div' style={{flexDirection: 'row-reverse', position: 'relative', float: 'left'}}>
                                { !loggedIn ? <LoginForm handleLogin={handleLogin}/> : <ProfileForm handleLogin={handleLogin}/> }
                            </Item>
                        </Dropdown>
                    </Item>
                </Container>
            </Menu>
        </Navbar>
    );
};