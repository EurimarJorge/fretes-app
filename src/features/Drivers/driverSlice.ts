import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';

interface Driver {
    id: string;
    name: string;
    cpf: string;
    birthday: string;
    rg: string;
    cnpj: string;
    mei: string;
    phone: string;
    zipCode: string;
    address: string;
    uf: number;
    city: number;
}

const driver: Driver = {
    id:"11111111-1122-1111-1111-111111111111",
    name: "Motorista1",
    cpf: "01406484610",
    birthday: "1979-08-16",
    rg: "m7-441.835",
    cnpj: "06.981.180/0001-16",
    mei: "06.981.180/0001-16",
    phone: "(34)99767-5264",
    zipCode: "38300000",
    address: "Rua do frete",
    uf: 16,
    city: 2800
}

export const initialState = [
    driver,
    {...driver, id:"22222222-1122-1111-1111-111111111111", name: "Motorista2", cpf: "01406484611"},
    {...driver, id:"33333333-1122-1111-1111-111111111111", name: "Motorista3", cpf: "01406484612"},
    {...driver, id:"44444444-1122-1111-1111-111111111111", name: "Motorista4", cpf: "01406484613"},
    {...driver, id:"55555555-1122-1111-1111-111111111111", name: "Motorista5", cpf: "01406484614"},
];


const driverSlice = createSlice({
    name: 'driver',
    initialState: initialState,
    reducers: {
        createPost(_state, _action) {},
        updatePost(_state, _action) {},
        deletePost(_state, _action) {},
    }
});

export const selectDrivers = (state: RootState) => state.driver;

export default driverSlice.reducer;