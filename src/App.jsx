import MainContainer from './components/main-container/MainContainer';
import FrameProvider from './providers/FrameProvider';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<FrameProvider>
			<GlobalStyles />
			<h1>MTG Card Maker</h1>
			<MainContainer />
		</FrameProvider>
	);
};

export default App;
