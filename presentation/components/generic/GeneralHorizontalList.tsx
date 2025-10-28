import { FlatList, Text, View } from 'react-native';
import GeneralPoster from './GeneralPoster';

interface Props {
  title?: string;
  // Optional familyQuery (react-query result) so the list can display the real family name
  familyQuery?: any;
  members: any[];
  className?: string;
  // Optional callback when an item is pressed. Receives the item id.
  onItemPress?: (id: number) => void;
}

const GeneralHorizontalList = ({ title, familyQuery, members, className, onItemPress }: Props) => {
  let resolvedTitle = title;

  if (!resolvedTitle && familyQuery?.data?.name) {
    resolvedTitle = `${familyQuery.data.name}`;
  }

  return (
    <View className={`${className}`}>
      {resolvedTitle && (
        <Text className="text-3xl font-bold px-4 m-10 text-center color-blue-950 p-6 - bg-red-500/30 rounded-xl border border-pink-800">{resolvedTitle}</Text>
      )}
      <FlatList
        horizontal={true}
        data={members}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <GeneralPoster
            name={item.name}
            id={item.id}
            poster={item.poster}
            smallPoster={false}
            onPress={onItemPress}
            className='p-1'
          />
        )}
      />
    </View>
  );
};

export default GeneralHorizontalList;