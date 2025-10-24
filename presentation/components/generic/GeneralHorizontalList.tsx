import { FlatList, Text, View } from 'react-native';
import GeneralPoster from './GeneralPoster';

interface Props {
  title?: string;
  members: any[];
  className?: string;
}

const GeneralHorizontalList = ({ title, members, className }: Props) => {
  return (
    <View className={`${className}`}>
      {title && 
        <Text className='text-3xl font-bold px-4 m-10 text-center color-black'> {title}</Text>
      }
      <FlatList
        horizontal= {true}
        data={members}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <GeneralPoster name={item.name} id={item.id} poster={item.poster} smallPoster={false} />
        )}
      />
    </View>
  );
};

export default GeneralHorizontalList;