import MarcoFondo from "@/presentation/components/generic/MarcoFondo";
import MenuButton from "@/presentation/components/generic/MenuButton";
import { useRouter } from "expo-router";
import React from 'react';
import { Image, Text, View } from 'react-native';

const ProfileScreen = () => {
  const router = useRouter();


	return (
		<MarcoFondo>
			<View className="flex-1 px-4 my-10">
                <MenuButton />
				<View className="bg-white flex mt-20 items-center justify-center pt-6 rounded-3xl">
                    <Image
						source={require('@/assets/images/perfil.jpg')}
						style={{ width: 100, height: 100 }}
						className='rounded-full'
					/>
					<Text className="text-2xl font-extrabold text-center text-indigo-300 my-3">
					Nombre Jugador
					</Text>
				</View>

				<View className="bg-white flex mt-5 items-center justify-center py-6 rounded-3xl">
					<Text className="text-lg font-bold pb-5">Información de Perfil</Text>
                    <Text className="text-lg  pb-3">Email:  jugador@gmail.com</Text>
                    <Text className="text-lg  pb-3">Teléfono:  +123456789</Text>
                    <Text className="text-lg  pb-3">Ubicación:  Buenos Aires, Argentina</Text>
                    <Text className="text-lg  pb-3">Fecha de Nacimiento:  01/01/2000</Text>
				</View>											
			</View>
		</MarcoFondo>
	);
}

export default ProfileScreen