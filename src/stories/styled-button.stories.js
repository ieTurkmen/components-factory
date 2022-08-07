
import React from 'react';
import StyledButtonDefault from '../components/styled-button';

export default {
  title: 'Styled Button',
  component: StyledButtonDefault 
};

const Template = (args) => <StyledButtonDefault {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    disabled: false,
   label: 'Gebeş Kaplumbağa',
};
