import { Text, View } from "react-native";

interface Props{
    descripcion: string;
    puntaje?: number;
    releaseDate: string;
}


const HeaderBody = ({descripcion, puntaje, releaseDate}:Props) => {
    return (
        <View className='px-5 mt-5'>
            <Text className='font-bold color-white'> Rating: {puntaje} - Date: {releaseDate}</Text>
            <Text className='text-base text-justify font-normal color-white'>{descripcion}</Text>
        </View>
    )
}
export default HeaderBody