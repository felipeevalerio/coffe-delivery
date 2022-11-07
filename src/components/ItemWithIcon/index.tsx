import { ReactNode } from 'react';
import { ChildrenInfo, Item, ItemProps } from './styles';

interface ItemWithIconProps extends ItemProps {
  icon: ReactNode;
  children: ReactNode;
}

export function ItemWithIcon({ color, icon, children }: ItemWithIconProps) {
  return (
    <Item color={color}>
      <span>{icon}</span>
      <ChildrenInfo>{children}</ChildrenInfo>
    </Item>
  );
}
