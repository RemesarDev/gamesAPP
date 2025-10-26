import { Image, Text, View } from 'react-native';

interface Props {
    id: number;
    poster: string;
    smallPoster?: boolean;
    className?: string;
    name?: string;
}

const GeneralPoster = ({ poster, name, smallPoster = false, id }: Props) => {
    const imgWidth = smallPoster ? 85 : 150;
    const imgHeight = smallPoster ? 130 : 250;

    return (
        <View className="items-center">
            <Image
                source={{ uri: poster }}
                className="shadow-lg rounded-2xl"
                style={{
                    width: imgWidth,
                    height: imgHeight,
                }}
                resizeMode="cover"
            />
            <Text
                style={{
                    width: imgWidth,
                    textAlign: 'center',
                    fontWeight: '700',
                    marginBottom: 8,
                    flexWrap: 'wrap',
                }}
            >
                {name}
            </Text>
        </View>
    );
};
export default GeneralPoster