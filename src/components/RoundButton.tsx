import styled from '@emotion/styled';

const RoundButton = styled.button`
  padding: 0.5em 1em;
  border-radius: 20px;
  outline: none;
  box-shadow: none;
  font-size: 0.9rem;
  cursor: pointer;
  color: #44484d;
  text-decoration: none;
  background-color: #e6ece1;
`.withComponent('a');

export default RoundButton;
