import {StackNavigator} from 'react-navigation';
import FormView from './../component/FormView';
import ListView from './../component/ListView';
import Main from './../component/Main';
import Cp from './../component/Cp';


export const Stack = StackNavigator({
   Main:{
       screen:Main,
       navigationOptions:{
         header:null
       }
  },
  FormView:{
       screen:FormView
  },
  ListView:{
       screen:ListView
  },
  Cp:{
       screen:Cp
  }

})


