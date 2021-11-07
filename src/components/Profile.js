import React from 'react';
import { Block, Box, Container, Section, Notification } from 'react-bulma-components';

export default function Profile() {
    return (
        <div>
            <Section breakpoint='fluid' backgroundColor='danger'>
                <Block breakpoint='mobile' backgroundColor='warning' color='link'>
                    <Box style={{width: '90%', margin: 'auto'}} backgroundColor='link' color='link'>  
                        <Notification backgroundColor='dark' color='black'>
                            Hi Welcome to the user dashboard!
                        </Notification>
                    </Box>
                </Block>
            </Section>
        </div>
    );
};