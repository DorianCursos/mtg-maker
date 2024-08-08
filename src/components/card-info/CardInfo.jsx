import { useContext } from 'react';
import { FrameContext } from '../../contexts/FrameContext';

const CardInfo = () => {
	const { frameCard, setFrameCard } = useContext(FrameContext);
	return (
		<>
			<h2>Card Info</h2>
			<input
				style={{ width: '150px' }}
				type='text'
				maxLength={30}
				onChange={event => changeCardTitle(event, frameCard, setFrameCard)}
			/>
			<button onClick={() => getInfoCard(frameCard, setFrameCard)}>
				Get Info Card
			</button>
		</>
	);
};

const changeCardTitle = (event, frameCard, setFrameCard) => {
	setFrameCard({ ...frameCard, cardTitle: event.target.value });
};

const getInfoCard = async (frameCard, setFrameCard) => {
	try {
		const response = await fetch(
			`https://api.scryfall.com/cards/named?fuzzy=${encodeURIComponent(
				frameCard.cardTitle
			)}&lang=es`
		);
		if (!response.ok) {
			throw new Error(`Error: ${response.status}`);
		}
		const cardInfo = await response.json();
		console.log(cardInfo);
		setFrameCard({
			...frameCard,
			cardImage: cardInfo.image_uris.art_crop,
			manaCost: cardInfo.mana_cost
		});
	} catch (error) {
		console.error('Failed to fetch card info:', error);
	}
};

export default CardInfo;
