import {
	StyledCardPowerThougness,
	StyledCardPowerThougnessContainer
} from './card-power-thougness.styles';

const CardPowerThougness = ({ src }) => {
	console.log(src);
	return (
		<StyledCardPowerThougnessContainer $src={src}>
			<StyledCardPowerThougness>3/3</StyledCardPowerThougness>
		</StyledCardPowerThougnessContainer>
	);
};

export default CardPowerThougness;
