import { useContext } from 'react';
import { FrameContext } from '../../contexts/FrameContext';

const CardTitle = () => {
	const { frameCard, setFrameCard } = useContext(FrameContext);
	return (
		<>
			<h2>Card Title</h2>
			<input
				style={{ width: '350px' }}
				type='text'
				maxLength={30}
				onChange={event => changeCardTitle(event, frameCard, setFrameCard)}
			/>
			<button onClick={() => getInfoCard(frameCard.cardTitle)}>
				Get Info Card
			</button>
		</>
	);
};

const changeCardTitle = (event, frameCard, setFrameCard) => {
	setFrameCard({ ...frameCard, cardTitle: event.target.value });
};

const getInfoCard = async cardTitle => {
	try {
		const response = await fetch(
			`https://api.scryfall.com/cards/named?exact=${encodeURIComponent(
				cardTitle
			)}&lang=es`
		);
		if (!response.ok) {
			throw new Error(`Error: ${response.status}`);
		}
		const cardInfo = await response.json();
		console.log(cardInfo);
	} catch (error) {
		console.error('Failed to fetch card info:', error);
	}
};

export default CardTitle;
