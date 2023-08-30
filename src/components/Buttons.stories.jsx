import { Button } from './Button';

export default {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  }
};

export const Primary = args => <Button {...args} />;
export const WithIcon = args => <Button {...args} />;
export const IconOnly = args => <Button {...args} />;

Primary.args = {
  label: "Click me!",
  primary: true,
  correct: false,
  icon: false,
  iconOnly: false
}

WithIcon.args = {
  ...Primary.args,
  icon: true
}

IconOnly.args = {
  ...Primary.args,
  icon: true,
  iconOnly: true
}