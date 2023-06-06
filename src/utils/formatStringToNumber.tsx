export const formatStringToNumber = (value: string)=>{
    const valueWithoutCommas = value.replaceAll(',', '');
    const valueToNumber = parseFloat(valueWithoutCommas);
    return valueToNumber;
}