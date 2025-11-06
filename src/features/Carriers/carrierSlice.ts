import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';

export interface Carrier {
    id: string;
    name: string;
    cnpj: string;
    phone: string;
    zipCode: string;
    address: string;
    uf: number;
    city: number;
}

const carrier: Carrier = {
    id:"11111111-1122-1111-1111-111111111111",
    name: "Motorista1",
    cnpj: "06.981.180/0001-16",
    phone: "(34)99767-5264",
    zipCode: "38300000",
    address: "Rua do frete",
    uf: 16,
    city: 2800
}

export const initialState = [
    carrier,
    {...carrier, id:"22222222-1122-1111-1111-111111111111", name: "Motorista2", cnpj: "06.981.180/0001-17", phone: "(34)99767-5265", zipCode: "38300001", address: "Rua do frete 2", uf: 16, city: 2800},
    {...carrier, id:"33333333-1122-1111-1111-111111111111", name: "Motorista3", cnpj: "06.981.180/0001-18", phone: "(34)99767-5266", zipCode: "38300002", address: "Rua do frete 3", uf: 16, city: 2800},
    {...carrier, id:"44444444-1122-1111-1111-111111111111", name: "Motorista4", cnpj: "06.981.180/0001-19", phone: "(34)99767-5267", zipCode: "38300003", address: "Rua do frete 4", uf: 16, city: 2800},
    {...carrier, id:"55555555-1122-1111-1111-111111111111", name: "Motorista5", cnpj: "06.981.180/0001-20", phone: "(34)99767-5268", zipCode: "38300004", address: "Rua do frete 5", uf: 16, city: 2800},
];


const carrierSlice = createSlice({
    name: 'carrier',
    initialState: initialState,
    reducers: {
        createCarrier(state, _action) {
            state.push(_action.payload);
        },
        updateCarrier(state, _action) {
          const index = state.findIndex(carrier => carrier.id === _action.payload.id);
          state[index] = _action.payload;
        },
        deleteCarrier(state, _action) {
          const index = state.findIndex(carrier => carrier.id === _action.payload.id);
          console.log(index);
          state.splice(index, 1);
        },
    }
});

export const selectCarriers = (state: RootState) => state.carrier;

export const selectCarrierById = (state: RootState, carrierId: string) => {
    const carrier = state.carrier.find(carrier => carrier.id === carrierId);
    return carrier || null;
};

export default carrierSlice.reducer;
export const { createCarrier, updateCarrier, deleteCarrier } = carrierSlice.actions;