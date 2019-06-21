import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.headerBar}>
            <Text style={styles.headerText}> {props.judul} </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    headerBar: {
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 10,
        paddingTop: 10,
        position: "relative",
        height: 80,
        fontWeight: 'bold',
    },
    headerText: {
        fontSize: 18,
        color: "#fff",
        textAlign: "center"
    },

});
export default Header;
