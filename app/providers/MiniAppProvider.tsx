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
      // Intentamos obtener el contexto
      const ctx = await sdk.context;
      if (ctx) {
        setContext(ctx);
      }
      
      // ¡ESTA ES LA PARTE CLAVE!
      // Llamamos a ready() siempre para notificar a Base que la app cargó.
      // Esto ocultará el splash screen y cambiará el estado a "Ready".
      await sdk.actions.ready();
      setIsReady(true);
    } catch (error) {
      console.error("Error inicializando Mini App SDK:", error);
      // Marcamos como listo incluso si hay error para no bloquear la app
      setIsReady(true);
    }
  };
  init();
}, []);
}
