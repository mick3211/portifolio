import { ComponentProps, ComponentPropsWithoutRef } from 'react';

export type PolimorphicProps<C extends React.ElementType, Props = {}> = {
  as?: C;
} & Props &
  Omit<ComponentProps<C>, keyof (Props & { as?: C })>;
