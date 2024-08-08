import CanvasCard from '../canvas-card/CanvasCard';
import CardFrame from '../card-frame/CardFrame';
import { StyledMainContainer } from './main-container.styles';

const MainContainer = ({ children }) => {
	return (
		<StyledMainContainer>
			<CardFrame />
			<CanvasCard />
		</StyledMainContainer>
	);
};

export default MainContainer;
