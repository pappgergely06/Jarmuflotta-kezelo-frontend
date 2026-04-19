import { Flex, Grid } from '@chakra-ui/react';
import style from './DriverPage.module.css'
import Navbar from '../../components/navbar/Navbar';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router';

function DriverPage() {

    const { user } = useAuth()

    return (
        <>
            {
                !user && <Navigate to={"/"}/>
            }
            {
                <Flex
                    width={"100%"}
                    minHeight={"100vh"}
                    px={4}
                    alignItems={"center"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    bg={'rgb(48, 166, 172)'}
                >
                    <Navbar />
                    <Grid
                        w="90vw"
                        h="85vh"
                        templateRows="repeat(3, 1fr)"
                        templateColumns="repeat(5, 1fr)"
                        gap={2}
                        fontFamily={"sans-serif"}
                    >

                    </Grid>
                </Flex>
            }
        </>
    );
}

export default DriverPage;