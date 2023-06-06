import { ToWords } from 'to-words';

export const toWords = new ToWords({
    localeCode: 'en-IN',
    converterOptions: {
      currency: true,
      ignoreDecimal: false,
      ignoreZeroCurrency: false,
      doNotAddOnly: true,
      currencyOptions: { // can be used to override defaults for the selected locale
        name: 'Peso',
        plural: 'Pesos',
        symbol: '$',
        fractionalUnit: {
          name: 'Centavo',
          plural: 'Centavos',
          symbol: '',
        },
      }
    }
});