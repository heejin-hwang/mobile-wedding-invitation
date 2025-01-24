import data from 'data.json';
import Button from '@/components/Button.tsx';

const MapButtons = () => {
  const { naverMap, kakaoMap } = data.mapInfo;

  return (
    <div className='m-2 flex gap-2 justify-center'>
      <Button onClick={() => window.open(naverMap)}>네이버 지도</Button>
      <Button onClick={() => window.open(kakaoMap)}>카카오맵</Button>
    </div>
  );
};

export default MapButtons;
