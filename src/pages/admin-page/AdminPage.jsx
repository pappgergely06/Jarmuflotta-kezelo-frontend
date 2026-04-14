import { Flex } from '@chakra-ui/react';
import { Provider } from '../../components/ui/chakra-snippets/provider';
import style from './AdminPage.module.css'

function AdminPage() {
    return (
        <Provider>
            <Flex
                width={"100%"} 
                minHeight={"90vh"}
                px={4}
                alignItems={"center"} 
                flexDirection={"column"} 
                justifyContent={"center"}
            >

            </Flex>
        </Provider>
    );
}

export default AdminPage;