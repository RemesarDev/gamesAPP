import { Image, Pressable, Text, View } from 'react-native';

interface Props {
    id: number;
    poster: string;
    smallPoster?: boolean;
    className?: string;
    name?: string;
    desktopAspect?: boolean;
    // Optional onPress handler that receives the id of the item
    onPress?: (id: number, url: string) => void;
}

const GeneralPoster = ({ poster, name, smallPoster = false, desktopAspect = false, id, onPress, className }: Props) => {
    let imgWidth = smallPoster ? 85 : 150;
    let imgHeight = smallPoster ? 130 : 250;

    // If desktopAspect is requested, force a 16:9 aspect ratio.
    if (desktopAspect) {
        // Choose a wider width for desktop-like posters; keep smallPoster smaller.
        imgWidth = smallPoster ? 160 : 320;
        imgHeight = Math.round((imgWidth * 9) / 16);
    }
    const textWidthClass = smallPoster ? 'w-[85px]' : 'w-[150px]';
    const content = (
        <View className={`items-center ${className ?? ''}`}>
            <Image
                source={{ uri: poster }}
                className="shadow-lg rounded-t-lg border border-white"
                style={{
                    width: imgWidth,
                    height: imgHeight,
                    margin: 1,
                }}
                resizeMode="cover"
            />
            <Text className={`${textWidthClass} text-center font-bold mb-2 flex-wrap text-white p-6 bg-black/50 rounded-b-lg border-b border-l border-white`}>
                {name}
            </Text>
        </View>
    );

    if (onPress) {
        return (
            <Pressable onPress={() => onPress(id, poster)}>
                {content}
            </Pressable>
        );
    }

    return content;
};
export default GeneralPoster;