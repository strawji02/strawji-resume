import { styled } from 'styled-components';

export interface AppButtonProps {
  src: string;
  label: string;
}
const IconButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 9px 0;
  align-items: center;
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 14px;
  &:active {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
      0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

function AppButton({ src, label, ...props }: AppButtonProps) {
  return (
    <IconButton>
      <Icon draggable={false} src={src} />
      <div>{label}</div>
    </IconButton>
  );
}

export default AppButton;
