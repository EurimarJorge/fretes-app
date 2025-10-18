import { RootState } from "@/app/store";
import { useSnackbar } from 'notistack';
import { Box, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { DriverForm } from "./components/DriverForm";
import { Driver, selectDriverwById, updateDriver } from "./driverSlice";
import { useAppDispatch } from "@/app/hooks";

export const DriverEdit = () => {
  const id = useParams().id || "";
  const [isDisabled, setIsDisabled] = useState(false);
  const driver = useSelector((state: RootState) => selectDriverwById(state, id));
  const [driverState, setDriverState] = useState<Driver>(driver!);
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(updateDriver(driverState));
    setIsDisabled(true);
    enqueueSnackbar("Motorista editado com sucesso!", { variant: "success" });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDriverState({ ...driverState, [name]: value });
  };

  const handleDateChange = (newDate: any) => {
    driverState.birthday = newDate ? newDate : "";
  };


  return (
    <Box maxWidth="lg" sx={{ mt: 4, mb: 4}}>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Editar Motorista</Typography>
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
  );
};