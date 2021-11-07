import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

    //will be get by api
    // const getCurrentRole = () => {
    //     return User.role
    // };
    let [currentRole, setCurrentRole] = useState("User");

    const roles = [
        "User",
        "Creator",
        "Moderator",
        "Admin"
    ];

    const handleChange = event => {
        event.preventDefault();
        if (event.target.value === "Creator"){
            setCurrentRole("Creator");
        } else {
            setCurrentRole("User");
        }
    };

    return (
        <div>
            <Section backgroundColor='black' >
                <Columns backgroundColor='dark' marginless style={{paddingBottom: '3rem'}}>
                    {/* Profile*/}
                    <Column size={'one-third'} offset={1} style={{marginTop: '3%'}}>
                        <Box backgroundColor='black'>
                            {/* Profile Information */}
                            <Notification backgroundColor='dark' color='black' textAlign='center'>
                                <Heading textFamily='code'>
                                    Profile Information
                                </Heading>
                            </Notification>
                            <Box backgroundColor='dark'>
                                <Block backgroundColor='dark' textColor='light'>
                                    {/* Username */}
                                    <Heading subtitle textColor='light' style={{marginBottom: 10, marginTop: 5}}>
                                        <i class="fas fa-user"/> Username
                                    </Heading>
                                    <p style={commonStyles}>
                                        {
                                            `${username}`
                                        }
                                    </p>

                                    {/* Email */}
                                    <Heading subtitle textColor='light' style={{marginBottom: 10}}>
                                        <i class="fas fa-solid fa-at"/> Email
                                    </Heading>
                                    <p style={commonStyles}>
                                        {
                                            `${email}`
                                        }
                                    </p>

                                    {/* Account Type */}
                                    <Heading size={4} textColor='light' style={{marginBottom: 10, marginLeft: '5%'}}>
                                        Account Type
                                    </Heading>
                                    <Notification backgroundColor='dark' paddingless style={{marginLeft: '5%'}}>
                                        Here you can change your role to that of a creator.<br/> Unlocking the creator dashboard.
                                    </Notification>

                                    <Field style={{marginLeft: '5%'}} backgroundColor='dark'>
                                        <Control backgroundColor='dark'>
                                            <Select onChange={handleChange} value={ `${currentRole}`} backgroundColor='grey-light' color='grey-light' status='focus'>
                                                {
                                                    roles.map( role => (
                                                        <option value={role}>
                                                            {role}
                                                        </option>)
                                                    )
                                                }
                                            </Select>
                                        </Control>
                                    </Field>

                                    {
                                        currentRole === "User" 
                                        ? <br/> :
                                        <Notification 
                                            to={'/creator'} 
                                            renderAs={Link} 
                                            backgroundColor='dark' 
                                            textColor='link'
                                            paddingless 
                                            style={{marginLeft: '5%'}}
                                        >
                                            Creator Dashboard
                                        </Notification>
                                    }
                                </Block>
                            </Box>
                        </Box>
                    </Column>

                    {/* Favourites */}
                    <Column size={'one-third'} offset={2} style={{marginTop: '3%'}}>
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