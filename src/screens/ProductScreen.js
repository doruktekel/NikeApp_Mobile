import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { setSelectedProducts } from "../store/productsSlice";

const ProductScreen = () => {
  const navigation = useNavigation();

  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={products}
      numColumns={2}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            dispatch(setSelectedProducts(item.id));
            navigation.navigate("ProductDetailsScreen");
          }}
          style={styles.itemContainer}
        >
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.image}
          />
        </Pressable>
      )}
    />
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
});
