import CustomButton from "@/presentation/components/generic/CustomButton";
import MarcoFondo from "@/presentation/components/generic/MarcoFondo";
import MenuButton from "@/presentation/components/generic/MenuButton";
import { useRouter } from "expo-router";
import { Image, Text, View } from "react-native";

const Home = () => {
	
	const router = useRouter();

	return (
		<MarcoFondo
			colors={['black', 'black','black','#3A47D5', '#FF00C3']}>
			<MenuButton className="px-4 mt-10"/>
			<View className="flex-1 px-4 my-5">
				<View>
					<Text className="text-4xl font-extrabold text-center text-indigo-300 my-6">
					gameAPP
					</Text>
					<Image
						source={require('@/assets/images/invader-home.gif')}
						style={{ width: '100%', height: '50%', alignSelf: 'center' }}
						className='rounded-full'
					/>
				</View>

				<View className="flex justify-center">
					<CustomButton
						icon="game-controller"
						txtColor="white"
						className={'border border-3 m-3 border-white'}
						onPress={() =>
							router.push('/familias')
						} // Acción al presionar
					>
						Familias
					</CustomButton>

					<CustomButton
						icon="person"
						txtColor="white"
						className={'border border-3 m-3 border-white'}
						onPress={() =>
							router.push('/profile')
						} // Acción al presionar
					>
						Perfil
					</CustomButton>
				</View>											
			</View>
		</MarcoFondo>
	);
};

export default Home;
