import { valueMask } from "../../core/helpers/maks";
import * as S from "./style";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  placeholder?: string;
  name: string;
  value: any;
  label: string;
  onChange: (e: any) => void;
  mask: "number" | "phone" | "currency" | "none";
  type?: string;
}

export default function Input({
  name,
  placeholder,
  label,
  value,
  onChange,
  mask,
  type,
}: Props) {
  const handleChange = (e: any) => {
    const {
      target: { value },
    } = e;
    onChange(valueMask({ mask, value }));
  };

  const renderInput = () => {
    if (type === "textarea")
      return (
        <S.Textarea
          placeholder={placeholder}
          name={name}
          id={name}
          value={value}
          onChange={handleChange}
        ></S.Textarea>
      );
    if (type === "datepicker")
      return (
        <DatePicker
          name={name}
          id={name}
          selected={value}
          className="datepicker"
          onChange={(date: Date) => onChange(date)}
        />
      );

    return (
      <S.Input
        type={type || "text"}
        placeholder={placeholder}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
      />
    );
  };

  return (
    <S.Container>
      <label htmlFor={name}>{label}</label>
      {renderInput()}
    </S.Container>
  );
}
