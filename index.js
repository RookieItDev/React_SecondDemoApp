/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Greeting from './screens/Greeting';
import {name as appName} from './app.json';

// ให้หน้า Greeting เป็น Index
AppRegistry.registerComponent(appName, () => Greeting);
