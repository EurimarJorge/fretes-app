import { Box, Paper, Typography } from "@mui/material";
import { useSnackbar } from 'notistack';
import { useState } from "react";
import { DriverForm } from "./components/DriverForm";
import { createDriver, Driver } from "./driverSlice";
import { useAppDispatch } from "@/app/hooks";

export const DriverCreate = () => {

  const dispatch = useAppDispatch();
  const [isDisabled, setIsDisabled] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  
  const [driverState, setDriverState] = useState<Driver>({
    id: "",
    name: "",
    cpf: "",
    birthday: "",
    rg: "",
    cnpj: "",
    mei: "",
    phone: "",
    zipCode: "",
    address: "",
    uf: 0,
    city: 0,
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(createDriver(driverState));
    setIsDisabled(true);
    enqueueSnackbar("Motorista cadastrado com sucesso!", { variant: "success" });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
    const { name, value } = e.target;
    setDriverState({ ...driverState, [name]: value });
  };

  const handleDateChange = (name:any, date:any) => {
    console.log(name, date);
    setDriverState(prev => ({
      ...prev,
      [name]: date
    }));
  };

  return (
    <Box maxWidth="lg" sx={{ mt: 4, mb: 4}}>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Criar Motorista</Typography>
          </Box>
        </Box>

      <DriverForm
        driver={driverState}
        isDisabled={isDisabled}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleDateChange={handleDateChange}
      />
    </Paper>
  </Box>
)
};
