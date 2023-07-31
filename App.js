import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { Cart } from '../furniture-app/screens/Index';

const Stack = createNativeStackNavigator();

export default function App() {
    const [fontsLoaded] = useFonts({
        regular: require('./assets/fonts/Poppins-Regular.ttf'),
        light: require('./assets/fonts/Poppins-Light.ttf'),
        medium: require('./assets/fonts/Poppins-Medium.ttf'),
        extrabold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
        semibold: require('./assets/fonts/Poppins-SemiBold.ttf'),
        bold: require('./assets/fonts/Poppins-Bold.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="BottomTabNavigation"
                    component={BottomTabNavigation}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Cart"
                    component={Cart}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontFamily: 'medium',
        fontSize: 20,
    },
});
