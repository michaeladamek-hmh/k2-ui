import { MultipleChoseQuestion } from "./MultipleChoiceQuestion";

export default {
  component: MultipleChoseQuestion,
  title: 'Multiple Chose Question',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  }
}

export const Default = args => <MultipleChoseQuestion {...args} />
export const Checked = args => <MultipleChoseQuestion {...args} />
export const Correct = args => <MultipleChoseQuestion {...args} />
export const InCorrect = args => <MultipleChoseQuestion {...args} />
export const Disabled = args => <MultipleChoseQuestion {...args} />

Default.args = {
	type: 'checkbox',
	id: 'answer1',
	image: true,
	correct: false,
	incorrect: false,
	checked: false,
	disabled: false
}

Checked.args = {
	...Default.args,
	checked: true
}

Correct.args = {
	...Default.args,
	correct: true,
	disabled: true
}

InCorrect.args = {
	...Default.args,
	incorrect: true
}

Disabled.args = {
	...Default.args,
	disabled: true
}