import { Box, Button, Message, Form, Icon } from "react-bulma-components";
const { Field, Label, Control, Input, Help} = Form;
const { Body } = Message;

const LoginForm = ({handleLogin}) => {
    return (
        <Box backgroundColor='black'>
            <Message color='info' size='small' backgroundColor='dark'>
                <Body backgroundColor='dark' textColor='light'>
                    Please enter your login credentials.
                </Body>
            </Message>
            <Field>
                <Label textColor='light'>
                    Username
                </Label>
                <Control>
                    <Input 
                        placeholder='Username'
                        type='text'
                    />
                    <Icon align='left'>
                        <i class="fas fa-user"/>
                    </Icon>
                </Control>
                <Help textColor='danger'> Invalid username! </Help>

                <Label textColor='light'>
                    Password
                </Label>
                <Control>
                    <Input 
                        placeholder='Password'
                        type='text'
                    />
                    <Icon align='left'>
                        <i class='fas fa-key'/>
                    </Icon>
                </Control>
                <Help textColor='danger'> Invalid password! </Help>

                <Field>
                    <Control>
                        <Button color='link' onClick={handleLogin}>
                            Login
                        </Button>
                    </Control>
                </Field>
            </Field>
        </Box>
    );
};

export default LoginForm;