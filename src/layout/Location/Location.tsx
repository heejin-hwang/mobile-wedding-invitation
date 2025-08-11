import styled from '@emotion/styled';
import data from 'data.json';
import Address from './Address.tsx';
import MapButtons from './MapButtons.tsx';
import { Caption, PointTitle } from '@/components/Text.tsx';
import KakaoMap from './KakaoMap.tsx';

const Location = () => {
  const { mapInfo } = data;
  return (
    <LocationWrapper>
      <PointTitle>{mapInfo.address1}</PointTitle>
      <Caption textAlign={'center'}>{mapInfo.address2}</Caption>
      <KakaoMap />
      <MapButtons />
      <Address />
    </LocationWrapper>
  );
};

export default Location;

const LocationWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;
