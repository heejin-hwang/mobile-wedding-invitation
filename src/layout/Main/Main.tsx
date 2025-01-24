import styled from '@emotion/styled';
import data from 'data.json';
import mainImg from '@/assets/images/01.webp'

const Main = () => {
  const { greeting } = data;
  return (
    <div>
      <h1 className='font-[NEXONLv1Light] text-[2rem] leading-none mt-[1.5rem] mb-0 ml-0 mr-0 pb-4'>2025 / 04 / 26</h1>
      <h3 className='text-[1.17rem] mt-0 mr-0 mb-[1.5rem] ml-0'>SATURDAY</h3>
      <div className='flex justify-center'>
        <img src={mainImg} className='w-[90%] max-w-[450px]' />
      </div>
      <p className='font-[NEXONLv1Bold] text-[2rem] text-[#2F2120] leading-[120%] whitespace-pre-line mt-1em mb-1em'>{greeting.title}</p>
      <p className='text-[1.1rem] text-[#2F2120] leading-[140%] whitespace-pre-line'>{greeting.eventDetail}</p>
    </div>
  );
};

export default Main;
