import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    ImageBackground,
    Animated,
    ScrollView
} from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("MovieDetail")}
            >
                <Text>Navigate to MovieDetail</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;