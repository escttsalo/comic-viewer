import React from 'react';

import { 
    Box, 
    Tile, 
    Heading, 
    Notification, 
    Image 
} from 'react-bulma-components';

const Favorite = () => {
    return (
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
    );
};

export default Favorite;