export const formatNumberToMonetary = (value:Number, locale:string, currency:string) => {
    return value.toLocaleString(locale, {
        style: 'currency',
        currency: currency,
      });
}