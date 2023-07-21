import styled from 'styled-components';

export const Item = styled.li`
	width: 100%;
	padding: 5px 20px;
	cursor: pointer;

	&:hover {
		@media (hover: hover) and (pointer: fine) {
			background-color: ${({ theme }) => theme.colors.hoverBackgroundDefault};
		}
	}

	span {
		line-height: 20px;
		letter-spacing: 0.2px;
	}
`;
