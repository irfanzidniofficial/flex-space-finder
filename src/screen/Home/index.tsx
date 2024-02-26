import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StackParamList} from '../../../App';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  Colors,
  GlobalStyle,
  IcGift,
  IcLocation,
  IcNotification,
  ItemFirstA,
  ItemFirstB,
  ItemFirstC,
  ItemSecondA,
  ItemSecondB,
  ProfileFirst,
} from '../../../assets';
import {BottomNav, InputText, NewsWorthyItem} from '../../components';

function Home(): React.JSX.Element {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  const newsworthyData = [
    {
      title: 'Collabox',
      address: 'Jl. Indraprasta No.10',
      price: '$421/day',
      image: ItemSecondA,
    },
    {
      title: 'Hetero Space',
      address: 'Jl. Setia Budi No.192',
      price: '$500/day',
      image: ItemSecondB,
    },
  ];

  const handlePress = () => {
    navigation.navigate('Details');
  };
  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={GlobalStyle.flexRow}>
          <Image source={ProfileFirst} style={styles.profileContainer} />
          <View>
            <Text style={GlobalStyle.textBlack}>Hi, Irfan</Text>
            <Text style={[GlobalStyle.textBlack, GlobalStyle.font700]}>
              @irfanzidni
            </Text>
          </View>
        </View>
        <View style={GlobalStyle.flexRow}>
          <Image source={IcGift} style={styles.icContainer} />
          <Image source={IcNotification} />
        </View>
      </View>
    );
  };

  const renderSearch = () => {
    return (
      <View style={styles.sectionContainer}>
        <InputText
          icon={IcLocation}
          placeholder="Find work space in Semarang"
        />
      </View>
    );
  };

  const renderPopularSection = () => {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Popular</Text>
        <View style={GlobalStyle.flexRow}>
          <Image source={ItemFirstA} style={styles.popularMainImage} />
          <View>
            <Image source={ItemFirstB} style={styles.popularImage} />
            <Image source={ItemFirstC} style={styles.popularImage} />
          </View>
        </View>
        <View style={styles.popularContent}>
          <View>
            <Text style={[GlobalStyle.h2, GlobalStyle.textBlack]}>
              Collabox Space
            </Text>
            <Text style={GlobalStyle.textBlack}>
              Jalan Pamularsih No. 10 Semarang
            </Text>
          </View>
          <View style={styles.popularPriceContainer}>
            <Text style={styles.popularPriceLabel}>$421/day</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderNewsWorthy = () => {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Newsworthy</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.title}
          data={newsworthyData}
          renderItem={({item}) => (
            <NewsWorthyItem
              image={item.image}
              title={item.title}
              address={item.address}
              price={item.price}
              onPress={handlePress}
            />
          )}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {renderHeader()}
        {renderSearch()}

        <ScrollView style={styles.scrollContainer}>
          {renderPopularSection()}
          {renderNewsWorthy()}
        </ScrollView>
      </View>
      <BottomNav />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.greyLight,
    flex: 1,
  },
  headerContainer: {
    ...GlobalStyle.flexRow,
    ...GlobalStyle.itemsCenter,
    ...GlobalStyle.justifyBetween,
    padding: 24,
  },
  profileContainer: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  icContainer: {width: 24, height: 24, marginLeft: 10},
  sectionContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  popularMainImage: {
    ...GlobalStyle.cornerLG,
    flex: 1,
    width: 200,
    height: 200,
    marginRight: 10,
  },
  popularImage: {
    ...GlobalStyle.cornerMD,
    width: 130,
    height: 95,
    marginBottom: 10,
  },
  sectionTitle: {
    ...GlobalStyle.textBlack,
    ...GlobalStyle.h1,
    marginBottom: 12,
  },
  popularContent: {...GlobalStyle.flexRow, ...GlobalStyle.justifyBetween},
  popularPriceContainer: {
    ...GlobalStyle.justifyCenter,
    ...GlobalStyle.itemsCenter,
    ...GlobalStyle.cornerXS,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: Colors.secondary,
  },
  popularPriceLabel: {
    ...GlobalStyle.font600,
    ...GlobalStyle.textPrimary,
  },
  scrollContainer: {
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
});
