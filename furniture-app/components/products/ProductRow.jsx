import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import useFetch from '../../hook/useFetch';
import ProductCardView from './ProductCardView';
import styles from './productRow.style';
import { ActivityIndicator } from 'react-native';

const ProductRow = () => {
    const { data, isLoading, error } = useFetch();
    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator
                    size={SIZES.xxLarge}
                    color={COLORS.primary}
                />
            ) : error ? (
                <Text>Something went wrong</Text>
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => <ProductCardView item={item} />}
                    horizontal
                    contentContainerStyle={{ columnGap: SIZES.medium }}
                />
            )}
        </View>
    );
};
export default ProductRow;
