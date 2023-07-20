import { ReactNode } from 'react';

export interface SegmentedButtonsProps {
  children?: ReactNode;
}

function SegmentedButtons({ children, ...props }: SegmentedButtonsProps) {
  return <>{children}</>;
}

export default SegmentedButtons;
