import GeneralHorizontalList from '@/presentation/components/generic/GeneralHorizontalList';
import MarcoFondo from '@/presentation/components/generic/MarcoFondo';
import { usePlatformByFamily } from '@/presentation/hooks/usePlatformByFamily';
import React from 'react';
import { ScrollView } from 'react-native';

const Index = () => {
  const { platformByFamilyQuery, familyQuery } = usePlatformByFamily(5); // caso de prueba

  const platforms = platformByFamilyQuery.data?.map((platform) => ({
    id: platform.id,
    poster: platform.logoUrl ?? '', // Aseguramos que haya un string
    name: platform.name,
  }));

  return (
    <MarcoFondo>
      <ScrollView>
        <GeneralHorizontalList
          familyQuery={familyQuery}
          members={platforms ?? []}
        />
      </ScrollView>
    </MarcoFondo>
  );
};

export default Index;