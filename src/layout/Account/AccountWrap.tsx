import Copy from '@/assets/icons/copy.svg?react';
import kakaopay from '@/assets/icons/kakaopay.webp?url';
import toss from '@/assets/icons/toss.webp?url';

interface IAccountProps {
  name: string;
  relation: string;
  bank: string;
  account: string;
  kakaopayAccount?: string;
  tossAccount?: string;
}
const AccountWrap = ({
  name,
  relation,
  bank,
  account,
  kakaopayAccount,
  tossAccount,
}: IAccountProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(account).then(
      () => {
        alert('계좌번호가 복사되었습니다.😉😉');
      },
      () => {
        alert('계좌번호 복사에 실패했습니다.🥲🥲');
      },
    );
  };

  return (
    <div className='font-[NEXONLv1Light] flex flex-col py-2.5 px-0 border-b border-[#dfdfdf] last-of-type:mb-0 last-of-type:border-b-0'>
      <div className='h-[inherit] flex items-center gap-[5px] my-[5px] mx-0'>
        <span className='text-[#44484d]'>{relation}</span>
        <span className='text-base'>{name}</span>
      </div>
      <div className='flex items-center justify-between'>
        <div>
          <span>{bank}</span>
          &nbsp;
          <span>{account}</span>
        </div>
        <button className='border-0 rounded-[5px] px-[0.1rem] py-[0.2rem] cursor-pointer gap-[2px] outline-0 shadow-none bg-white' onClick={handleCopy}>
          <Copy fill="#dfdfdf" />
        </button>
      </div>
      <div className='flex w-full gap-0.5'>
        {kakaopayAccount && (
          <a
            className='flex items-center justify-center border border-[#dfdfdf] rounded-[5px] mx-[5px] my-0 px-0 py-[0.8em] w-[inherit] font-[0.7rem] cursor-pointer gap-0.5 text-[#1a1a1a] no-underline outline-none shadow-none bg-white' 
            href={kakaopayAccount} 
            target="_blank" 
            rel="noreferrer"
          >
            <img className='w-[50px]' src={kakaopay} alt="kakaopay" />
          </a>
        )}
        {tossAccount && (
          <a
            className='flex items-center justify-center border border-[#dfdfdf] rounded-[5px] mx-[5px] my-0 px-0 py-[0.8em] w-[inherit] font-[0.7rem] cursor-pointer gap-0.5 text-[#1a1a1a] no-underline outline-none shadow-none bg-white' 
            target="_blank" 
            rel="noreferrer"
            href={tossAccount}
          >
            <img className='w-[70px]' src={toss} alt="toss" />
          </a>
        )}
      </div>
    </div>
  );
};

export default AccountWrap;
