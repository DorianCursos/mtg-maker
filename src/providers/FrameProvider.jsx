import { useState } from 'react';
import { FrameContext } from '../contexts/FrameContext';

const FrameProvider = ({ children }) => {
	const [frameCard, setFrameCard] = useState({
		frameType: null,
		frameColor: null,
		cardTitle: '',
		cardImage: '',
		manaCost: '',
		textSize: 16
	});
	console.log(frameCard);

	return (
		<FrameContext.Provider value={{ frameCard, setFrameCard }}>
			{children}
		</FrameContext.Provider>
	);
};

export default FrameProvider;
