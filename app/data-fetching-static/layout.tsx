import { CategoryNav } from '@/ui/CategoryNav';
import { RenderedTimeAgo } from '@/ui/RenderedTimeAgo';
import React from 'react';

export const config = {
  dynamic: 'error',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <div className="flex items-center justify-between">
        <CategoryNav basePath="data-fetching-static" />
        <RenderedTimeAgo time={new Date().toISOString()} />
      </div>

      <div>{children}</div>
    </div>
  );
}
