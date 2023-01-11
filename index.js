/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Greeting from './screens/Greeting';
import {name as appName} from './app.json';
import CountterState from './screens/CountterState';
import CoulmnItems from './screens/CoulmnItems';
import RowsItems from './screens/RowsItems';
import Alertcomponent from './screens/Alertcomponent';



// ให้หน้า CountterState เป็น Index
AppRegistry.registerComponent(appName, () => Alertcomponent);
