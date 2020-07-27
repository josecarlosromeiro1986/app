import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from   './pages/Login';
import Index from './pages/Index'
import User from './pages/User'
import Notas from './pages/Notas'

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Index,
        User,
        Notas
    })
);

export default Routes; 

//pegar as dependencias no google class e e rodar dentro da pastar do projeto
//expo install react-native-gesture-handler react-native-reanimated
// react-native-screens react-native-safe-area-context @react-native-community/masked-view