import styled from 'styled-components';

export const Container = styled.div`
	margin-bottom: 40px;
`;

export const InputBlock = styled.div`
	background-color: ${({ theme }) => theme.colors.secondaryBackground};
	display: flex;
	height: 40px;
	width: 100%;
	align-items: center;
	border-radius: ${({ theme }) => theme.borders.borderRadiusDefault};
	transition: background-color 0.3s;

	&:focus-within {
		background-color: rgba(255, 255, 255, 0.1);
	}
`;

export const IconBlock = styled.span`
	width: 12px;
	height: 12px;
	margin: 13.62px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Input = styled.input`
	background: none;
	width: 100%;
	height: 100%;
	border: none;
	outline: none;
	color: ${({ theme }) => theme.colors.white};
	border-radius: ${({ theme }) => theme.borders.borderRadiusDefault};
`;
