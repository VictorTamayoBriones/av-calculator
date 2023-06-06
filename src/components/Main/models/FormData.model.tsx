export interface IFormData{
    name: string,
    nss: string,
    ssv: string,
    gasTitulation: string,
    disInfonavit: string,
    gestoria: string,
    honorarios: string,
    poderNotarial: string,
    total: string,
}

export interface IField{
    id: string,
    label: string,
    placeholder: string,
    type: 'text' | 'number',
    disable?: boolean,
}