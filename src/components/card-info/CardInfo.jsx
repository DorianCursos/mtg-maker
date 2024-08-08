import { Fragment, useContext } from 'react';
import { FrameContext } from '../../contexts/FrameContext';

const CardInfo = () => {
	const { frameCard, setFrameCard } = useContext(FrameContext);
	return (
		<>
			<h2>Card Info</h2>
			<input
				style={{ width: '250px' }}
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
			manaCost: cardInfo.mana_cost,
			typeLine: cardInfo.printed_type_line || cardInfo.type_line,
			cardText: formatText(cardInfo.printed_text || cardInfo.oracle_text)
		});
	} catch (error) {
		console.error('Failed to fetch card info:', error);
	}
};

const formatText = text => {
	return text.split('\n').map((line, index) => (
		<Fragment key={index}>
			{line}
			<br />
		</Fragment>
	));
};

export default CardInfo;
