import React from 'react';
import { Icon } from './SidebarElements';
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Text } from './SigninElements';

const Signin = () => {
  return (
    <>
    <Container>
        <FormWrap>
            <Icon to='/'>dolla</Icon>
            <FormContent>
                <Form action='#'>
                    <FormH1>Sign In to your account</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' required />
                    <FormButton type='submit'>Continue</FormButton>
                    <Text>Forgot Password</Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
  )
}

export default Signin;