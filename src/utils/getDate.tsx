export const getCurrentDate = ()=>{
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const months = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO","JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];

    return `CIUDAD DE MÉXICO, A ${day < 10 ? `0${day}` : day} DE ${months[month]} DE ${year}.`;
}