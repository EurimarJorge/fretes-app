import { Box, Button, FormControl, Grid, Paper, TextField, Typography } from "@mui/material";
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import { Link, useParams } from "react-router";
import { selectDriverwById } from "./driverSlice";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import { useState } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";

export const DriverCreate = () => {
  const id = useParams().id || "";
  const [isDisabled] = useState(false);
  const driver = useSelector((state: RootState) => selectDriverwById(state, id));
  const [selectedDate, setSelectedDate] = useState(driver?.birthday || "");
  
  return (
    <Box display="grid" justifyContent="space-around">  
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Criar Motorista</Typography>
          </Box>
        </Box>

      <Box width="lg" sx={{ mt: 4, mb: 4}}>
        <form>
          <Grid container spacing={3}>
            <Grid size={6}>
              <FormControl fullWidth>
                <TextField 
                  required
                  name="cpf"
                  label="CPF" 
                  value={driver?.cpf || ""}
                  disabled={isDisabled}
                />
              </FormControl>
            </Grid>
            <Grid size={6}>
              <FormControl fullWidth>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker label="Data de Nascimento" 
                    name="dtNascimento"
                    format="DD/MM/YYYY"
                    value={selectedDate?dayjs(selectedDate):null}
                    onChange={(newValue) => setSelectedDate(newValue ? dayjs(newValue).format('YYYY-MM-DD') : "")}
                  />
                </LocalizationProvider>
              </FormControl>
            </Grid>
            <Grid size={12}>
              <FormControl fullWidth>
                <TextField 
                  required
                  name="nome"
                  label="Nome" 
                  value={driver?.name || ""}
                  disabled={isDisabled}
                />
              </FormControl>
            </Grid>
            <Grid size={6}>
              <FormControl fullWidth>
                <TextField 
                  required
                  name="rg"
                  label="RG" 
                  value={driver?.rg || ""}
                  disabled={isDisabled}
                />
              </FormControl>
            </Grid>
            <Grid size={6}>
              <FormControl fullWidth>
                <TextField 
                  required
                  name="CNPJ"
                  label="CNPJ" 
                  value={driver?.cnpj || ""}
                  disabled={isDisabled}
                />
              </FormControl>
            </Grid>
            <Grid size={6}>
              <FormControl fullWidth>
                <TextField 
                  required
                  name="MEI"
                  label="MEI" 
                  value={driver?.mei || ""}
                  disabled={isDisabled}
                />
              </FormControl>
            </Grid>
            <Grid size={6}>
              <FormControl fullWidth>
                <TextField 
                  required
                  name="phone"
                  label="Telefone" 
                  value={driver?.phone || ""}
                  disabled={isDisabled}
                />
              </FormControl>
            </Grid>
            <Grid size={6}>
              <FormControl fullWidth>
                <TextField 
                  required
                  name="CEP"
                  label="CEP" 
                  value={driver?.zipCode || ""}
                  disabled={isDisabled}
                />
              </FormControl>
            </Grid>
            <Grid size={12}>
              <FormControl fullWidth>
                <TextField 
                  required
                  name="ENDERECO"
                  label="Endereço" 
                  value={driver?.address || ""}
                  disabled={isDisabled}
                />
              </FormControl>
            </Grid>
            <Grid size={6}>
              <FormControl fullWidth>
                <TextField 
                  required
                  name="uf"
                  label="UF" 
                  value={driver?.uf || ""}
                  disabled={isDisabled}
                />
              </FormControl>
            </Grid>
            <Grid size={6}>
              <FormControl fullWidth>
                <TextField 
                  required
                  name="cidade"
                  label="Cidade" 
                  value={driver?.city || ""}
                  disabled={isDisabled}
                />
              </FormControl>
            </Grid>
            <Grid size={12}>
              <Box display="flex" gap={2}>
                <Button variant="contained" component={Link} to="/drivers">
                  Back
                </Button>

                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                // disabled={isdisabled || isLoading}
                >
                  {/*isLoading ? "Loading..." :*/ "Save"}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Paper>
  </Box>
)
};
