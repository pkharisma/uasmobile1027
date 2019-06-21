import React from 'react';
import { StyleSheet,ScrollView, item, ImageBackground, Text, View, TextInput, TouchableHighlight, Image,Alert, Button } from 'react-native';
import Header from "./Header";


export default class Main extends React.Component {
  static navigationOptions = {
  }
   constructor(props) {
       super(props);
       this.state = {
         id_admin: '',
         password: '',
     };
   }
   Login= () =>{
    if(this.state.id_admin == 'Ima' && this.state.password == '1010'){
      this.props.navigation.navigate('Menu');
    }else{
      Alert.alert('Username Or Password Incoret Please Input Again!!!');
  }
}
  render() {
    return (
      <ImageBackground resizeMode='cover'source={require("./foto/708613.jpg")} style={{width:'100%', height:'100%'}}>
      <View style={styles.containerMain}>

      <Header judul={"SISTEM PEMINJAMAN BUKU PERPUSTAKAAN"} />

      <Image source = {{uri: 'https://3.bp.blogspot.com/-tpzl4ezgpZg/VvorfXGcRCI/AAAAAAAAAFQ/7b2Cqw8nfDYYFiA_AShxW_WwBojLyDi_Q/s1600/Books.png'}} style = {{marginLeft:75,width: 200, height: 200}} />

      <ScrollView>
                <View style={styles.masuk}>
                    <Text style={styles.text3}>ID Admin :  </Text>
                    <TextInput style = {{backgroundColor:'white',flex: 1, marginVertical: 20 , margin:20,padding: 10, height: 40, borderColor: 'black', borderWidth: 1, width: '70%', borderRadius: 5 }}
                    placeholder="Masukkan ID Admin"
                    onChangeText={
                        (id_admin)=>this.setState({id_admin})
                    }
                    keyboardType = 'text'
                    />
                </View>

                <View style={styles.masuk}>
                <Text style={styles.text3}>Password :</Text>
                <TextInput style = {{backgroundColor:'white',flex: 1, marginVertical: 20 , margin:20,padding: 10, height: 40, borderColor: 'black', borderWidth: 1, width: '70%', borderRadius: 5 }}
                    placeholder="Masukkan Password"
                    secureTextEntry={true}
                    onChangeText={
                        (password)=>this.setState({password})
                    }
                    keyboardType = 'numeric'
                    />
                </View>
                <View style={styles.box2}>
                  <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.vButton}
                            onPress={() => this.Login()}>
                  <Text style={styles.txtButton}>LOGIN</Text>
                  </TouchableHighlight>
          </View>
        </ScrollView>
        </View>
        </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    flexDirection: 'column'
  },
  backgroundImage:{
    flex:1,
    justifyContent: "center"
  },

  box1: {
    width: "120%",
    marginTop: 10,
    flex: 0.6,
    backgroundColor: '#F0F8FF',
    flexDirection: 'column',
    justifyContent : 'center',
  },
  teksinputteks:{
    flex : 1,
    flexDirection: 'row',
    marginHorizontal: '5%',
    marginBottom: 10,
    
},
  txtBox1: {
    backgroundColor:'white',
    flex: 1, 
    marginVertical: 10 , 
    margin:10,
    padding: 10, 
    height: 40, 
    borderColor: 'black', 
    borderWidth: 1, 
    width: '70%', 
    borderRadius: 5 
  },
  textBox1:{
    color: 'white',
    fontSize: 15,
  },

  box1: {
    flex: 1,
    backgroundColor: '#ffffff',
    width: "90%",
    paddingTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    //justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center"

  },
  buttonText: {
        textAlign: "center",
        height: 40,
        width: "100%",
        marginTop: 10,
        color: "#FFFFFF",
        fontSize: 16
    },
  txtInput: {
        height: 30,
        backgroundColor:'#fff',
        borderColor: 'gray',
        borderWidth: 1,
    },


  button2Style: {
    flex: 0.5,
      paddingLeft: 20,
      paddingRight: 20,
      justifyContent: 'center',
      backgroundColor: "orange",
      marginTop: 20,
      marginBottom: 20,
      height: 60,
      width: 300,
      borderRadius: 50,
      flexDirection: "row",

  },

  slider:{
    flex: 0.6,
    backgroundColor: '#F0F8FF',
    flexDirection: 'column',
    justifyContent : 'center',
  },

  masuk:{
    flex : 0.5,
    flexDirection: 'row',
    marginHorizontal: '5%',
    marginBottom: 10,
  },

  text3: {
    fontSize: 15,
    color: 'black',
    margin:15,
  },
  body4: {
    flex: 2,
    flexDirection: 'row'
  },
  box1:{
    flex:2,
    margin: 25,
  },
  tombol: {
    alignItems: 'center',
    backgroundColor: 'orange',
    padding:15,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
},
iteminput: {
  flex:2,
  margin:10,
  marginRight: 8,
},
labelinput: {
  flex:2,
  fontSize: 15,
  height: 25,
  marginLeft: 10,
  marginTop:5,
  color: 'white',
},
tekstombol: {
  fontSize:15,
  color:'white'
},


box2: {
  flex: 0.8,
  margin:10,
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center'
},
txtButton: {
  textAlign: 'center',
  marginTop: 10,
  color: 'white',
  fontSize: 20,
  width: '100%',
  height: 40,
},
vButton: {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#ff9933',
  borderRadius: 5,
  padding:20,
  margin:20,
  width: '50%',
  height: 50,
},
txtTeks: {
  color: 'black',
  marginLeft:60,
  fontSize: 15,
  marginBottom:15,
}

});


