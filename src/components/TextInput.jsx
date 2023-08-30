import PropTypes from 'prop-types';

TextInput.propTypes ={
	value: PropTypes.string,
	correct: PropTypes.bool,
	incorrect: PropTypes.bool,
	disabled: PropTypes.bool
}

export function TextInput({ value, correct, incorrect, disabled }) {
	const isCorrect = correct ? 'correct' : ''
	const isNotCorrect = incorrect ? 'incorrect' : ''

	return (
		<input 
			className={` ${isCorrect} ${isNotCorrect} `}
			defaultValue={value}
			type='text'
			disabled={disabled}
		/>
	);
} 