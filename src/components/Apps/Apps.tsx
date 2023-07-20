import { styled } from 'styled-components';
import Contacts from '../../assets/Contacts.svg';
import FindMy from '../../assets/Find My.svg';
import Phone from '../../assets/Phone.svg';
import Photos from '../../assets/Photos.svg';
import Safari from '../../assets/Safari.svg';
import { useElementSize } from '../../hooks/useElementSize';
import SegmentedControls from '../SegmentedControls';
import AppButton, { AppButtonProps } from './AppButton';

const AppsGrid = styled.div<{ $width?: number }>`
  grid-template-columns: repeat(auto-fill, minmax(25%, auto));
  grid-template-rows: repeat(auto-fill, minmax(120px, auto));
  display: grid;
  margin: 20px 0;
  width: ${(props) => (props.$width ? `${props.$width}px` : '100%')};
  scroll-snap-align: start;
`;

const AppSlide = styled.div`
  position: relative;
  overflow-y: scroll;
  scroll-snap-type: x mandatory;
  list-style: none;
  padding: 0;
  z-index: 1;
  display: block;
  overscroll-behavior: contain;
  height: calc(100% - 80px);
`;

const AppWrapper = styled.div`
  height: 100%;
  display: inline-flex;
  position: absolute;
  left: 0;
`;

function Apps() {
  const apps: AppButtonProps[][] = [
    [
      { label: 'strawji', src: Contacts },
      { label: 'Skills', src: Photos },
      { label: 'Pojects', src: Safari },
      { label: 'About me', src: FindMy },
      { label: 'Contact', src: Phone },
    ],
    [
      { label: 'strawji', src: Contacts },
      { label: 'Skills', src: Photos },
      { label: 'Pojects', src: Safari },
      { label: 'About me', src: FindMy },
      { label: 'Contact', src: Phone },
    ],
    [
      { label: 'strawji', src: Contacts },
      { label: 'Skills', src: Photos },
      { label: 'Pojects', src: Safari },
      { label: 'About me', src: FindMy },
      { label: 'Contact', src: Phone },
    ],
  ];
  const { ref, width } = useElementSize<HTMLDivElement>();

  return (
    <>
      <AppSlide ref={ref}>
        <AppWrapper>
          {apps.map((icons, appsIdx) => (
            <AppsGrid $width={width} key={`app-grid-${appsIdx}-page`}>
              {icons.map((props, iconsIdx) => (
                <AppButton
                  key={`icon-${appsIdx}-app-${iconsIdx}-icon`}
                  {...props}
                />
              ))}
            </AppsGrid>
          ))}
        </AppWrapper>
      </AppSlide>
      <SegmentedControls>
        <div>label</div>
        <div>label</div>
        <div>label</div>
      </SegmentedControls>
    </>
  );
}

export default Apps;
