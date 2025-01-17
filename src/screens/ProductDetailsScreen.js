import {
  FlatList,
  Image,
  StyleSheet,
  useWindowDimensions,
  View,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addCartItem } from "../store/cartSlice";

const ProductDetailsScreen = () => {
  const { selectedProduct } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();

  const addToChart = () => {
    dispatch(addCartItem(selectedProduct));
  };
  return (
    <View style={styles.productDetailContainer}>
      <ScrollView>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          data={selectedProduct.images}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{
                width,
                aspectRatio: 1,
              }}
            />
          )}
        />

        <View style={{ padding: 20 }}>
          <Text style={styles.title}>{selectedProduct.name}</Text>
          <Text style={styles.price}>${selectedProduct.price}</Text>
          <Text style={styles.description}>{selectedProduct.description}</Text>
        </View>
      </ScrollView>

      <Pressable style={styles.button} onPress={addToChart}>
        <Text style={styles.buttonText}>Add To Chart</Text>
      </Pressable>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  productDetailContainer: {
    paddingBottom: 80,
  },
  title: {
    fontSize: 32,
    fontWeight: 500,
    marginVertical: 10,
  },
  price: {
    fontWeight: 500,
    fontSize: 16,
    letterSpacing: 1,
  },
  description: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: 300,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "black",
    position: "absolute",
    bottom: 40,
    width: "90%",
    alignSelf: "center",
    padding: 16,
    borderRadius: 100,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: 500,
    fontSize: 16,
  },
});
