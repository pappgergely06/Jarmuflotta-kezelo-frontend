import { useState } from "react";
import { Button, Field, Fieldset, HStack, IconButton, Input, VStack } from "@chakra-ui/react";
import { IoIosSave } from "react-icons/io";
import { addVehicle } from "../../utils/api";
import Cookies from "js-cookie";

function AddVehicleForm() {
    const currentYear = new Date().getFullYear();
    const today = new Date().toISOString().split('T')[0];

    const [licensePlate, setLicensePlate] = useState("");
    const [vin, setVin] = useState("");
    const [year, setYear] = useState(2000);
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [mileage, setMileage] = useState("");
    const [insurance, setInsurance] = useState("");
    const [inspection, setInspection] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addVehicle(Cookies.get("auth_token"), {
            "created_at": today,
            "next_technical_exam": inspection,
            "year": year,
            "model": model,
            "brand": model,
            "vin": vin.toUpperCase(),
            "start_odometer": mileage,
            "insurance_expiry": insurance,
            "lisence_plate": licensePlate.toUpperCase()
        })
    };

    return (
        <form onSubmit={handleSubmit}>
            <Fieldset.Root size="md" maxW="md">
                <Fieldset.Content>
                    <HStack justifyContent={"space-between"} alignItems="flex-start">
                        <VStack>
                            <Field.Root>
                                <Field.Label>Rendszám</Field.Label>
                                <Input value={licensePlate} onChange={(e) => setLicensePlate(e.target.value)} maxLength={7} type="text" textTransform={"uppercase"} />
                            </Field.Root>

                            <Field.Root>
                                <Field.Label>Alvázszám</Field.Label>
                                <Input value={vin} onChange={(e) => setVin(e.target.value)} type="text" maxLength={17} textTransform={"uppercase"} />
                            </Field.Root>

                            <Field.Root>
                                <Field.Label>Évjárat</Field.Label>
                                <Input value={year} onChange={(e) => setYear(e.target.value)} min={1900} type="number" max={currentYear} />
                            </Field.Root>

                            <Field.Root>
                                <Field.Label>Márka</Field.Label>
                                <Input value={make} onChange={(e) => setMake(e.target.value)} type="text" maxLength={20} />
                            </Field.Root>
                        </VStack>

                        <VStack>
                            <Field.Root>
                                <Field.Label>Típus</Field.Label>
                                <Input value={model} onChange={(e) => setModel(e.target.value)} type="text" maxLength={30} />
                            </Field.Root>

                            <Field.Root>
                                <Field.Label>Óraállás</Field.Label>
                                <Input min={1} value={mileage} onChange={(e) => setMileage(e.target.value)} type="number" />
                            </Field.Root>

                            <Field.Root>
                                <Field.Label>Kötelező biztosítás</Field.Label>
                                <Input value={insurance} onChange={(e) => setInsurance(e.target.value)} type="date" />
                            </Field.Root>

                            <Field.Root>
                                <Field.Label>Műszaki vizsga</Field.Label>
                                <Input value={inspection} onChange={(e) => setInspection(e.target.value)} type="date" />
                            </Field.Root>
                        </VStack>
                    </HStack>
                </Fieldset.Content>

                <Button width={"40%"} bg={"green.600"} type="submit" alignSelf="center" mt={4}>
                    <IoIosSave /> Rögzít
                </Button>
            </Fieldset.Root>
        </form>
    );
}

export default AddVehicleForm;