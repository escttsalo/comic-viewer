import React from 'react';
import { Block, Form, Heading, Box, Section, Notification, Columns, Icon } from 'react-bulma-components'; //eslint-disable-line
const { Column } = Columns;
const { Control, Field, Select } = Form;

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

                                    <Heading size={4} textColor='light' style={{marginBottom: 10, marginLeft: '5%'}}>
                                        Account Type
                                    </Heading>
                                    <Notification backgroundColor='dark' paddingless style={{marginLeft: '5%'}}>
                                        Here you can change your user role to that of a creator. Unlocking the creator dashboard.
                                    </Notification>

                                    <Field style={{marginLeft: '5%'}} backgroundColor='dark'>
                                        <Control backgroundColor='dark'>
                                            <Select value='op1' backgroundColor='grey-light' color='grey-light' status='focus'>
                                                <option value='op1'>
                                                    User
                                                </option>
                                                <option value='op2'>
                                                    Creator
                                                </option>
                                                <option value='op3'>
                                                    Moderator
                                                </option>
                                                <option value='op4'>
                                                    Admin
                                                </option>
                                            </Select>
                                        </Control>
                                    </Field>
                                </Block>
                            </Box>
                        </Box>
                    </Column>

                    {/* Favourites */}
                    <Column size={'one-third'} offset={2}>
                        <Box backgroundColor='black'>
                            <Notification backgroundColor='dark' color='black' textAlign='center'>
                                <Heading textFamily='code'>
                                    Favourites
                                </Heading>
                            </Notification>
                        </Box>
                    </Column>
                </Columns>
            </Section>
        </div>
    );
};