// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';

// const getToken = async() => {
//     const token = await AsyncStorage.getItem('token');
//     return token
// }
// axios.defaults.baseURL = 'https://api.demo.reja.ai/'
// axios.defaults.headers.common = {'Authorization': `Bearer ${getToken()}`}

// export default axios;



import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const getToken = async() => {
    const token = await AsyncStorage.getItem('token');
    return token
}

const instance = axios.create({
    baseURL: 'https://api.demo.reja.ai/',
    headers: {'Authorization': `Bearer ${getToken()}`}
  });

export default instance;