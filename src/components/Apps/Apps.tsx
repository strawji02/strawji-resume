import { styled } from 'styled-components';
import Contacts from '../../assets/Contacts.svg';
import FindMy from '../../assets/Find My.svg';
import Phone from '../../assets/Phone.svg';
import Photos from '../../assets/Photos.svg';
import Safari from '../../assets/Safari.svg';
import AppButton, { AppButtonProps } from './AppButton';

const AppsGrid = styled.div`
  grid-template-columns: repeat(auto-fill, minmax(25%, auto));
  display: grid;
  margin: 20px 0;
`;

function Apps() {
  const icons: AppButtonProps[] = [
    { label: 'strawji', src: Contacts },
    { label: 'Skills', src: Photos },
    { label: 'Pojects', src: Safari },
    { label: 'About me', src: FindMy },
    { label: 'Contact', src: Phone },
  ];
  return (
    <div>
      <AppsGrid>
        {icons.map((props) => (
          <AppButton {...props} />
        ))}
      </AppsGrid>
    </div>
  );
}

export default Apps;
