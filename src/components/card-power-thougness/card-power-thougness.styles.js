import styled from 'styled-components';

const StyledCardPowerThougnessContainer = styled.div`
	position: absolute;
	bottom: 15px;
	right: 20px;
	display: flex;
	justify-content: center;
	width: 75px;
	height: 40px;
	background-image: ${({ $src }) => `url(${$src})`};
	background-size: 100% 100%;
	background-repeat: no-repeat;
`;

const StyledCardPowerThougness = styled.span`
	position: absolute;
	top: 6px;
	left: 26px;
	font-size: 22px;
	font-weight: bold;
	font-family: 'mplantin';

	@font-face {
		font-family: 'mplantin';
		src: url('/fonts/Mplantin.ttf');
	}
`;

export { StyledCardPowerThougness, StyledCardPowerThougnessContainer };
