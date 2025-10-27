import { Image, Pressable, Text, View } from 'react-native';

interface Props {
    id: number;
    poster: string;
    smallPoster?: boolean;
    className?: string;
    name?: string;
    // Optional onPress handler that receives the id of the item
    onPress?: (id: number) => void;
}

const GeneralPoster = ({ poster, name, smallPoster = false, id, onPress, className }: Props) => {
    const imgWidth = smallPoster ? 85 : 150;
    const imgHeight = smallPoster ? 130 : 250;
    const textWidthClass = smallPoster ? 'w-[85px]' : 'w-[150px]';
    const content = (
        <View className={`items-center ${className ?? ''}`}>
            <Image
                source={{ uri: poster }}
                className="shadow-lg rounded-2xl"
                style={{
                    width: imgWidth,
                    height: imgHeight,
                }}
                resizeMode="cover"
            />
            <Text className={`${textWidthClass} text-center font-bold mb-2 flex-wrap text-white`}>
                {name}
            </Text>
        </View>
    );

    if (onPress) {
        return (
            <Pressable onPress={() => onPress(id)}>
                {content}
            </Pressable>
        );
    }

    return content;
};
export default GeneralPoster;