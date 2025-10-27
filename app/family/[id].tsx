import React from "react";
import { useLocalSearchParams } from "expo-router"; // Para obtener el parámetro dinámico
import { usePlatformByFamily } from "@/presentation/hooks/usePlatformByFamily";
import GeneralHorizontalList from "@/presentation/components/generic/GeneralHorizontalList";
import { usePlatformsFamilies } from "@/presentation/hooks/usePlatformsFamilies";

const FamilyScreen = () => {
	const { id } = useLocalSearchParams(); // Obtiene el ID de la familia desde la URL
	const { platformByFamilyQuery } = usePlatformByFamily(Number(id));
	const { familyQuery } = usePlatformsFamilies();

	const platforms = platformByFamilyQuery.data?.map((platform) => ({
		id: platform.id,
		name: platform.name,
		poster: platform.logoUrl,
	}));

	return (
		<GeneralHorizontalList
			title={`Consolas de ${familyQuery.data?.find((f) => f.id === Number(id))?.name || "Desconocida"}`} // Muestra el nombre de la franquicia
			members={platforms || []}
		/>
	);
};

export default FamilyScreen;
