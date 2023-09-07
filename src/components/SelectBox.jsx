import PropTypes from 'prop-types';

SelectBox.propTypes = {
	icon: PropTypes.bool
}

export function SelectBox({ icon }) {
	const hasIcon = icon ? 'v1' : 'v2';

	return (
		<select className={` ${hasIcon} `}>
      <option>Tears of the Kingdom</option>
      <option>Breath of the Wild</option>
      <option>Skyward Sword</option>
      <option>Twilight Princess</option>
      <option>The Wind Waker</option>
      <option>Majora&apos;s Mask</option>
      <option>Ocarina of Time</option>
    </select>
	);
}