import AsyncStorage from "@react-native-async-storage/async-storage";

export const checkUserIsAuthenticated = async () => {
    let userIsAuthenticated = false
    try {
        const value = await AsyncStorage.getItem('token');
        if (value !== null) {
            userIsAuthenticated = true
        } else {
            userIsAuthenticated = false
        }
    } catch (error) {
        // Error retrieving data
        console.log(error)
    } finally {
        return userIsAuthenticated
    }
}