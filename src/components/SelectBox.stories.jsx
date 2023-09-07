import { SelectBox } from './SelectBox';

export default {
  component: SelectBox,
  title: 'Select Box',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  }
};

export const Primary = args => <SelectBox {...args} />;
export const WithOutIcon = args => <SelectBox {...args} />;

Primary.args = {
  icon: true,
}

WithOutIcon.args = {
  icon: false
}