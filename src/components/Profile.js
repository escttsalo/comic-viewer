import React from 'react';
import { Block, Form, Heading, Box, Section, Notification, Columns, Icon } from 'react-bulma-components'; //eslint-disable-line
const { Column } = Columns;

const commonStyles = {
    width: '85%', 
    paddingLeft: 25, 
    marginBottom: '10%'
};

export default function Profile() {
    const username = "Username";
    const email = "Email";

    return (
        <div>
            <Section backgroundColor='black' style={{height: '75vh'}}>
                <Columns backgroundColor='dark'>
                    {/* Profile*/}
                    <Column size={'one-third'} offset={1}>
                        <Box backgroundColor='black'>
                            <Notification backgroundColor='dark' color='black' textAlign='center'>
                                <Heading textFamily='code'>
                                    Profile Information
                                </Heading>
                            </Notification>
                            <Box backgroundColor='dark'>
                                <Block backgroundColor='dark' textColor='light'>
                                    <Heading subtitle textColor='light' style={{marginBottom: 10, marginTop: 5}}>
                                        <i class="fas fa-user"/> Username
                                    </Heading>
                                    <p style={commonStyles}>
                                        {
                                            `${username}`
                                        }
                                    </p>

                                    <Heading subtitle textColor='light' style={{marginBottom: 10}}>
                                        <i class="fas fa-solid fa-at"/> Email
                                    </Heading>
                                    <p style={commonStyles}>
                                        {
                                            `${email}`
                                        }
                                    </p>
                                </Block>
                            </Box>
                        </Box>
                    </Column>

                    {/* Favourites */}
                    <Column size={'one-third'} offset={2}>
                        <Notification backgroundColor='dark' color='black'>
                            Favourites
                        </Notification>
                    </Column>
                </Columns>
            </Section>
        </div>
    );
};