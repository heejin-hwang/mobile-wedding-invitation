import 'photoswipe/style.css';
import images from '@/layout/Gallery/Images.ts';
import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const timeoutRef = useRef<number | null>(null); // 타임아웃을 저장할 Ref

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;

    if (Math.abs(diffX) > 50) { // 50px 이상 움직이면 슬라이드
      if (diffX > 0) nextSlide(); // 왼쪽 스와이프
      else prevSlide(); // 오른쪽 스와이프
      setIsDragging(false); // 한 번만 반응하도록
    }
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // 기존 타이머 제거
    }
  };
  
  useEffect(() => {
    resetTimeout(); // 슬라이드가 변경되면 타이머 초기화
    timeoutRef.current = window.setTimeout(nextSlide, 5000); // 5초마다 슬라이드 변경

    return () => resetTimeout(); // 컴포넌트 언마운트 시 타이머 제거
  }, [currentIndex]);

  return (
    <SliderContainer
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <SlideWrapper currentIndex={currentIndex}>
        {images.map((image, index) => (
          <Slide
            key={index}
            style={{ backgroundImage: `url(${image.source})` }}
          />
        ))}
      </SlideWrapper>
      <Controls>
        <Button onClick={prevSlide}>❮</Button>
        <Button onClick={nextSlide}>❯</Button>
      </Controls>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  touch-action: pan-y; // 수직 스크롤과 충돌 방지
  box-sizing: border-box;
  aspect-ratio: 2 / 3; // 가로:세로 비율 2:3
`;

const SlideWrapper = styled.div<{ currentIndex: number }>`
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => `-${Math.round(props.currentIndex * 100)}%`});
`;

const Slide = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  box-sizing: border-box;
`;

const Controls = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
`;

const Button = styled.button`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;


export default PhotoGallery;
