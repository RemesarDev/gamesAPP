import MarcoFondo from '@/presentation/components/generic/MarcoFondo';
import MenuButton from '@/presentation/components/generic/MenuButton';
import FamilySection from '@/presentation/components/sections/FamilySection';
import { usePlatformsFamilies } from '@/presentation/hooks/usePlatformsFamilies';
import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

const Familias = () => {
  const { familyQuery } = usePlatformsFamilies();

  if (familyQuery.isLoading) {
    return (
      <MarcoFondo>
        <View className="flex-1 items-center justify-center py-8">
          <ActivityIndicator size="large" />
          <Text className="mt-2">Cargando familias...</Text>
        </View>
      </MarcoFondo>
    );
  }

  if (familyQuery.isError) {
    return (
      <MarcoFondo>
        <View className="flex-1 items-center justify-center py-8">
          <Text>Error al cargar familias</Text>
        </View>
      </MarcoFondo>
    );
  }

  return (
    <MarcoFondo>
      <MenuButton className="px-4 mt-10" />
      <ScrollView>
        {(familyQuery.data ?? []).map((family) => (
          <FamilySection key={family.id} familyId={family.id} />
        ))}
      </ScrollView>
    </MarcoFondo>
  );
};

export default Familias;