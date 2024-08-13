import styled from 'styled-components';

const StyledContainerCardText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	position: absolute;
	top: 330px;
	left: 40px;
	width: ${({ $textWidth }) => $textWidth + 'px'};
	font-weight: bold;
	font-family: 'Crimson Text';
`;

const StyledCardText = styled.p`
	font-size: ${({ $textSize }) => $textSize}px;
	line-height: 1.2;
	margin-block: 0;
	margin-bottom: 0.25rem;
`;

export { StyledCardText, StyledContainerCardText };
