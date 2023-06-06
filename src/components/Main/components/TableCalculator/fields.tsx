import { IField } from "../../models";

export const Fields: IField[] = [
    {
        id: 'name',
        label: 'Nombre',
        placeholder: 'ej: Jose Juan Juarez Jacox',
        type: 'text',
        disable: false,
    },{
        id: 'nss',
        label: 'NSS',
        placeholder: 'ej: 72017401953',
        type: 'text',
        disable: false,
    },{
        id: 'ssv',
        label: 'SSV',
        placeholder: 'ej: 267,084.80',
        type: 'text',
        disable: false,
    },{
        id: 'gasTitulation',
        label: 'Gastos de titulación 3%',
        placeholder: 'ej: 8,012.54',
        type: 'text',
        disable: true
    },{
        id: 'disInfonavit',
        label: 'Disponible Infonavit',
        placeholder: 'ej: 259,072.26',
        type: 'text',
        disable: true
    },{
        id: 'gestoria',
        label: 'Gestoria(Notario)',
        placeholder: 'ej: 259,072.26',
        type: 'text',
        disable: true
    },{
        id: 'honorarios',
        label: 'Honorarios',
        placeholder: 'ej: 39,814.45',
        type: 'text',
        disable: true
    },{
        id: 'poderNotarial',
        label: 'Poder Notarial',
        placeholder: 'ej: 3,600.00',
        type: 'text',
        disable: true
    },{
        id: 'total',
        label: 'Total neto al cliente',
        placeholder: 'ej: 177,750.58',
        type: 'text',
        disable: true
    }
]