export const getExchangeResponse = (mono, privat) => {
  return `MonoBank\n Buy: ${mono.buy}\n Sale: ${mono.sale}\n PrivateBank\n Buy: ${privat.buy}\n Sale: ${privat.sale}`;
}