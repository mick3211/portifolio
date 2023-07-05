import type {
    DetailedHTMLProps,
    InputHTMLAttributes,
    TextareaHTMLAttributes,
} from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}
interface TextAreaProps
    extends DetailedHTMLProps<
        TextareaHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
    > {}

const styles =
    'text-base w-full px-3 py-2 bg-black/20 rounded-md outline-none border-2 border-transparent transition-colors hover:bg-black/25 focus:bg-black/30 focus:border-blue-500 ';

export const TextInput: React.FC<TextInputProps> = props => {
    return <input type="text" {...props} className={styles} />;
};

export const TextArea: React.FC<TextAreaProps> = props => {
    return <textarea {...props} className={styles} />;
};
