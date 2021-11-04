import React from 'react';
import { Navbar } from 'react-bulma-components';

export default function Navigation(){
    return (
        <Navbar color={'dark'} size={'large'}>
            {/* left side */}
            <Navbar.Brand>
                <Navbar.Item href="https://github.com/escttsalo/comic-viewer">
                    <i className="fab fa-github fa-3x"/>
                </Navbar.Item>
                {/* Hamburger style menu in mobile */}
                <Navbar.Burger />
            </Navbar.Brand>
            {/*Menu on right */}
            <Navbar.Menu>
                <Navbar.Container>
                    <Navbar.Item href="#">
                        <Navbar.Link>
                        First
                        </Navbar.Link>
                        <Navbar.Dropdown>
                            <Navbar.Item href="#">
                                Subitem 1
                            </Navbar.Item>
                            <Navbar.Item href="#">
                                Subitem 2
                            </Navbar.Item>
                            <Navbar.Divider />
                            <Navbar.Item href="#">
                                After divider
                            </Navbar.Item>
                        </Navbar.Dropdown>
                    </Navbar.Item>
                    <Navbar.Item href="#">
                        Second
                    </Navbar.Item>
                </Navbar.Container>
                <Navbar.Container align="end">
                    <Navbar.Item href="#">
                        At the end
                    </Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    );
};