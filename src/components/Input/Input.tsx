import { InputContainer } from "./input.style";

interface Props{
  id: string;
  label: string;
  type: 'text' | 'number';
  placeholder: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disable: boolean | undefined;
}

function Input({ id, label, type, placeholder, name, value, onChange, disable }:Props) {
  return (
    <InputContainer>
      <label htmlFor={id}>{label}</label>
      <div>
        { type === 'number' && <span>$ </span> }
        <input  id={id} type={type} placeholder={placeholder} name={name} value={value} onChange={(e)=>onChange(e)}  disabled={disable} />
      </div>
    </InputContainer>
  )
}

export default Input