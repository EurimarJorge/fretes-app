import { RootState } from "@/app/store";
import { useSnackbar } from 'notistack';
import { Box, Button, FormControl, Grid, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router";
import { Carrier, selectCarrierById, updateCarrier } from "./carrierSlice";
import { useAppDispatch } from "@/app/hooks";
import { CNPJFormat } from "../components/CNPJFormat";
import { FoneFormat } from "../Drivers/components/FoneFormat";
import { CepFormat } from "../Drivers/components/CepFormat";

export const CarrierEdit = () => {
  const id = useParams().id || "";
  const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
  const carrier = useSelector((state: RootState) => selectCarrierById(state, id));
  const [carrierState, setCarrierState] = useState<Carrier>(carrier!);
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(updateCarrier(carrierState));
    setIsLoading(false);
    setIsDisabled(true);
    enqueueSnackbar("Transpotadora editada com sucesso!", { variant: "success" });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCarrierState({ ...carrierState, [name]: value });
  };

  return (
    <Box maxWidth="lg" sx={{ mt: 4, mb: 4}}>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Editar Motorista</Typography>
          </Box>
        </Box>

          <Box display="flex" justifyContent="flex-end">
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid size={6}>
              <FormControl fullWidth>
                <CNPJFormat
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
                />0
              </FormControl>
            </Grid>
            <Grid size={12}>
              <FormControl fullWidth>
                <TextField 
                  required
                  name="address"
                  label="Endereço" 
                  value={carrierState.address || ""}
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
                  value={carrierState?.uf || ""}
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
                  value={carrierState?.city || ""}
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
      </Paper>
    </Box>
  );
};