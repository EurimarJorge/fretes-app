import { useAppSelector } from "@/app/hooks";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { selectDrivers } from "./driverSlice";
import { Link } from "react-router-dom";
import { DataGrid, GridRowsProp, GridColDef, GridRenderCellParams, GridDeleteIcon } from '@mui/x-data-grid';
import { GridToolbar } from "node_modules/@mui/x-data-grid/esm/components/toolbarV8/GridToolbar";

export const DriverList = () => {
  const drivers = useAppSelector(selectDrivers);

  const rows: GridRowsProp = drivers.map((driver) => ({
    id: driver.id,
    name: driver.name,
    phone: driver.phone,
    city: driver.city,
    uf: driver.uf,
  }));

  const columns: GridColDef[] = [
    { field: 'name', 
      headerName: 'Nome', 
      flex: 1,
    },
    { field: 'phone', 
      headerName: 'Celular',
      width: 150,
    },
    { field: 'city', 
      headerName: 'Cidade/UF', 
      flex: 1,
      renderCell: (params) => (
        <span>{params.row.city}/{params.row.uf}</span>
      ),
    },
    { field: 'actions', 
      headerName: 'Ações', 
      width: 100,
      renderCell: handleDeleteDriver
    },
  ];

    function handleDeleteDriver(params: GridRenderCellParams) {
      return (
        <IconButton
          color="warning"
          onClick={() => console.log("Deletar motorista com ID:", params.id)}
          aria-label="deletar"
        >
          <GridDeleteIcon />
        </IconButton>
      )
    }

  return (
    <Box maxWidth="lg" sx={{ mt: 4, mb: 4}}>
      <Box display="flex" justifyContent="flex-end">
        <Button 
          variant="contained" 
          color="secondary" 
          component={Link} 
          to="/drivers/create" 
          style={{ marginBottom: "1rem" }}
        >
          Novo motorista
        </Button>

      </Box>
      <Typography variant='h3' component="h1">
        <DataGrid
          showToolbar
          initialState={{
            filter: {
              filterModel: {
                items: [],
              },
            },
            pagination: {
              paginationModel: {
                pageSize: 4,
              },
            },
          }}
          pageSizeOptions={[4, 10 , 25]}
          disableRowSelectionOnClick 
          disableColumnFilter
          disableColumnSelector
          rows={rows}
          columns={columns}
        />
      </Typography>
    </Box>
  );
}