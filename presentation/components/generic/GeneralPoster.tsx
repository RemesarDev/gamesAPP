import { Image, Text, View } from 'react-native';

interface Props {
    id: number;
    poster:string;
    smallPoster?:boolean;
    className?:string;
    name?:string;
}

const GeneralPoster = ({poster,name,smallPoster=false,id}:Props) => {
    return (
       // <Pressable className={`active:opacity-90 px-2 ${className}`}
        //onPress={()=>router.push(`/movie/${id}`)}> 
        <View className="items-center">
        <Image
            source={{ uri: poster }}
            className="shadow-lg rounded-2xl"
            style={{
            width: smallPoster ? 85 : 150,
            height: smallPoster ? 130 : 250,
            }}
            resizeMode="cover"
        />
        <Text className="text-center font-bold mb-2">{name}</Text>
        </View>
        //</Pressable>
    )
}
export default GeneralPoster