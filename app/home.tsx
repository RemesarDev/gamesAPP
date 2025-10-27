import { usePlatformsFamilies } from "@/presentation/hooks/usePlatformsFamilies";
import { useRouter } from "expo-router";
import { FlatList, Image, Pressable, Text, View } from "react-native";

const Home = () => {
	const { familyQuery } = usePlatformsFamilies(); // Familias de consolas
	const router = useRouter();

	const platforms = familyQuery.data?.map((platform) => ({
		id: platform.id,
		poster: "", // falta imagen
		name: platform.name,
	}));

	// Función para determinar el color según la consola
	const getButtonColor = (platformName: string) => {
		switch (platformName.toLowerCase()) {
			case "playstation":
				return "bg-blue-500";
			case "xbox":
				return "bg-green-500";
			case "nintendo":
				return "bg-red-500";
			case "sega":
				return "bg-cyan-500";
			default:
				return "bg-gray-500";
		}
	};

	return (
		<View className="flex-1 bg-white px-4">
			<Text className="text-4xl font-extrabold text-center text-indigo-600 my-6">
				gameAPP
			</Text>
			<Image
				source={require('@/assets/images/invader-home.gif')}
				style={{ width: '100%', height: '30%', alignSelf: 'center' }}
				className='rounded-full'
			/>
			<FlatList
				data={platforms?.slice(1, 5)} // Excluye Linux
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<Pressable
						className={`w-full py-4 my-2 rounded-lg ${getButtonColor(item.name)}`}
						onPress={() =>
							router.push({
								pathname: "/family/[id]",
								params: { id: String(item.id) },
							})
						} // Acción al presionar
					>
						<Text className="text-lg font-bold text-white text-center">
							{item.name}
						</Text>
					</Pressable>
				)}
			/>
		</View>
	);
};

export default Home;
