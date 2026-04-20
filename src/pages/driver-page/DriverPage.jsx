import { Flex, Grid, GridItem } from '@chakra-ui/react';
import style from './DriverPage.module.css'
import Navbar from '../../components/navbar/Navbar';
import useAuth from '../../hooks/useAuth';
import FuelingForm from '../../components/data-input/forms/fueling-form/FuelingForm';
import GridBox from '../../components/ui/grid-box/GridBox';
import TravelDocForm from '../../components/data-input/forms/travel-doc-form/TravelDocForm';
import MyVehicle from '../../components/my-vehicle/MyVehicle';
import TravelDocs from '../../components/travel-docs/TravelDocs';

function DriverPage() {
    const { user } = useAuth();

    return (
        <>
            {user && user.role === "driver" && (
                <Flex
                    width={"100vw"}
                    height={"100vh"}
                    overflow={"hidden"}
                    px={4}
                    alignItems={"center"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    bg={'rgb(48, 166, 172)'}
                >
                    <Navbar width={"90vw"} />
                    <Grid
                        w="90vw"
                        h="85vh"
                        templateRows="repeat(2, minmax(0, 1fr))"
                        templateColumns="repeat(3, minmax(0, 1fr))"
                        gap={2}
                        fontFamily={"sans-serif"}
                    >
                        <GridItem bg={"gray.50"} borderRadius="0.5rem" overflow="hidden">
                            <MyVehicle />
                        </GridItem>

                        <GridItem bg={"gray.50"}  borderRadius="0.5rem" overflow="hidden">
                            <TravelDocs />
                        </GridItem>

                        <GridItem bg={"gray.50"}  borderRadius="0.5rem" overflow="hidden">
                            <GridBox header={"Tankolások"} />
                        </GridItem>

                        <GridItem bg={"gray.50"} borderRadius="0.5rem" overflow="hidden">
                            <GridBox header={"Saját adatok"} />
                        </GridItem>

                        <GridItem bg={"gray.50"} borderRadius="0.5rem" overflow="hidden">
                            <TravelDocForm />
                        </GridItem>

                        <GridItem bg={"gray.50"} borderRadius="0.5rem" overflow="hidden">
                            <FuelingForm />
                        </GridItem>
                    </Grid>
                </Flex>
            )}
        </>
    );
} export default DriverPage;