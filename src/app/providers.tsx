// app/providers.tsx
'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { UserContextProvider } from '../../context/usercontext';
import { AuthContextProvider } from '../../context/authContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <AuthContextProvider>
        <ChakraProvider>
          <UserContextProvider>{children}</UserContextProvider>
        </ChakraProvider>
      </AuthContextProvider>
    </CacheProvider>
  );
}
