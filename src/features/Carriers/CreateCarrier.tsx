import { Box, Button, FormControl, Grid, Paper, TextField, Typography } from "@mui/material";
import { useSnackbar } from 'notistack';
import { useState } from "react";
import { useAppDispatch } from "@/app/hooks";
import { CNPJFormat } from "../components/CNPJFormat";
import { FoneFormat } from "../Drivers/components/FoneFormat";
import { CepFormat } from "../Drivers/components/CepFormat";
import { Link } from "react-router-dom";
import { Carrier, createCarrier } from "./carrierSlice";

export const CarrierCreate = () => {

  const dispatch = useAppDispatch();
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [carrierState, setCarrierState] = useState<Carrier>({
    id: "",
    name: "",
    cnpj: "",
    phone: "",
    zipCode: "",
    address: "",
    uf: 0,
    city: 0,
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(createCarrier(carrierState));
    setIsLoading(false);
    setIsDisabled(true);
    enqueueSnackbar("Transportadora cadastrada com sucesso!", { variant: "success" });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
    const { name, value } = e.target;
    setCarrierState({ ...carrierState, [name]: value });
  };

  return (
    <Box maxWidth="lg" sx={{ mt: 4, mb: 4}}>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Criar Transportadora</Typography>
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
            <Grid size={12}>
              <FormControl fullWidth>
                <TextField 
                  required
                  name="name"
                  label="Nome" 
                  value={carrierState?.name || ""}
                  disabled={isDisabled}
                  onChange={handleChange}
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
)
};
