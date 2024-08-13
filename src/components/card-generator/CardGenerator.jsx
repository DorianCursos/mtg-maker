import { toPng } from 'html-to-image';
import { useContext, useRef } from 'react';
import { POWER_THOUGNESS } from '../../constants/power-thougness';
import { FrameContext } from '../../contexts/FrameContext';
import CardPowerThougness from '../card-power-thougness/CardPowerThougness';
import CardText from '../card-text/CardText';
import ManaCost from '../mana-cost/ManaCost';
import {
	StyledCard,
	StyledCardImage,
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
				<CardText text={frameCard.cardText} textWidth={frameCard.textWidth} />
				<CardPowerThougness src={POWER_THOUGNESS.GOLD_1} />
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
