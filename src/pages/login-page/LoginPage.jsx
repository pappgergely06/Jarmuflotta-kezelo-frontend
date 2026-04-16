import { Flex } from '@chakra-ui/react';
import LoginForm from '../../components/login-form/LoginForm';

function LoginPage() {
    return (
        <Flex
            width={"100%"}
            minHeight={"90vh"}
            px={4}
            alignItems={"center"}
            flexDirection={"column"}
            justifyContent={"center"}
        >
            <LoginForm />
        </Flex>
    );
}

export default LoginPage;