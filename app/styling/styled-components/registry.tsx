'client'

import React from 'react';
import { useServerInsertedHTML } from 'next/dist/client/components/hooks-client';
import { useStyledComponentsRegistry } from '@/lib/styling';

export default function StyledComponentsRegistry({
  children,
}: {
  children: JSX.Element
}) {
  const [StyledComponentsRegistry, styledComponentsFlushEffect] =
    useStyledComponentsRegistry();

  useServerInsertedHTML(() => {
    return (
      <>
        {styledComponentsFlushEffect()}
      </>
    );
  });

  // Only include style registry on server side for SSR
  if (typeof window === 'undefined') {
    return (
      <StyledComponentsRegistry>
        {children}
      </StyledComponentsRegistry>
    );
  }

  return children;
}
