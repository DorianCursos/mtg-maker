import { useContext } from 'react';
import { MANA_ICONS } from '../../constants/mana-icons';
import { FrameContext } from '../../contexts/FrameContext';
import { StyledCardText, StyledContainerCardText } from './card-text.styles';

const CardText = ({ text }) => {
	const { frameCard } = useContext(FrameContext);
	console.log(frameCard.textWidth);

	if (!text) return;

	const formattedText = formatText(text, frameCard);
	return (
		<>
			<StyledContainerCardText $textWidth={frameCard.textWidth}>
				{formattedText}
			</StyledContainerCardText>
		</>
	);
};

// Reemplazar símbolos de maná con imágenes
const replaceManaSymbols = text => {
	const parts = text.split(/({[^}]+})/g);

	return parts.map((part, index) => {
		if (MANA_ICONS[part]) {
			return (
				<img
					key={index}
					src={MANA_ICONS[part]}
					alt={part}
					style={{ maxWidth: '12px', display: 'inline-block', margin: '0 2px' }}
				/>
			);
		}
		return part;
	});
};

// Formatear el texto para incluir imágenes y JSX
const formatText = (text, frameCard) => {
	const textToArray = text.split('\n');

	return textToArray.map((line, index) => (
		<StyledCardText key={index} $textSize={frameCard.textSize || 12}>
			{replaceManaSymbols(line)}
		</StyledCardText>
	));
};

/* 

"Vuela.
Cuando la Gansa dorada entre, crea una ficha de Comida. (Es un artefacto con "{2}, {T}, sacrificar este artefacto: Ganas 3 vidas".)
{1}{G}, {T}: Crea una ficha de Comida.
{T}, sacrificar una Comida: Agrega un maná de cualquier color."

*/

export default CardText;
