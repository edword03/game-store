'use client';

import { theme } from '@/styles/theme';
import { ThemeProvider } from 'styled-components';
import { RegistryStyles } from '@/utils/registry-styles';
import { GlobalStyles } from '@/styles/GlobalStyles';

export const StyleProvider = ({ children }) => {
	return (
		<RegistryStyles>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				{children}
			</ThemeProvider>
		</RegistryStyles>
	);
};
