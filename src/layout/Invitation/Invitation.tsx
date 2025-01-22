import styled from '@emotion/styled';
import data from 'data.json';
import Host from '../Contact/Host.tsx';
import RoundButton from '@/components/RoundButton.tsx';
import { Caption, Paragraph } from '@/components/Text.tsx';
import Flower from '@/assets/images/icon_flower.png';

const Invitation = () => {
  const { greeting } = data;
  return (
    <InvitationWrapper>
      <Paragraph>{greeting.message}</Paragraph>
      <MiddleImg />
      <Host />
      <Caption textAlign={'center'}>{greeting.eventDetail}</Caption>
      {/* TODO: 구글캘린더 추가하기 기능을 넣는다면 링크 수정 */}
      <ContactWrapper>
        <RoundButton
          target='_blank'
          href={`tel:${greeting.tel1}`}
          rel="noreferrer">
          신랑에게 연락하기
        </RoundButton>
        <RoundButton
          target='_blank'
          href={`tel:${greeting.tel2}`}
          rel="noreferrer">
          신부에게 연락하기
        </RoundButton>
      </ContactWrapper>
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ContactWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const MiddleImg = styled.div`
    margin: 0 auto;
    margin-bottom: 1rem;
    width: 20px;
    height: 40px;
    background: url(${Flower});
    background-size: cover;
`;