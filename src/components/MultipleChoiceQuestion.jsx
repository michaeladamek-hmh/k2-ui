import PropTypes from 'prop-types';
import Zelda from '../assets/scss/images/zelda.jpeg';

MultipleChoseQuestion.propTypes = {
	//question: PropTypes.shape({
		type: PropTypes.oneOf(['checkbox', 'radio']),
		id: PropTypes.string,
		correct: PropTypes.bool,
		incorrect: PropTypes.bool,
		image: PropTypes.bool,
		checked: PropTypes.bool,
		disabled: PropTypes.bool,
	//})
};

export function MultipleChoseQuestion({ type, id, correct, incorrect, image, checked, disabled }) {
	const isCorrect = correct ? 'correct' : ''
	const isNotCorrect = incorrect ? 'incorrect' : ''

	return (
		<>
			<input 
				type={type} 
				id={id} 
				className={` ${isCorrect} ${isNotCorrect} `} 
				name={type} 
				value={id} 
				checked={checked} 
				disabled={disabled} 
			/>
			<label htmlFor={id}>
			{image
				? <img src={Zelda} />: 'Mouse rides a bike'
			}
			</label> 
		</>  
	)
}