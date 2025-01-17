import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CartListItem from "../components/CartListItem";
import { useSelector } from "react-redux";
import { selectDeliveryPrice, selectSubTotal } from "../store/cartSlice";

const ShoppingCartTotals = () => {
  const subTotal = useSelector(selectSubTotal);
  const deliveryPrice = useSelector(selectDeliveryPrice);
  return (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>{subTotal} US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>{deliveryPrice} US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>{subTotal + deliveryPrice} US$</Text>
      </View>
    </View>
  );
};

const ShoppingCart = () => {
  const { items } = useSelector((state) => state.cart);
  const addToChart = () => {};
  console.log(items);

  return (
    <>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />
      <Pressable style={styles.button} onPress={addToChart}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  totalsContainer: {
    paddingTop: 20,
    paddingBottom: 80,
    margin: 20,
    borderColor: "gainsboro",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,
    fontWeight: 500,
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
