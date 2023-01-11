/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import AppOld from './App_old';
import Greeting from './screens/Greeting';
import {name as appName} from './app.json';
import CountterState from './screens/CountterState';
import CoulmnItems from './screens/CoulmnItems';
import RowsItems from './screens/RowsItems';
import Alertcomponent from './screens/Alertcomponent';
import TextInputDemo from './screens/TextInputDemo';
import SwitchDemo from './screens/SwitchDemo';
import ImageDemo from './screens/ImageDemo'


// ให้หน้า CountterState เป็น Index
AppRegistry.registerComponent(appName, () => App);
