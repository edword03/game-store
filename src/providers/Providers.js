'use client';

import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { useState } from 'react';
import { StyleProvider } from './StyleProvider';

export const Providers = ({ children }) => {
	const [client] = useState(new QueryClient());

	return (
		<QueryClientProvider client={client}>
			<StyleProvider>{children}</StyleProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};
