import { Box, ThemeProvider } from '@mui/system';import Header from './components/Header';
import { Layout } from './components/Layout';
import { appTheme } from './config/theme';
import { Typography } from '@mui/material';
import { Route, Routes } from "react-router-dom";
import { DriverList } from './features/Drivers/ListDriver';
import { DriverCreate } from './features/Drivers/CreateDriver';
import { DriverEdit } from './features/Drivers/EditDriver';

export default function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box component={"main"}
        sx={
          {
            height: "100vh",
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
    </ThemeProvider>
  )
}

