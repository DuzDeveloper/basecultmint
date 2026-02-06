'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import sdk from '@farcaster/miniapp-sdk';

interface MiniAppContextValue {
  context: Awaited<typeof sdk.context> | null;
  isReady: boolean;
}

export const MiniAppContext = createContext<MiniAppContextValue | null>(null);

export function useMiniApp() {
  const context = useContext(MiniAppContext);
  if (!context) {
    throw new Error('useMiniApp must be used within MiniAppProvider');
  }
  return context;
}

export function MiniAppProvider({ children }: { children: ReactNode }) {
  const [context, setContext] = useState<Awaited<typeof sdk.context> | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        // Intentamos obtener el contexto e inicializar
        const ctx = await sdk.context;
        if (ctx) {
          setContext(ctx);
        }
        
        // Es vital llamar a ready() para que Base sepa que la app cargó
        await sdk.actions.ready();
        setIsReady(true);
      } catch (error) {
        console.error("Error inicializando Mini App SDK:", error);
        setIsReady(true);
      }
    };
    init();
  }, []);

  // Aquí pasamos los valores al Provider para que se consideren "usados"
  return (
    <MiniAppContext.Provider value={{ context, isReady }}>
      {children}
    </MiniAppContext.Provider>
  );
}
