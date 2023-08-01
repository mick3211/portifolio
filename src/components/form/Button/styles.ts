import { tv } from 'tailwind-variants';

export const buttonStyles = tv({
    base: 'font-medium rounded-sm inline-flex items-center justify-center gap-4 transition-colors disabled:opacity-25',

    variants: {
        size: {
            base: 'text-base py-2 px-3',
            large: 'text-xl font-semibold py-3 px-4',
        },
        style: {
            outlined:
                'border-2 border-inline border-blue-500 bg-blue-500/25 hover:bg-blue-500/50 active:bg-blue-500/75',
            contained: 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800',
        },
    },

    defaultVariants: {
        size: 'base',
        style: 'contained',
    },
});
