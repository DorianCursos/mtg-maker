import { toPng } from 'html-to-image';
import { useContext, useRef } from 'react';
import { FrameContext } from '../../contexts/FrameContext';
import ManaCost from '../mana-cost/ManaCost';
import {
	StyledCard,
	StyledCardImage,
	StyledCardText,
	StyledTypeLine
} from './card-generator.styles';

const CardGenerator = () => {
	const { frameCard, setFrameCard } = useContext(FrameContext);
	const cardRef = useRef(null);

	if (!frameCard.frameType || !frameCard.frameColor) return;
	return (
		<div>
			<StyledCard
				ref={cardRef}
				$path={`/card-frames/${frameCard.frameType.toLowerCase()}/${
					frameCard.frameColor
				}.png`}
			>
				<div style={{ display: 'flex' }}>
					<span>{frameCard.cardTitle}</span>
					<ManaCost cost={frameCard.manaCost} />
				</div>
				<StyledCardImage src={frameCard.cardImage} alt='' />
				<StyledTypeLine>{frameCard.typeLine}</StyledTypeLine>
				<StyledCardText>{frameCard.cardText}</StyledCardText>
			</StyledCard>

			<button onClick={() => generateImage(cardRef, frameCard)}>
				Download
			</button>
		</div>
	);
};

const generateImage = async (cardRef, frameCard) => {
	console.log(cardRef.current);
	if (cardRef.current === null) {
		return;
	}

	try {
		const dataUrl = await toPng(cardRef.current);
		const link = document.createElement('a');
		link.download = `${frameCard.cardTitle}.png`;
		link.href = dataUrl;
		link.click();
	} catch (err) {
		console.error('Failed to generate image', err);
	}
};

export default CardGenerator;
