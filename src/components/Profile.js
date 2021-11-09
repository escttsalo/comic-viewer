import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Block, 
    Form, 
    Heading, 
    Box, 
    Section, 
    Notification, 
    Columns, 
    Icon, 
    Image,
    Tabs,
    Tile 
} from 'react-bulma-components';
const { Column } = Columns;
const { Checkbox, Control, Field, Select } = Form;
const { Tab } = Tabs;

const commonStyles = {
    width: '85%', 
    paddingLeft: 25, 
    marginBottom: '10%'
};

export default function Profile() {
    const username = "Username";
    const email = "Email";

    const initialTabs = {
        basic: true,
        extra: false
    };

    //will be get by api
    // const getCurrentRole = () => {
    //     return User.role
    // };
    const [currentRole, setCurrentRole] = useState("User");
    const [activeTabs, setActiveTabs] = useState(initialTabs);

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

    const handleTab = event => {
        event.preventDefault();
        if (event.target.id === "basic" || event.target.parentNode.id === "basic") {
            activeTabs.basic === false ? setActiveTabs({ extra: false,  basic: true}) : console.log("basic selected already");
        } else if (event.target.id === "extra" || event.target.parentNode.id === "extra") {
            activeTabs.extra === false ? setActiveTabs({ basic: false, extra: true }) : console.log('extra');
        }
    };

    return (
        <div>
            <Section backgroundColor='black' >
                <Columns backgroundColor='dark' marginless style={{paddingBottom: '3rem'}}>
                    {/* Profile*/}
                    <Column size={5} offset={0} style={{marginTop: '3%'}}>
                        
                        <Box backgroundColor='black'>
                            {/* Profile Information */}
                            <Notification backgroundColor='dark' color='black' textAlign='center'>
                                <Heading textFamily='code'>
                                    Profile Information
                                </Heading>
                            </Notification>
                            <Box backgroundColor='dark'>
                                <Tabs size='medium' textColor='light' align='center'>
                                    <Tab id='basic' active={activeTabs.basic} onClick={handleTab}>
                                        <i class="fas fa-user"/> <p style={{paddingLeft: 5}}> Basic </p>
                                    </Tab>
                                    <Tab id='extra' active={activeTabs.extra} onClick={handleTab}>
                                        <i class="fas fa-asterisk"/> <p style={{paddingLeft: 5}}> Extra </p>
                                    </Tab>
                                </Tabs>
                                {
                                    activeTabs.basic === true ? 
                                    /* Basics Tab */
                                    (   
                                        <Block backgroundColor='dark' textColor='light' style={{height: 400}}>
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
                                            
                                            {/* Creator Dashboard */}
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
                                    )
                                    : 
                                    /* Extra Tab*/
                                    (
                                        <Block style={{height: 400}}>
                                            <Heading subtitle textColor='light' style={{marginBottom: 10, marginTop: 5}}>
                                                <i class="fas fa-list"/> Preferences
                                            </Heading>
                                            <Notification backgroundColor='dark' textColor='light' paddingless style={{marginLeft: '5%'}}>
                                                Receive email notifications to new updates of comics in your Favourites?
                                            </Notification>
                                            <Field textColor='light'>
                                                <Control >
                                                    <Checkbox size={3}>
                                                        Receive email updates
                                                    </Checkbox>
                                                </Control>
                                            </Field>
                                        </Block>
                                    )
                                }
                            </Box>
                        </Box>
                    </Column>

                    {/* Favourites */}
                    <Column size={6} offset={1} style={{marginTop: '3%'}}>
                        <Box backgroundColor='black' >
                            <Notification backgroundColor='dark' color='black' textAlign='center'>
                                <Heading textFamily='code'>
                                    Favourites
                                </Heading>
                            </Notification>
                            <Box backgroundColor='dark' >
                                <Tile kind='ancestor' >
                                    <Tile >
                                        <Tile kind='parent' vertical>
                                            <Tile kind='child' align='center'>
                                                <Heading subtitle textColor='light' marginless align='center'>Comic Name</Heading>
                                                <Notification  paddingless backgroundColor='dark' textColor='light' align='center'> Comic Tags</Notification>
                                                {/* <Heading subtitle textColor='light'>Comic rating</Heading> */}
                                                <Image
                                                    style={{width: 175}}
                                                    src='https://i.ibb.co/c8B8VXr/klemen-vrankar-m-YL3-OWayf-Uc-unsplash-1.jpg'
                                                />
                                            </Tile>
                                        </Tile>
                                    </Tile>
                                    <Tile>
                                        <Tile kind='parent' vertical>
                                            <Tile kind='child' align='center'>
                                                <Heading subtitle textColor='light' marginless>Summary</Heading>
                                            </Tile>
                                            <Tile kind='child'>
                                                <Notification align='center' paddingless backgroundColor='dark' textColor='light'>
                                                    Summary
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                                                </Notification>
                                            </Tile>'
                                            <Tile kind='child'>
                                                <Notification paddingless align='center' backgroundColor='dark' textColor='light'>
                                                    Rating
                                                </Notification>
                                            </Tile>
                                        </Tile>
                                    </Tile>
                                </Tile>
                            </Box>
                        </Box>
                    </Column>
                </Columns>
            </Section>
        </div>
    );
};