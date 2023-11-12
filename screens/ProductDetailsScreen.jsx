import React, {useCallback, useState} from 'react';
import {
  Button,
  Dimensions,
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const windowWidth = Dimensions.get('window').width;
function ProductDetailsScreen({route}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = img => {
    setSelectedImage(img);
    setModalVisible(true);
  };

  const {product} = route.params;
  //   const images = product.images;

  const renderItem = useCallback(
    ({item, index}) => (
      <TouchableOpacity onPress={() => openImage(item)}>
        <Image source={{uri: item}} style={styles.image} />
      </TouchableOpacity>
    ),
    [],
  );

  const keyExtractor = useCallback(item => item, []); // Ключ

  return (
    <ScrollView>
      <FlatList
        horizontal={true}
        data={product.images}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false} // Скрываем скролл
        pagingEnabled={true}
      />
      <View style={styles.container}>
        <View style={styles.block}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>
            {product.title}
          </Text>
        </View>
        <View
          style={{
            ...styles.block,
            flexDirection: 'row',
            alignContent: 'flex-end',
			justifyContent:'space-between',
            gap: 10,
          }}>
			<View>
				<Text style={styles.price}>
					Цена: {product.price} <Icon name="dollar" color="black" size={16} />
				</Text>		
				<Text style={{fontSize: 12, color: 'gray'}}>
					{product.rating} <Icon name="star" color="gray" size={12} />
				</Text>		
			</View>
          
          <TouchableOpacity>
            <View style={styles.addCartBtn}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                {' '}
                Добавить в корзину{' '}
                <Icon name="shopping-cart" color="white" size={18} />
              </Text>
            </View>
          </TouchableOpacity>
        </View>
		<View style={styles.block}>
			<Text>{product.description}</Text>

		</View>
      </View>

      {/* // нужно вынести в компонент */}
      <Modal
        animationType="fade "
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.centeredView}>
          <Button title="Закрыть" onPress={() => setModalVisible(false)} />
          <Image source={{uri: selectedImage}} style={styles.fullSizeImage} />
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
  },

  block: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
  },

  price: {
    flex: 1,
    flexDirection: 'row',
    gap: 5,
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  addCartBtn: {
    flex: 1,
    backgroundColor: '#ff6900',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },

  image: {
    width: windowWidth,
    height: 300,
  },

  fullSizeImage: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
  },
});

export default ProductDetailsScreen;
