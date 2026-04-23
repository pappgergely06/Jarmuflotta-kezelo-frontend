import { useState } from "react";
import { Button, Field, Fieldset, HStack, Input, VStack, Text } from "@chakra-ui/react";
import { IoIosSave } from "react-icons/io";
import { addVehicle } from "../../../utils/api";
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
    const [errors, setErrors] = useState({});

    const validate = () => {
        let e = {};
        if (licensePlate.length < 6) e.lp = "Érvénytelen rendszám";
        if (vin.length !== 17) e.vin = "17 karakter szükséges";
        if (year < 1900 || year > currentYear) e.yr = "Érvénytelen évjárat";
        if (!make) e.mk = "Márka kötelező";
        if (!model) e.md = "Típus kötelező";
        if (!mileage || mileage < 1) e.ml = "Érvénytelen óraállás";
        if (!insurance) e.ins = "Dátum kötelező";
        if (!inspection) e.insp = "Dátum kötelező";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        addVehicle(Cookies.get("auth_token"), {
            "created_at": today,
            "next_technical_exam": inspection,
            "year": Number(year),
            "model": model,
            "brand": make,
            "vin": vin.toUpperCase(),
            "start_odometer": Number(mileage),
            "insurance_expiry": insurance,
            "lisence_plate": licensePlate.toUpperCase()
        }).then(() => alert("Sikeres mentés!"));
    };

    return (
        <form onSubmit={handleSubmit}>
            <Fieldset.Root size="md" maxW="md">
                <Fieldset.Content>
                    <HStack justifyContent={"space-between"} alignItems="flex-start" gap={4}>
                        <VStack align="stretch" flex={1}>
                            <Field.Root invalid={!!errors.lp}>
                                <Field.Label>Rendszám</Field.Label>
                                <Input value={licensePlate} onChange={(e) => setLicensePlate(e.target.value)} maxLength={7} textTransform="uppercase" />
                                {errors.lp && <Text color="red.500" fontSize="xs">{errors.lp}</Text>}
                            </Field.Root>

                            <Field.Root invalid={!!errors.vin}>
                                <Field.Label>Alvázszám</Field.Label>
                                <Input value={vin} onChange={(e) => setVin(e.target.value)} maxLength={17} textTransform="uppercase" />
                                {errors.vin && <Text color="red.500" fontSize="xs">{errors.vin}</Text>}
                            </Field.Root>

                            <Field.Root invalid={!!errors.yr}>
                                <Field.Label>Évjárat</Field.Label>
                                <Input value={year} onChange={(e) => setYear(e.target.value)} type="number" />
                                {errors.yr && <Text color="red.500" fontSize="xs">{errors.yr}</Text>}
                            </Field.Root>

                            <Field.Root invalid={!!errors.mk}>
                                <Field.Label>Márka</Field.Label>
                                <Input value={make} onChange={(e) => setMake(e.target.value)} />
                                {errors.mk && <Text color="red.500" fontSize="xs">{errors.mk}</Text>}
                            </Field.Root>
                        </VStack>

                        <VStack align="stretch" flex={1}>
                            <Field.Root invalid={!!errors.md}>
                                <Field.Label>Típus</Field.Label>
                                <Input value={model} onChange={(e) => setModel(e.target.value)} />
                                {errors.md && <Text color="red.500" fontSize="xs">{errors.md}</Text>}
                            </Field.Root>

                            <Field.Root invalid={!!errors.ml}>
                                <Field.Label>Óraállás</Field.Label>
                                <Input value={mileage} onChange={(e) => setMileage(e.target.value)} type="number" />
                                {errors.ml && <Text color="red.500" fontSize="xs">{errors.ml}</Text>}
                            </Field.Root>

                            <Field.Root invalid={!!errors.ins}>
                                <Field.Label>Kötelező biztosítás</Field.Label>
                                <Input value={insurance} onChange={(e) => setInsurance(e.target.value)} type="date" />
                                {errors.ins && <Text color="red.500" fontSize="xs">{errors.ins}</Text>}
                            </Field.Root>

                            <Field.Root invalid={!!errors.insp}>
                                <Field.Label>Műszaki vizsga</Field.Label>
                                <Input value={inspection} onChange={(e) => setInspection(e.target.value)} type="date" />
                                {errors.insp && <Text color="red.500" fontSize="xs">{errors.insp}</Text>}
                            </Field.Root>
                        </VStack>
                    </HStack>
                </Fieldset.Content>

                <Button width={"40%"} bg={"green.600"} color="white" type="submit" alignSelf="center" mt={4}>
                    <IoIosSave /> Rögzít
                </Button>
            </Fieldset.Root>
        </form>
    );
}

export default AddVehicleForm;