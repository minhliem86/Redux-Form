import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";
import { Field, reduxForm } from 'redux-form';
import * as EmailValidator from 'email-validator';

const validate = (values = {}) => {
    const errors = {};
    if(!values.username){
        errors.username = 'Required';
    }else if (!values.email){
        errors.email = 'Required';
    }else if (!EmailValidator.validate(values.email)) {
        errors.email = 'Invalid Email';
    }
    return errors;
}

const renderField = ( {keyboardType, name, label, placeholder, meta: {touched, error, warning}, input:{onChange, ...resInput}} ) => {
    return (
        <View style = {{flexDirection: 'column', height: 60, alignItems: 'flex-start'}}>
            <View style = {styles.field}>
                <Text style={styles.label}>{label}</Text>
                <TextInput
                    style={styles.input}
                    keyboardType = {keyboardType}
                    placeholder ={placeholder}
                    onChangeText = {onChange}
                    {...resInput}
                >

                </TextInput>
            </View>
            {touched && ((error && <Text style={{color: 'red'}}>{error}</Text>) || (warning && <Text style={{color: 'orange'}}>{warning}</Text>) ) }
        </View>
        
    );
}
const ContactFormComponent = props => {
    const {handleSubmit} = props;
    return (
        <View style={styles.wrapperForm}>
            <Text style = {styles.titleForm}>REDUX FORM</Text>
            <Field keyboardType="default" name="username" component={renderField} style={styles.field} label="Username" placeholder = "Username"/>
            <Field keyboardType="email-address" name="email" component={renderField} style={styles.field}  label="Email"  placeholder = "Email"/>
            <TouchableOpacity
                style= {{alignItems: 'center'}}
                onPress = {() => { 
                    handleSubmit('abc') 
                }}
            >
                <Text style= {styles.btnSubmit}>
                    {`Submit`.toUpperCase()}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
const ContactContainer = reduxForm({
    form: 'contact',
    validate
})(ContactFormComponent);

export default ContactContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    field: {
        flexDirection: 'row',
        marginBottom: 15,
        alignItems: 'center'
    },
    label: {
        width:80,
        fontSize: 14,
        color: 'slategray',
        fontWeight: 'bold',
    },
    input: {
        height:30,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: 'gray',
        padding:5,
        flex: 1
    },
    wrapperForm: {
        flex: 1,
        padding: 6,
        backgroundColor: 'lightcyan',
        borderRadius: 4,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    titleForm: {
        fontSize: 16,
        fontWeight:'bold',
        marginBottom: 10,
        color: 'darkslategrey'
    },
    btnSubmit: {
        fontSize:14,
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'cadetblue',
        padding: 6,
        width: 200,
        textAlign: 'center',
        alignItems: 'center',
        borderRadius:3
    }
});