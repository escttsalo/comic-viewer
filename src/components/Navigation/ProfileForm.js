import { Box, Block, Message, Button, Image, Notification } from "react-bulma-components";

const ProfileForm = ({handleLogin}) => {
    return (
        <Box>
            <Message marginless>
                Logged in as: Some Guy
            </Message>

            <Box>
                <Block>
                    <Image>
                
                    </Image>
                    User Logged In
                </Block>
            </Box>

            <Notification marginless renderAs='a' href='/profile'>
                Go to Profile
            </Notification>

            <Button onClick={handleLogin}>
                Logout
            </Button>
        </Box>
    );
};

export default ProfileForm;