import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { SIZES } from '../../constants';
import ProductCardView from './ProductCardView';
import styles from './productRow.style';

const ProductRow = () => {
    const Products = [1, 2, 3, 4];
    return (
        <View style={styles.container}>
            <FlatList
                data={Products}
                renderItem={({ item }) => <ProductCardView />}
                horizontal
                contentContainerStyle={{ columnGap: SIZES.medium }}
            />
        </View>
    );
};
export default ProductRow;