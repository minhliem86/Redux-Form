import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";
import { Field, reduxForm } from 'redux-form';

const renderField = ( {keyboardType, name, label, placeholder} ) => {
    return (
        <View style = {styles.field}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                keyboardType = {keyboardType}
                placeholder ={placeholder}
            >

            </TextInput>
        </View>
    );
}
const ContactFormComponent = props => {
    console.log(props);
    return (
        <View style={styles.wrapperForm}>
            <Text style = {styles.titleForm}>REDUX FORM</Text>
            <Field keyboardType="default" name="username" component={renderField} style={styles.field} label="Username" placeholder = "Username"/>
            <Field keyboardType="email-address" name="email" component={renderField} style={styles.field}  label="Email"  placeholder = "Email"/>
            <TouchableOpacity
                style= {{alignItems: 'center'}}
                onPress = {() => {}}
            >
                <Text style= {styles.btnSubmit}>
                    {`Submit`.toUpperCase()}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
const ContactContainer = reduxForm({
    form: 'contact'
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