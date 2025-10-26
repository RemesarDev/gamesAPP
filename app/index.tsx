import GeneralHorizontalList from '@/presentation/components/generic/GeneralHorizontalList';
import MarcoFondo from '@/presentation/components/generic/MarcoFondo';
import { usePlatformByFamily } from '@/presentation/hooks/usePlatformByFamily';
import React from 'react';

const Index = () => {
  const { platformByFamilyQuery, familyQuery } = usePlatformByFamily(5); // caso de prueba

  const platforms = platformByFamilyQuery.data?.map((platform) => ({
    id: platform.id,
    poster: platform.logoUrl ?? '', // Aseguramos que haya un string
    name: platform.name,
  }));

  return (
    <MarcoFondo>
      <GeneralHorizontalList
        familyQuery={familyQuery}
        members={platforms ?? []}
      />
    </MarcoFondo>
  );
};

export default Index;