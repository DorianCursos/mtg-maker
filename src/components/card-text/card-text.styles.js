import styled from 'styled-components';

const StyledContainerCardText = styled.div`
	position: absolute;
	top: 327px;
	left: 40px;
	width: 280px;
	font-weight: bold;
	font-family: 'matrix';
`;

const StyledCardText = styled.p`
	font-size: ${({ $textSize }) => $textSize}px;
	line-height: 1.2;
	margin-block: 6px;
`;

export { StyledCardText, StyledContainerCardText };
