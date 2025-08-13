import * as Form from "@radix-ui/react-form";

export interface InputProps extends React.ComponentProps<"input"> {
  name: string;
  label?: string;
  errorMessage?: string;
  as?: React.ReactElement;
}

export const Input: React.FC<InputProps> = ({
  name,
  label,
  errorMessage,
  as,
  className = "",
  ...props
}) => {
  return (
    <Form.Field name={name} className={"flex flex-col gap-1" + " " + className}>
      <Form.Label>{label ?? name}</Form.Label>
      <Form.Control
        {...props}
        asChild={!!as}
        className="w-full rounded-md border-2 border-transparent bg-black/40 px-3 py-2 text-base outline-offset-4 transition-colors hover:bg-black/50 focus:border-blue-500 focus:bg-black/60 data-[invalid]:border-red-500"
      >
        {as}
      </Form.Control>
      <Form.Message match="valueMissing" className="text-xs text-red-500">
        Campo Obrigatório
      </Form.Message>
      <Form.Message match="patternMismatch" className="text-xs text-red-500">
        Campo inválido
      </Form.Message>
      <Form.Message match="tooShort" className="text-xs text-red-500">
        Mínimo {props.minLength} caracteres
      </Form.Message>
      <Form.Message match="typeMismatch" className="text-xs text-red-500">
        Campo inválido
      </Form.Message>
    </Form.Field>
  );
};
