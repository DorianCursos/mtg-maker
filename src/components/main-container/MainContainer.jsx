import CardFrame from '../card-frame/CardFrame';
import CardGenerator from '../card-generator/CardGenerator';
import { StyledMainContainer } from './main-container.styles';

const MainContainer = ({ children }) => {
	return (
		<StyledMainContainer>
			<CardFrame />
			<CardGenerator />
		</StyledMainContainer>
	);
};

export default MainContainer;
