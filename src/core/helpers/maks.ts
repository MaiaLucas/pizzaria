interface MaskProps {
  mask: "number" | "phone" | "currency" | "none";
  value: string;
}

export const maskToPhoneNumber = (value: string) => {
  let cleanPhoneNumber = (value || "").replace(/\D/g, "");
  return cleanPhoneNumber
    .replace(/^(\d{2})(\d)/g, "($1) $2")
    .replace(/(\d)(\d{4})$/, "$1-$2");
};

export const maskNumber = (value: string) => {
  return (value || "").replace(/[^0-9]/g, "");
};

export const maskCurrency = (value: string) => {
  return {
    visual: maskNumber(value)
      ? new Intl.NumberFormat("pt-BR", {
          maximumSignificantDigits: 3,
          maximumFractionDigits: 2,
          style: "currency",
          currency: "BRL",
        }).format(parseInt(maskNumber(value)))
      : "",
    value: parseInt(maskNumber(value)),
  };
};

export function valueMask({ mask, value }: MaskProps) {
  switch (mask) {
    case "number":
      return maskNumber(value);
    case "currency":
      return maskCurrency(value);
    case "phone":
      return maskToPhoneNumber(value);
    case "none":
      return value;

    default:
      return value;
  }
}
