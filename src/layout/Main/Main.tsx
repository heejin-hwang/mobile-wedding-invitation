import styled from '@emotion/styled';
import data from 'data.json';
import mainImg from '@/assets/images/01.webp'

const Main = () => {
  const { greeting } = data;
  return (
    <div>
      <Phrase>2025 / 04 / 26</Phrase>
      <Phrase2>SATURDAY</Phrase2>
      <MainImg src={mainImg} />
      <MainTitle>{greeting.title}</MainTitle>
      <SubTitle>{greeting.eventDetail}</SubTitle>
    </div>
  );
};

export default Main;

const Phrase = styled.h1`
  font-family: NEXONLv1Light, SUITE-Regular, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-size: 2rem;
  line-height: 1;
  margin: 1.5rem 0 0 0;
  padding-bottom: 1rem;
`;

const Phrase2 = styled.h3`
  margin: 0 0 1.5rem 0;
`;

const MainImg = styled.img`
  width: 90%;
  max-width: 450px;
`;

const MainTitle = styled.p`
  font-family: NEXONLv1Bold, NEXONLv1Light, SUITE-Regular, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-size: 2rem;
  color: #2F2120;
  line-height: 120%;
  white-space: pre-line;
`;

const SubTitle = styled.p`
  font-size: 1.1rem;
  color: #2F2120;
  line-height: 140%;
  white-space: pre-line;
`;
