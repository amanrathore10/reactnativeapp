import React, { Component } from "react";
import DatePicker from 'react-native-date-ranges';
import {Button} from "react-native";
//range picker
{/* <DatePicker
    style={ { width: 350, height: 45 } }
    customStyles = { {
        placeholderText:{ fontSize:20 } // placeHolder style
        headerStyle : {  },			// title container style
        headerMarkTitle : { }, // title mark style 
        headerDateTitle: { }, // title Date style
        contentInput: {}, //content text container style
        contentText: {}, //after selected text Style
    } } // optional 
    centerAlign // optional text will align center or not
    allowFontScaling = {false} // optional
    placeholder={'Apr 27, 2018 → Jul 10, 2018'}
    mode={'range'}
/>
 
//single picker
<DatePicker
    style={ { width: 350, height: 45 } }
    customStyles = { {
        placeholderText:{ fontSize:20 }, // placeHolder style
        headerStyle : {  },			// title container style
        headerMarkTitle : { }, // title mark style 
        headerDateTitle: { }, // title Date style
        contentInput: {}, //content text container style
        contentText: {}, //after selected text Style
    } } // optional 
    centerAlign // optional text will align center or not
    allowFontScaling = {false} // optional
    placeholder={'Apr 27, 2018'}
    selectedBgColor="black"
    selectedTextColor="blue"
/>
  */}
 
//customButton usage...
export default class NewDatePicker extends React.Component{
    onConfirm = (dateRange)=>{
        this.props.onConfirm(dateRange);
        console.log(dateRange);
    }
    customButton = (onConfirm) => (
        <Button
            onPress={this.props.onConfirm}
            style={{ container:{ width:'80%', marginHorizontal:'3%' }, text:{ fontSize: 20 } }}
            primary
            title={'Save'}
        />
    )
 
  render(){
    const {
      ...rest 
    } = this.props;
    return(
        <React.Fragment>
      <DatePicker
        onConfirm={this.onConfirm}
        ref = {(ref)=> this.picker = ref}
        {...rest}
        customButton = {this.customButton}
      />
       <DatePicker
            style={ { width: "100%", height: 45,color:"lightgreen" } }
            onConfirm={this.onConfirm}
            customStyles = { {
                placeholderText:{ fontSize:20 }, // placeHolder style
                headerStyle : {  },			// title container style
                headerMarkTitle : { }, // title mark style 
                headerDateTitle: { }, // title Date style
                contentInput: {}, //content text container style
                contentText: {}, //after selected text Style
            } } // optional 
            centerAlign // optional text will align center or not
            allowFontScaling = {false} // optional
            placeholder={'Select Date'}
            mode={'range'}
            customButton={this.customButton}
            markText={'Select Date Range'}
        />
      </React.Fragment>
    )
  }
} 