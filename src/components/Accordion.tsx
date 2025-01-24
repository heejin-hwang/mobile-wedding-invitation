import { ReactNode, useState } from 'react';
import ExpandMore from '@/assets/icons/expand_more.svg?react';

interface IAccordionProps {
  title: string;
  children: ReactNode;
}

interface AccordionWrapperProps {
  children: ReactNode; // children의 타입을 ReactNode로 지정
};

interface AccordionHeaderProps {
  children: ReactNode; // children의 타입을 ReactNode로 지정
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const AccordionWrapper: React.FC<AccordionWrapperProps> = ({ children }: AccordionWrapperProps) => (
  <div className='font-[CookieRun] border border-[#e6ece1] mb-5 rounded-lg overflow-hidden transition-all duration-30'>
    { children }
  </div>
)

const AccordionHeaderProps = ({children, onClick}: AccordionHeaderProps) => (
  <div
    onClick={onClick}
    className='flex items-center justify-between bg-[#e6ece1] px-[15px] pointer'
  >
    {children}
  </div>
)

const Accordion = ({ title, children }: IAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionWrapper>
      <AccordionHeaderProps onClick={toggleAccordion}>
        <p className='text-[#44484d] my-4'>{title}</p>
        <span
          className='flex items-center justify-center select-none transition-all duration-30'
          style={{ 'transform': isOpen ? 'rotate(180deg)' : undefined }}
        >
          <ExpandMore fill="#e88ca6" />
        </span>
      </AccordionHeaderProps>
      {isOpen && <div className='text-sm text-justify py-2.5 px-5 bg-white'>{children}</div>}
    </AccordionWrapper>
  );
};

export default Accordion;

// const AccordionHeader = styled.div<{ isActive: boolean }>`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   background-color: #e6ece1;
//   padding: 0 15px;
//   cursor: pointer;
//   & > p {
//     color: #44484d;
//   }
//   & > span {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     user-select: none;
//     transition: all 0.3s ease;
//     transform: ${(props) => (props.isActive ? 'rotate(180deg)' : undefined)};
//   }
// `;
