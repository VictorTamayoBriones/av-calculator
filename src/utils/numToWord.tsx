
const units = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
const tenToSixteen = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis'];
const tens = ['treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];

export const numToWord = (number: number) => {
    const NUMBER = number.toString();
    const NUMBER_WITHOUT_DOT = NUMBER.split('.')[0];
    const NUMBER_AFTER_DOT = getCurencyCent(NUMBER);
    const NUMBERS_AFTER_DOT_FRAC = getCurencyCentFrac(NUMBER);
    const CURENCY = 'pesos';
    const CURENCY_CENT = 'centavos';

    const NUMBER_AS_WORD = `${Number(NUMBER) < 0 ? 'menos' : ''}  ${getName(NUMBER_WITHOUT_DOT)} ${CURENCY} con ${NUMBER_AFTER_DOT} ${CURENCY_CENT} ${NUMBERS_AFTER_DOT_FRAC}`;

    return NUMBER_AS_WORD;
}

const getName = (NUMBER: string) => {
    
    if (NUMBER.length === 1) {
        return getUnits(NUMBER);
    }
    if (NUMBER.length === 2) {
        return getTens(NUMBER);
    }
    if (NUMBER.length === 3) {
        return getHundreds(NUMBER);
    }
    if (NUMBER.length < 7) {
        return getThousands(NUMBER);
    }
    if (NUMBER.length < 13) {
        return getPeriod(NUMBER, 6, 'millón');
    }
    if (NUMBER.length < 19) {
        return getPeriod(NUMBER, 12, 'billón');
    }
    return 'Número demasiado grande.';
}
const getUnits = (NUMBER:string) => {
    const numberInt = parseInt(NUMBER);
    return units[numberInt];
}

const getTens = (NUMBER: string)=> {
    // Obtener las unidades
    const currentUnits = NUMBER.charAt(1);

    if (Number(NUMBER) < 17) {
        return tenToSixteen[Number(NUMBER) - 10];
    }
    if (Number(NUMBER) < 20) {
        return 'dieci' + getUnits(currentUnits);
    }
    // Nombres especiales
    switch (NUMBER) {
        case '20':
            return 'veinte';
        case '22':
            return 'veintidós';
        case '23':
            return 'veintitrés';
        case '26':
            return 'veintiséis';
    }

    if (Number(NUMBER) < 30) {
        return 'veinti' + getUnits(currentUnits);
    }

    const preName = NUMBER.charAt(0)
    let name = tens[Number(preName) - 3];

    if (Number(currentUnits) > 0) {
        name += ' y ' + getUnits(currentUnits);
    }
    return name;
}

const getHundreds = (NUMBER: string) => {
    let name = '';
    // Obtener las centenas
    const hundreds = NUMBER.charAt(0);
    // Obtener las decenas y unidades
    const tens = NUMBER.slice(1);

    if (Number(NUMBER) == 100) {
        return 'cien';
    }
    // Nombres especiales
    switch(hundreds) {
        case '1':
            name = 'ciento';
            break;
        case '5':
            name = 'quinientos';
            break;
        case '7':
            name = 'setecientos';
            break;
        case '9':
            name = 'novecientos';
    }
    if (name === '') {
        name = getUnits(hundreds) + 'cientos';
    }
    if (Number(tens) > 0) {
        name += ' ' + getName(tens);
    }
    return name;
}

const getThousands = (NUMBER: string) => {
    let name = 'mil';
    // Obtener cuantos dígitos están en los miles
    const thousandsLength = NUMBER.length - 3;
    // Obtener los miles
    const thousands = NUMBER.slice(0, thousandsLength);
    // Obtener las centenas, decenas y unidades
    const hundreds = NUMBER.slice(thousandsLength);

    if (Number(thousands) > 1) {
        // Se reemplaza la palabra uno por un en numeros como 21000, 31000, 41000, etc.
        name = getName(thousands).replace('uno', 'un') + ' mil';
    }
    if (Number(hundreds) > 0) {
        name += ' ' + getName(hundreds);
    }
    return name;
}

// Obtiene periodos, por ejemplo: millones, billones, etc.
const getPeriod = (NUMBER: string, digitsToTheRight: number, periodName: string) => {
    let name = 'un ' + periodName;
    // Obtener cuantos dígitos están dentro del periodo
    const periodLength = NUMBER.length - digitsToTheRight;
    // Obtener los dítos del periodo
    const periodDigits = NUMBER.slice(0, periodLength);
    // Obtener los digitos previos al periodo
    const previousDigits = NUMBER.slice(periodLength);

    if (Number(periodDigits) > 1) {
        name = getName(periodDigits).replace('uno', 'un') + ' ' + periodName.replace('ó', 'o') + 'es';
    }
    if (Number(previousDigits) > 0) {
        name += ' ' + getName(previousDigits);
    }
    return name;
}

const getCurencyCent = (NUMBER: string) =>{

    const PRE_NUMBER_AFTER_DOT = NUMBER.split('.')[1] ? `${NUMBER.split('.')[1]}` : '00';
    const NUMBER_AFTER_DOT = PRE_NUMBER_AFTER_DOT.length === 1 ? `${PRE_NUMBER_AFTER_DOT}0` : PRE_NUMBER_AFTER_DOT;
    const NUMBER_AFTER_DOT_CLEAN = NUMBER_AFTER_DOT === '00' ? '0' : NUMBER_AFTER_DOT
    const NUMBER_AFTER_DOT_AS_WORD = getName(NUMBER_AFTER_DOT_CLEAN);

    return NUMBER_AFTER_DOT_AS_WORD;
}

const getCurencyCentFrac = (NUMBER: string) =>{
    const PRE_NUMBER_AFTER_DOT = NUMBER.split('.')[1] ? `${NUMBER.split('.')[1]}` : '00';
    const NUMBER_AFTER_DOT = PRE_NUMBER_AFTER_DOT.length === 1 ? `${PRE_NUMBER_AFTER_DOT}0` : PRE_NUMBER_AFTER_DOT;
    const NUMBERS_AFTER_DOT_FRAC = `${NUMBER_AFTER_DOT}/100`;

    return NUMBERS_AFTER_DOT_FRAC;
}