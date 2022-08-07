import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

import MatButton from '@material-ui/core/Button';

const StyledButton = styled(MatButton)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  > span {
    color: ${props => props.disabled ? 'palevioletred' : "white"};

  }
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
`;
  


 const StyledButtonDefault = ({disabled,label}) => (
    <StyledButton disabled={disabled} color={disabled?'disabled':''} onClick={action('Styled button clicked')}>
      {label}
    </StyledButton>
  );

  export default StyledButtonDefault