import React,{Component} from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
//import Toppapa from './toppapa';
import DynamicFieldSet from './form2'
// import Amplify from 'aws-amplify'      // ADD
// import config from './aws-exports'     // ADD
// Amplify.configure(config)  

//import postSend from './sendd'
class App extends Component {
	render() {
		return (
      	<>
			{/* <Toppapa/>  */}
        	<DynamicFieldSet />
			
      	</>
		)
	}
}
export default App;