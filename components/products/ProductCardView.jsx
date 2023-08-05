import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import styles from './productCardView.style';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const ProductCardView = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('ProductDetails');
            }}
        >
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1600',
                        }}
                        style={styles.image}
                    />
                </View>

                <View style={styles.details}>
                    <Text style={styles.title} numberOfLines={1}>
                        Product
                    </Text>
                    <Text style={styles.supplier} numberOfLines={1}>
                        Product
                    </Text>
                    <Text style={styles.price}>$1299</Text>
                    <TouchableOpacity style={styles.addBtn}>
                        <Ionicons
                            name="add-circle"
                            size={35}
                            color={COLORS.primary}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
};
export default ProductCardView;
