import PropTypes from 'prop-types';
import CheckIcon from '../assets/scss/images/check.svg';

Button.propTypes = {
	label: PropTypes.string,
	primary: PropTypes.bool,
	correct: PropTypes.bool,
	iconOnly:  PropTypes.bool,
	icon: PropTypes.bool
}

export function Button({ label, primary, correct, icon, iconOnly }) {
	const isPrimary = primary ? 'primary' : '';
	const hasIcon = icon ? 'icon-text' : '';
	const hasIconOnly = iconOnly ? 'icon-only' : '';
	const isCorrect = correct ? 'correct' : ''

	return (
		<button type="button" className={` ${isPrimary} ${hasIcon} ${isCorrect} ${hasIconOnly} `} >
			{ icon 
				? <img src={CheckIcon} />: ''
			}
			{ iconOnly 
				? '' : label 
			}
		</button>
	);
}