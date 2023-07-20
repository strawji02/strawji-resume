import { Children, ReactNode } from 'react';
import { styled } from 'styled-components';

export interface GroupProps {
  children?: ReactNode;
}

const SegmentControl = styled.div`
  display: flex;
  padding: 2px;
  justify-content: center;
  align-items: center;
  border-radius: 9px;
  background: var(--fills-tertiary, rgba(118, 118, 128, 0.6));
`;

export function SegmentedControlsMain({ children, ...props }: GroupProps) {
  console.log(Children.toArray(children));

  return <SegmentControl>Enter</SegmentControl>;
}
