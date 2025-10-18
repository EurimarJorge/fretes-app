import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useSnackbar } from 'notistack';
import { deleteDriver, selectDrivers } from "./driverSlice";
import { Link } from "react-router-dom";
import { DataGrid, GridRowsProp, GridColDef, GridRenderCellParams, GridDeleteIcon } from '@mui/x-data-grid';

function renderNameCell(rowData: GridRenderCellParams) {
    return (
      <Link
        style={{ textDecoration: "none" }}
        to={`/drivers/edit/${rowData.id}`}
      >
        <Typography color="primary">{rowData.value}</Typography>
      </Link>
    );
  }

export const DriverList = () => {
  const drivers = useAppSelector(selectDrivers);
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const rows: GridRowsProp = drivers.map((driver) => ({
    id: driver.id,
    name: driver.name,
    cpf: driver.cpf,
    birthday: driver.birthday,
    rg: driver.rg,
    cnpj: driver.cnpj,
    mei: driver.mei,
    phone: driver.phone,
    city: driver.city,
    uf: driver.uf,
  }));

  const columns: GridColDef[] = [
    { field: 'name', 
      headerName: 'Nome', 
      flex: 1,
      renderCell: renderNameCell
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
    { field: 'id', 
      headerName: 'Ações',
      type: "string", 
      width: 100,
      renderCell: handleDeleteDriverButton
    },
  ];

    function handleDeleteDriverButton(params: GridRenderCellParams) {
      return (
        <IconButton
          color="warning"
          onClick={() => handleDeleteDriver(params.value)}
          aria-label="deletar"
        >
          <GridDeleteIcon />
        </IconButton>
      )
    }

    function handleDeleteDriver(id:string){
      dispatch(deleteDriver(id));
      enqueueSnackbar("Motorista excluído com sucesso!", { variant: "success" });

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
      <Typography component="h1">
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