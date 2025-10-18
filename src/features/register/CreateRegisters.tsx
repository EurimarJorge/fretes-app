import { Box, Button, Paper, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const CreateRegisters = () => {
  return (
    <Box maxWidth="lg" sx={{ mt: 4, mb: 4}}>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Escolha o tipo de cadastro</Typography>
          </Box>
        </Box>
        <Box maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Box display="flex" justifyContent="center">
            <Button 
            variant="contained" 
            color="secondary" 
            component={Link} 
            to="/drivers/create" 
            style={{height: "100px", width: "80%", borderRadius: "60px", marginBottom: "1rem" }}
          >
            Cadastrar motorista
          </Button>
        </Box>
        <Box display="flex" justifyContent="center">
            <Button 
            variant="contained" 
            color="secondary" 
            component={Link} 
            to="/drivers/create" 
            style={{height: "100px", width: "80%", borderRadius: "60px", marginBottom: "1rem" }}
            >
            Cadastrar transportadora
            </Button>
        </Box>
        <Box display="flex" justifyContent="center">
        <Button 
            variant="contained" 
            color="secondary" 
            component={Link} 
            to="/drivers/create" 
            style={{height: "100px", width: "80%", borderRadius: "60px", marginBottom: "1rem" }}
        >
            Cadastrar embarcador
        </Button>
        </Box>
                </Box>
            </Paper>
        </Box>
    );
}