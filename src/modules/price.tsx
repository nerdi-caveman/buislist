export const formatPrice = (amount: string | number): string => {
  return Number(amount)
    .toFixed()
    .replace(/\d(?=(\d{3})+)/g, "$&,");
};
export const currencyToNumber = (amount: string): number => {
  return Number(amount.replace(/([$₦,])/g, ""));
};

export const formatCurrency = (
  amount: string | number,
  currency: string = "USD",
  fractionDigits: number = 0
): string => {
  switch (currency) {
    case "NGN": {
      const Formatter = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: fractionDigits,
      });
      return Formatter.format(Number(amount));
    }
    case "USD": {
      const Formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: fractionDigits,
      });
      return Formatter.format(Number(amount));
    }
    default: {
      const Formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: fractionDigits,
      });
      return Formatter.format(Number(amount));
    }
  }
};
