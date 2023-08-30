import { TextInput } from './TextInput';

export default {
  component: TextInput,
  title: 'Text Input',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  }
};

export const Default = args => <TextInput {...args} />;
export const Correct = args => <TextInput {...args} />;
export const InCorrect = args => <TextInput {...args} />;
export const Disabled = args => <TextInput {...args} />;

Default.args = {
	value: "",
	correct: false,
	incorrect: false,
	disabled: false
}

Correct.args = {
	...Default.args,
	value: 'answer',
	correct: true,
	disabled: true
}

InCorrect.args = {
	value: 'answer',
	correct: false,
	incorrect: true,
	disabled: true
}

Disabled.args = {
	...Default.args,
	disabled: true
}
