import React from 'react';

//Child Components
import Favorite from './Favorite';
import ProfileMenu from './ProfileMenu';

//Style Components
import {
    Heading, 
    Box, 
    Section, 
    Notification, 
    Columns,
} from 'react-bulma-components';

const { Column } = Columns;


export default function Profile() {
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

                            {/* Profile Menu */}
                            <ProfileMenu />
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
                            {/* Favourites */}
                            <Favorite />
                            <Favorite />
                            <Favorite />
                            <Favorite />
                        </Box>
                    </Column>
                </Columns>
            </Section>
        </div>
    );
};