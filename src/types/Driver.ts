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
    uf: string;
    city: string;
}

export interface DriverParams {
  page?: number;
  perPage?: number;
  search?: string;
  isActive?: boolean;
}