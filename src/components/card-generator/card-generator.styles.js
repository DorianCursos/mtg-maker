import styled from 'styled-components';

const StyledCard = styled.div`
	position: relative;
	width: 375px;
	height: 523px;
	background-image: ${({ $path }) => `url(${$path})`};
	background-size: cover;
	font-family: 'Beleren';
	border-radius: 20px;
	padding: 30px 30px;
	color: black;

	@font-face {
		font-family: 'Beleren';
		src: url('/fonts/Beleren-Bold.ttf');
	}
`;

const StyledCardImage = styled.img`
	position: absolute;
	top: 60px;
	left: 31px;
	max-width: 315px;
	z-index: -1;
`;

const StyledTypeLine = styled.p`
	position: absolute;
	top: 286px;
	font-size: 14px;
`;

export { StyledCard, StyledCardImage, StyledTypeLine };
