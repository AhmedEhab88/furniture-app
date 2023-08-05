import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles/productDetails.style';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants';

const ProductDetails = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.upperRow}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <Ionicons name="chevron-back-circle" size={30} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {}}>
                    <Ionicons name="heart" size={30} color={COLORS.red} />
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default ProductDetails;
