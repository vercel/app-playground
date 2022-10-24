'use client';

import { type Category } from '@/lib/getCategories';
import { TabNavItem } from '@/ui/TabNavItem';
import { useSelectedLayoutSegments } from 'next/navigation';

const CategoryNav = ({ categories }: { categories: Category[] }) => {
  const selectedLayoutSegments = useSelectedLayoutSegments();

  return (
    <div className="flex items-center space-x-4">
      <TabNavItem href="/layouts" isActive={!selectedLayoutSegment}>
        Home
      </TabNavItem>

      {categories.map((item) => (
        <TabNavItem
          key={item.slug}
          href={`/layouts/${item.slug}`}
          isActive={selectedLayoutSegments.includes(item.slug)}
        >
          {item.name}
        </TabNavItem>
      ))}
    </div>
  );
};

export default CategoryNav;
