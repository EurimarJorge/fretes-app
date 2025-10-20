import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';

export interface Driver {
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
    {...driver, id:"22222222-1122-1111-1111-111111111111", name: "Motorista2", cpf: "01406484611", birthday: "1979-08-16", rg: "m7-441.836", cnpj: "06.981.180/0001-17", mei: "06.981.180/0001-17", phone: "(34)99767-5265", zipCode: "38300001", address: "Rua do frete 2", uf: 16, city: 2800},
    {...driver, id:"33333333-1122-1111-1111-111111111111", name: "Motorista3", cpf: "01406484612", birthday: "1981-08-16", rg: "m7-441.837", cnpj: "06.981.180/0001-18", mei: "06.981.180/0001-18", phone: "(34)99767-5266", zipCode: "38300002", address: "Rua do frete 3", uf: 16, city: 2800},
    {...driver, id:"44444444-1122-1111-1111-111111111111", name: "Motorista4", cpf: "01406484613", birthday: "1982-08-16", rg: "m7-441.838", cnpj: "06.981.180/0001-19", mei: "06.981.180/0001-19", phone: "(34)99767-5267", zipCode: "38300003", address: "Rua do frete 4", uf: 16, city: 2800},
    {...driver, id:"55555555-1122-1111-1111-111111111111", name: "Motorista5", cpf: "01406484614", birthday: "1983-08-16", rg: "m7-441.839", cnpj: "06.981.180/0001-20", mei: "06.981.180/0001-20", phone: "(34)99767-5268", zipCode: "38300004", address: "Rua do frete 5", uf: 16, city: 2800},
];


const driverSlice = createSlice({
    name: 'driver',
    initialState: initialState,
    reducers: {
        createDriver(state, _action) {
            state.push(_action.payload);
        },
        updateDriver(state, _action) {
          const index = state.findIndex(driver => driver.id === _action.payload.id);
          state[index] = _action.payload;
        },
        deleteDriver(state, _action) {
          const index = state.findIndex(driver => driver.id === _action.payload.id);
          console.log(index);
          state.splice(index, 1);
        },
    }
});

export const selectDrivers = (state: RootState) => state.driver;

export const selectDriverwById = (state: RootState, driverId: string) => {
    const driver = state.driver.find(driver => driver.id === driverId);
    return driver || null;
};

export default driverSlice.reducer;
export const { createDriver, updateDriver, deleteDriver } = driverSlice.actions;