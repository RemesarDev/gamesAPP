import { Image, Text, View } from "react-native";

interface Props {
	id: number;
	poster: string;
	smallPoster?: boolean;
	className?: string;
	name?: string;
}

const GeneralPoster = ({ poster, name, smallPoster = false, id }: Props) => {
	return (
		<View className="items-center px-2">
			<Image
				source={{ uri: poster }}
				className="shadow-lg rounded-2xl"
				style={{
					width: smallPoster ? 85 : 150,
					height: smallPoster ? 130 : 250,
				}}
				resizeMode="cover"
			/>
			<Text
				className="text-center font-bold mb-2"
				style={{
					width: smallPoster ? 85 : 150, // El ancho del texto coincide con el ancho de la imagen
				}}
			>
				{name}
			</Text>
		</View>
	);
};

export default GeneralPoster;
