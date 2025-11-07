import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useSnackbar } from 'notistack';
import { Link } from "react-router-dom";
import { DataGrid, GridRowsProp, GridColDef, GridRenderCellParams, GridDeleteIcon } from '@mui/x-data-grid';
import { deleteCarrier, selectCarriers } from "./carrierSlice";

function renderNameCell(rowData: GridRenderCellParams) {
    return (
      <Link
        style={{ textDecoration: "none" }}
        to={`/carriers/edit/${rowData.id}`}
      >
        <Typography color="primary">{rowData.value}</Typography>
      </Link>
    );
  }

export const CarrierList = () => {
  const carriers = useAppSelector(selectCarriers);
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const rows: GridRowsProp = carriers.map((carrier) => ({
    id: carrier.id,
    name: carrier.name,
    cnpj: carrier.cnpj,
    phone: carrier.phone,
    city: carrier.city,
    uf: carrier.uf,
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
          onClick={() => handleDeleteCarrier(params.value)}
          aria-label="deletar"
        >
          <GridDeleteIcon />
        </IconButton>
      )
    }

    function handleDeleteCarrier(id:string){
      console.log(id);
      dispatch(deleteCarrier(id));
      enqueueSnackbar("Transportadora excluída com sucesso!", { variant: "success" });

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