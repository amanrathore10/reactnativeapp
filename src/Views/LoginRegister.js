import React, { Component } from "react";
import {
  Alert,
  Platform,
  Button,
  Clipboard,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  PermissionsAndroid
} from "react-native";
// import SmsAndroid from "react-native-get-sms-android";
// import NewDatePicker from '../Components/DatePicker';
// const instructions = Platform.select({
//   ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
//   android:
//     "Double tap R on your keyboard to reload,\n" +
//     "Shake or press menu button for dev menu"
// });

// type Props = {};
// export default class App extends Component<Props> {
//   constructor() {
//     super();
//     this.state = {
//       total:0,
//       sendTo: "",
//       sendBody: "",
//       minDate:(Math.round((new Date()).getTime())-30*24*60*60*1000),
//       maxDate:Math.round((new Date()).getTime()),
//       smsList: []
//     };
//   }

//   async componentDidMount() {
//     if (Platform.OS === "android") {
//       try {
//         if (!(await this.checkPermissions())) {
//           await this.requestPermissions();
//         }

//         if (await this.checkPermissions()) {
//           this.listSMS();
//         }
//       } catch (e) {
//         console.error(e);
//       }
//     }
//   }

//   async checkPermissions() {
//     console.log("checking SMS permissions");
//     let hasPermissions = false;
//     try {
//       hasPermissions = await PermissionsAndroid.check(
//         PermissionsAndroid.PERMISSIONS.READ_SMS
//       );
//       if (!hasPermissions) return false;
//       hasPermissions = await PermissionsAndroid.check(
//         PermissionsAndroid.PERMISSIONS.SEND_SMS
//       );
//       if (!hasPermissions) return false;
//     } catch (e) {
//       console.error(e);
//     }
//     return hasPermissions;
//   }

//   async requestPermissions() {
//     let granted = {};
//     try {
//       console.log("requesting SMS permissions");
//       granted = await PermissionsAndroid.requestMultiple(
//         [
//           PermissionsAndroid.PERMISSIONS.READ_SMS,
//           PermissionsAndroid.PERMISSIONS.SEND_SMS
//         ],
//         {
//           title: "Example App SMS Features",
//           message: "Example SMS App needs access to demonstrate SMS features",
//           buttonNeutral: "Ask Me Later",
//           buttonNegative: "Cancel",
//           buttonPositive: "OK"
//         }
//       );
//       console.log(granted);
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log("You can use SMS features");
//       } else {
//         console.log("SMS permission denied");
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   }


//     sendSMS = () => {
//       SmsAndroid.autoSend(
//         this.state.sendTo,
//         this.state.sendBody,
//         err => {
//           Alert.alert("Failed to send SMS. Check console");
//           console.log("SMS SEND ERROR", err);
//         },
//         success => {
//           Alert.alert("SMS sent successfully");
//         }
//       );
//     }

//     renderSendSMS = () => {
//       return (
//         <View style={{alignItems:'center',justifyContent:'center',width:"100%"}}>
//           <Text style={styles.welcome}>Send SMS</Text>
//           <Text>To</Text>
//           {/* <View style={{flex:1,justifyContent:"center",alignItems:'center'}}> */}
//           <TextInput
//             style={{width: '100%', borderRadius: 20, height: 40, borderColor: "gray", borderWidth: 1 }}
//             onChangeText={text => this.setState({ sendTo: text })}
//             value={this.state.sendTo}
//             keyboardType={"numeric"}
//           />
//           {/* </View> */}
//           <Text>Message</Text>
//           <TextInput
//             style={{width: '100%', borderRadius: 20, height: 40, borderColor: "gray", borderWidth: 1 }}
//             onChangeText={text => this.setState({ sendBody: text })} 
//             value={this.state.sendBody}
//           />
//           <Button title="send sms" onPress={() => this.sendSMS()} />
//         </View>
//       )
//     }
//     onConfirm=(object)=>{
//       this.setState(()=>{
//         return{
//           minDate:new Date(object.startDate).getTime(),
//           maxDate:new Date(object.endDate).getTime()
//         }
//       },()=>{
//         this.listSMS();
//       })
//     }
//   listSMS = () => {
//     const {minDate, maxDate} = this.state
//     var filter = {
//       box: "inbox",
//     };
//     if (minDate !== "") {
//       filter.minDate = minDate
//     }
//     if (maxDate !== "") {
//       filter.maxDate = maxDate
//     }

//     SmsAndroid.list(
//       JSON.stringify(filter),
//       fail => {
//         console.log("Failed with this error: " + fail);
//       },
//       (count, smsList) => {
//         console.log(smsList);
//         var arr = JSON.parse(smsList);
//         // arr = arr.filter(element=>element.body.indexOf('spent')!== -1||element.body.indexOf('debited')!== -1||element.body.indexOf('paid')!== -1);
//         var regex = /(\$|£|€|Rs. |Rs.|INR )(\d*\.)?(\d)/mg;
//         arr = arr.filter(element=>(element.body.match(regex) &&(element.body.indexOf('debit')!==-1||element.body.indexOf('spent')!==-1||element.body.indexOf('w/d')!==-1)||element.body.indexOf('used for')!==-1))
//         var total = 0;
//         arr.forEach(element => {
//           var string = element.body.match(regex)[0];
//           firstDigit = string.match(/\d/) // will give you the first digit in the string
//           indexed = string.indexOf(firstDigit)
//          total+= parseInt(string.substr(indexed));
//          console.log(element.body.match(regex)[0],string.substr(indexed),indexed);
//         });
//         this.setState({ smsList: arr,total:total });
//       }
//     );
//   }

//   pasteDateFilter = str => {
//     switch(str) {
//       case 'minDate':
//       case 'maxDate':
//         return async () => {
//           const content = await Clipboard.getString()
//           this.setState({[str]: content})
//         }
//         break;
//       default:
//     }
//   }

//   renderDateFilter = str => {
//     switch(str) {
//       case 'minDate':
//       case 'maxDate':
//         return (
//           <View>
//             <Text>{str} (UNIX timestamp in ms)</Text>
//             <View style={{flexDirection: 'row',width:'100%',}}>
//               <TextInput
//                 style={{ flex: 1,width:'100%', borderRadius: 20, height: 40, borderColor: "gray", borderWidth: 1 }}
//                 onChangeText={text => this.setState({[str]: text })}
//                 value={this.state[str]}
//                 keyboardType={"numeric"}
//               />
//               <Button title='paste' onPress={this.pasteDateFilter(str)}/>
//             </View>
//           </View>
//         )
//         break;
//       default:
//     }
//   }

//   renderFilters = () => {
//     return (
//       <View style={{}}>
//         {this.renderDateFilter('minDate')}
//         {this.renderDateFilter('maxDate')}
//       </View>
//     )
//   }

//   renderShowSMS() {
//     var regex = /(\$|£|€|Rs. |Rs.|INR )(\d*\.)?(\d)/mg;
//     return this.state.smsList.map(sms => {
//       return (
//         <View style={{ flex:1,borderColor: "#bbb", borderWidth: 1 }} key={sms._id}>
//           <Text>From: {sms.address}</Text>
//           <Text style={{height:40,fontSize:16,padding:8}}>Body: {sms.body.match(regex)[0]}</Text>
//           <Text>Id: {sms._id}</Text>
//           <View style={{flexDirection: 'row', alignItems: 'center'}}>
//             <Text>Date timestamp: {sms.date}</Text>
//             <Button title="copy date" onPress={() => Clipboard.setString(sms.date.toString())}/>
//           </View>
//           <Text>Date (readable): {(new Date(sms.date).toString())}</Text>
//         </View>
//       );
//     });
//   }

//   renderLatestMessages = () => {
//     return (
//       <ScrollView style={{width:"100%"}} >
//         <View style={{flexDirection: 'row', alignItems: 'center'}}>
//           <Text style={styles.welcome}>Latest Messages</Text>
//           <Button title='refresh list' onPress={this.listSMS}/>
//         </View>
//         {this.renderFilters()}
//         <Text>Total Amount: {this.state.total}</Text>
//         {this.renderShowSMS()}
//       </ScrollView>
//     )
//   }

//   render() {
//     // The default 'react-native init' output is used if not android platform
//     if (Platform.OS !== "android") {
//       return (
//         <View style={styles.container}>
//           <Text style={styles.welcome}>Welcome to React Native!</Text>
//           <Text style={styles.instructions}>To get started, edit App.js</Text>
//           <Text style={styles.instructions}>{instructions}</Text>
//         </View>
//       );
//     }

//     return (
//       <View style={styles.container}>
//         <NewDatePicker onConfirm={this.onConfirm}/>
//         {this.renderSendSMS()}
//         {this.renderLatestMessages()}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     width:"100%",
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "flex-start",
//     backgroundColor: "#F5FCFF"
//   },
//   welcome: {
//     color: 'black',
//     fontSize: 20,
//     textAlign: "center",
//   },
//   instructions: {
//     textAlign: "center",
//     color: "#333333",
//     marginBottom: 5
//   }
// });
class LoginScreen extends React.Component{
  
    render(){
      return(
        <View style={{flex:1,justifyContent:'center',alignItems:"center"}}>
          <Button title="Login" onPress={()=>{ this.props.navigation.navigate('Loading')}}/>
        </View>
      )
    }
  }
  export default LoginScreen;