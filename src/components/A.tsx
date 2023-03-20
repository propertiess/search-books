import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { Anchor } from '@mantine/core';

type Props = PropsWithChildren & {
  href: string;
};

export const A = ({ href, children }: Props) => {
  return (
    <Anchor component={Link} to={href}>
      {children}
    </Anchor>
  );
};
