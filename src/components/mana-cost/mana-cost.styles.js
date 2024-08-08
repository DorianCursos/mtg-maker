import styled from 'styled-components';

const StyledSymbols = styled.div`
	position: absolute;
	top: 32px;
	right: 28px;
	display: flex;
	width: fit-content;
	gap: 2px;

	& > * {
		width: 16px;
		filter: drop-shadow(0 2px black);
	}
`;

export { StyledSymbols };
