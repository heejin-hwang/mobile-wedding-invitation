// const Container = styled.div`
//   border: 30px solid transparent; /* 테두리의 초기 값 설정 */
//   background-color: #ffffff;
//   width: 85vw;
//   margin: 0 auto;
//   touch-action: pan-x pan-y;

//   @media screen and (min-width: 500px) {
//       width: 500px;
//   }
// `;

interface ContainerProps {
  children: React.ReactNode;
}
function Container({children}: ContainerProps) {
  return (
    <div className='border-[30px] border-transparent bg-white mx-auto touch-action-none sm:w-[500px]'>
      {children}
    </div>
  )
}
export default Container;

// border-image-source: url('/background.png'); /* 이미지 경로 설정 */
// border-image-slice: 30% 49%; /* 이미지의 크기 설정 */
// border-image-width: 280px; /* 테두리 이미지의 너비 설정 */