import { TouchableOpacity, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Fontisto } from '@expo/vector-icons';
import styles from './styles/home.style';
import { Welcome } from '../components/index';

export default function Home() {
    return (
        <SafeAreaView>
            <View style={styles.appBarWrapper}>
                <View style={styles.appBar}>
                    <Ionicons name="location-outline" size={24} />
                    <Text style={styles.location}> Alexandria, EG</Text>

                    <View style={{ alignItems: 'flex-end' }}>
                        <View style={styles.cartCount}>
                            <Text style={styles.cartNumber}>8</Text>
                        </View>
                        <TouchableOpacity>
                            <Fontisto name="shopping-bag" size={24} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView>
                <Welcome />
            </ScrollView>
        </SafeAreaView>
    );
}
