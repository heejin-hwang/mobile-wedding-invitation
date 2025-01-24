import data from 'data.json';
import AccountWrap from './AccountWrap.tsx';
import Accordion from '@/components/Accordion.tsx';

const Account = () => {
  const { hostInfo } = data;
  return (
    <div className='flex w-[90%] flex-col pt-5 pb-5 pr-0 pl-0'>
      {hostInfo.map((host) => {
        return (
          <Accordion title={host.host} key={host.host}>
            {host.accountInfo.map((account) => {
              return (
                <AccountWrap
                  key={account.name}
                  name={account.name}
                  relation={account.relation}
                  bank={account.bank}
                  account={account.account}
                  kakaopayAccount={account.kakaopayAccount}
                  tossAccount={account.tossAccount}
                />
              );
            })}
          </Accordion>
        );
      })}
    </div>
  );
};

export default Account;
