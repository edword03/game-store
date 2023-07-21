import styled from 'styled-components';

export const ListContainer = styled.div`
	position: absolute;
	z-index: 1;
	right: 0;
`;

export const List = styled.ul`
	background-color: ${({ theme }) => theme.colors.secondaryBackground};
	padding: 10px 0;
	border-radius: 4px;
`;
