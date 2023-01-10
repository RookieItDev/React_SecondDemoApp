/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Greeting from './screens/Greeting';
import {name as appName} from './app.json';
import CountterState from './screens/CountterState';

// ให้หน้า CountterState เป็น Index
AppRegistry.registerComponent(appName, () => CountterState);
