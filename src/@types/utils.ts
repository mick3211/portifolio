import { ComponentPropsWithoutRef } from 'react';

export type PolimorphicProps<C extends React.ElementType, Props = {}> = {
    as?: C;
} & Props &
    Omit<ComponentPropsWithoutRef<C>, keyof (Props & { as?: C })>;
