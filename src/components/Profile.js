import React from 'react';
import { Block, Box, Section, Notification, Columns } from 'react-bulma-components';
const { Column } = Columns;

export default function Profile() {
    return (
        <div>
            <Section backgroundColor='danger' style={{height: '75vh'}}>
                <Columns backgroundColor='grey-light' styles={{width: 'inherit'}}>
                    {/* Profile*/}
                    <Column size={6}>
                        <Notification backgroundColor='dark' color='black'>
                            Profile
                        </Notification>
                    </Column>

                    {/* Favourites */}
                    <Column size={6} offset={0}>
                        <Notification backgroundColor='dark' color='black'>
                            Favourites
                        </Notification>
                    </Column>
                </Columns>
            </Section>
        </div>
    );
};