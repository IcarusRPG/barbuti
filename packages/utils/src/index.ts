export const rgbToCss = (rgb: { r: number; g: number; b: number }) => `${rgb.r} ${rgb.g} ${rgb.b}`;

export const phoneOnlyDigits = (phone: string) => phone.replace(/\D/g, '');

export const toCurrency = (value: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
