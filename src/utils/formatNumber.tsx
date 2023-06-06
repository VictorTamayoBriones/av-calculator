export const formatNumber = (number: number) => {
    //round to two decimals
    number = Math.round((number + Number.EPSILON) * 100) / 100;
    return new Intl.NumberFormat().format(number);
}