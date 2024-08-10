import { useContext } from 'react';
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
			<br />
			<textarea
				name='card-text'
				id='card-text'
				rows={10}
				cols={45}
				value={frameCard.cardText}
				onChange={event =>
					setFrameCard({ ...frameCard, cardText: event.target.value })
				}
			/>
			<div>
				<label htmlFor='text-size'>Text Size</label>
				<input
					type='number'
					defaultValue={12}
					onChange={event =>
						setFrameCard({ ...frameCard, textSize: event.target.value })
					}
				/>
			</div>
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
			cardText: cardInfo.printed_text || cardInfo.oracle_text
		});

		console.log(cardInfo.printed_text);
	} catch (error) {
		console.error('Failed to fetch card info:', error);
	}
};

export default CardInfo;
