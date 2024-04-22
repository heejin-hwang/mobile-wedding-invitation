import styled from '@emotion/styled';

const Button = styled.button`
  padding: 0.5em 0.8em;
  border-radius: 8px;
  border: 1px solid #dfdfdf;
  width: inherit;
  outline: none;
  box-shadow: none;
  font-size: 0.8rem;
  cursor: pointer;
  background: white;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  color: #1a1a1a;
  text-decoration: none;
`.withComponent('a');

export default Button;
