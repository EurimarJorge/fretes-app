import { Box, ThemeProvider } from '@mui/system';import Header from './components/Header';
import { Layout } from './components/Layout';
import { appTheme } from './config/theme';
import { Typography } from '@mui/material';
import { Route, Routes } from "react-router-dom";
import { DriverList } from './features/Drivers/ListDriver';
import { DriverCreate } from './features/Drivers/CreateDriver';
import { DriverEdit } from './features/Drivers/EditDriver';
import { CreateRegisters } from './features/register/CreateRegisters';
import { SnackbarProvider } from 'notistack'
import { CarrierList } from './features/carriers/ListCarrier';
import { CarrierCreate } from './features/carriers/CreateCarrier';
import { CarrierEdit } from './features/carriers/EditCarrier';

export default function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <SnackbarProvider 
        maxSnack={3}
        anchorOrigin={{
          vertical:"top",
          horizontal:"right"
        }}
      >
        <Box component={"main"}
          sx={
            {
              height: "110vh",
              backgroundColor: (theme) => theme.palette.grey[900],
            }
          }
        >
          <Header />
          <Layout>
            <Routes>
              <Route path="/" element={<DriverList />} />
              <Route path="/drivers" element={<DriverList />} />
              <Route path="/drivers/create" element={<DriverCreate />} />
              <Route path="/drivers/edit/:id" element={<DriverEdit />} />
              <Route path="/register" element={<CreateRegisters />} />

              <Route path="/carriers" element={<CarrierList />} />
              <Route path="/carriers/create" element={<CarrierCreate />} />
              <Route path="/carriers/edit/:id" element={<CarrierEdit />} />
              <Route path="/register" element={<CreateRegisters />} />
              
              <Route
                path="*"
                element={
                  <Box sx={{ color: "white" }}>
                    <Typography variant="h1">404</Typography>
                    <Typography variant="h2">Page not found</Typography>
                  </Box>
                }
              />
            </Routes>
          </Layout>
        </Box>
      </SnackbarProvider>
    </ThemeProvider>
  )
}

