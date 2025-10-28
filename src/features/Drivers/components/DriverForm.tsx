import { Box, Button, FormControl, Grid, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { Driver } from "../driverSlice";
import React from 'react';
import { CNPJFormat } from "./CNPJFormat";
import { MEIFormat } from "./MEIFormat";
import { CPFFormat } from "./CPFFormat";
import { RGFormat } from "./RGFormat";
import { FoneFormat } from "./FoneFormat";
import { CepFormat } from "./CepFormat";


type Props = {
  driver: Driver;
  isDisabled?: boolean;
  isLoading?: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDateChange: (name:any, date:any) => void;
};

export function  DriverForm({
  driver,
  isDisabled = false,
  isLoading = false,
  handleSubmit,
  handleChange,
  handleDateChange,
}: Props) {
  
  return (
    <Box display="flex" justifyContent="flex-end">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid size={6}>
            <FormControl fullWidth>
              <CPFFormat />
            </FormControl>
          </Grid>
          <Grid size={6}>
            <FormControl fullWidth>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Data de Nascimento" 
                  name="dtNascimento"
                  format="DD/MM/YYYY"
                  value={dayjs(driver.birthday)}
                  onChange={(date) => handleDateChange('birthday', date!.format('YYYY-MM-DD'))}
                />
              </LocalizationProvider>
            </FormControl>
          </Grid>
          <Grid size={12}>
            <FormControl fullWidth>
              <TextField 
                required
                name="name"
                label="Nome" 
                value={driver?.name || ""}
                disabled={isDisabled}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid size={6}>
            <FormControl fullWidth>
              <RGFormat 
              />
            </FormControl>
          </Grid>
          <Grid size={6}>
            <FormControl fullWidth>
              <CNPJFormat
              />
            </FormControl>
          </Grid>
          <Grid size={6}>
            <FormControl fullWidth>
              <MEIFormat
              />
            </FormControl>
          </Grid>
          <Grid size={6}>
            <FormControl fullWidth>
              <FoneFormat 
              />
            </FormControl>
          </Grid>
          <Grid size={6}>
            <FormControl fullWidth>
              <CepFormat
              />
            </FormControl>
          </Grid>
          <Grid size={12}>
            <FormControl fullWidth>
              <TextField 
                required
                name="address"
                label="Endereço" 
                value={driver?.address || ""}
                disabled={isDisabled}
                onChange={handleChange}
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
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid size={6}>
            <FormControl fullWidth>
              <TextField 
                required
                name="city"
                label="Cidade" 
                value={driver?.city || ""}
                disabled={isDisabled}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid size={12}>
            <Box display="flex" gap={2} justifyContent="center">
              <Button variant="contained" component={Link} to="/drivers">
                Voltar
              </Button>

              <Button
                type="submit"
                variant="contained"
                color="secondary"
              // disabled={isdisabled || isLoading}
              >
                {isLoading ? "Loading..." : "Salvar"}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
};
