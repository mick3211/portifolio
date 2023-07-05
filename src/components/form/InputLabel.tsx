import type { LabelHTMLAttributes } from 'react';

interface InputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const InputLabel: React.FC<InputLabelProps> = props => {
    return <label {...props} className="flex flex-col gap-2 text-lg" />;
};
