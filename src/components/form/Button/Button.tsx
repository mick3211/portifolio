import type { PolimorphicProps } from '@/@types/utils';
import type { ComponentPropsWithoutRef } from 'react';
import { VariantProps } from 'tailwind-variants';
import { buttonStyles } from './styles';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
    variants?: VariantProps<typeof buttonStyles>;
}

export function Button<C extends React.ElementType = 'button'>({
    variants,
    as,
    className,
    ...props
}: PolimorphicProps<C, ButtonProps>) {
    const Element = as ?? 'button';

    return (
        <Element
            {...props}
            className={buttonStyles({ className, ...variants })}
        />
    );
}
