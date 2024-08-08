import { MANA_ICONS } from '../../constants/mana-icons';
import { StyledSymbols } from './mana-cost.styles';

const ManaCost = ({ cost }) => {
	if (!cost) return;
	const symbols = getSymbols(cost);

	return (
		<StyledSymbols>
			{symbols.map(symbol => (
				<img key={symbol} src={MANA_ICONS[symbol]} alt='' />
			))}
		</StyledSymbols>
	);
};

const getSymbols = cost => {
	const symbols = cost.match(/{[^}]+}/g) || [];
	return symbols;
};

export default ManaCost;
