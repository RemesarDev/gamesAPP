import GeneralHorizontalList from '@/presentation/components/generic/GeneralHorizontalList';
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
    <GeneralHorizontalList
      familyQuery={familyQuery}
      members={platforms ?? []}
    />
  );
};

export default Index;