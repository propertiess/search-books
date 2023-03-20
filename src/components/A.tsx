import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { Anchor } from '@mantine/core';

type Props = PropsWithChildren & {
  href: string;
  onClick?: () => void;
};

export const A = ({ href, children, onClick }: Props) => {
  return (
    <Anchor component={Link} to={href} onClick={onClick}>
      {children}
    </Anchor>
  );
};
