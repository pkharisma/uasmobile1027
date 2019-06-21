import React, { Component } from "react";
import {View,Text,StyleSheet, ImageBackground, TouchableHighlight,TextInput,ScrollView,Alert,image} from "react-native";
import Textarea from 'react-native-textarea';
import axios from 'axios';
import Header from "./Header";

export default class Tambahanggota extends React.Component {
  static navigationOptions = {
   }
    constructor(props) {
        super(props);
        this.state = {
          kodeanggota: '',
          nama: '',
          nim: '',
          fakultas: '',
          prodi: '',
          alamat: '',

      };
    }

    _edit = () => {
      axios.post('https://putukharisma.000webhostapp.com/sistemperpustakaan/tambahAnggota.php?kode_anggota=', {
        kode_anggota: this.state.kode_anggota,
        nama: this.state.nama,
        nim: this.state.nim,
        fakultas: this.state.fakultas,
        prodi: this.state.prodi,
        alamat: this.state.alamat,
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  
  
  render() {
      return (
        <ImageBackground resizeMode='cover'source={require("./foto/708613.jpg")} style={{width:'100%', height:'100%'}}>
        <View style={styles.containerMain}>

      <Header judul={"DAFTAR ANGGOTA PERPUSTAKAAN"} />
        <ScrollView>
                <View style={styles.box1}>
                <Text style={styles.teksinputteks}>
                      ID Anggota  :
                      </Text>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder={item.id_anggota}
                  onChangeText={kode_anggota => this.setState({kode_anggota})}
                  />
                </View>
                <View style={styles.box1}>
                <Text style={styles.teksinputteks}>
                      Nama  :
                      </Text>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder={item.nama}
                  onChangeText={nama => this.setState({ nama })}
                  />
                </View>
                <View style={styles.box1}>
                <Text style={styles.teksinputteks}>
                      NIM  :
                      </Text>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder={item.nim}
                  onChangeText={nim => this.setState({ nim })}
                  />
                </View> 
                <View style={styles.box1}>
                <Text style={styles.teksinputteks}>
                      Fakultas  :
                      </Text>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder={item.fakultas}
                  onChangeText={fakultas => this.setState({ fakultas })}
                  />
                </View>
                <View style={styles.box1}>
                <Text style={styles.teksinputteks}>
                      Prodi  :
                      </Text>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder={item.prodi}
                  onChangeText={prodi => this.setState({ prodi })}
                  />
                </View>
                <View style={styles.box1}>
                <Text style={styles.teksinputteks}>
                      Alamat  :
                      </Text>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder={item.alamat}
                  onChangeText={alamat => this.setState({ alamat })}
                  />
                </View>
                
                <View style={styles.body4}>
            <View style={styles.box1}>
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate('Menu')}
                accessibilityLabel="Menu"
                style={styles.tombol}>
                <Text style={styles.tekstombol}>Kembali</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.box1}>
              <TouchableHighlight
                onPress={() => {this._edit();
                this.props.navigation.navigate('Listanggota')}}
                accessibilityLabel="Menu"
                style={styles.tombol}>
                <Text style={styles.tekstombol}>Daftar Anggota</Text>
              </TouchableHighlight>
            </View>
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
    },
    backgroundImage:{
      flex:1,
      justifyContent: "center"
    },
    vHeader: {
      flex: 10,
      backgroundColor: '#00ffff',
      alignItems: 'center',
      justifyContent: 'center',
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
      marginVertical: 20 , 
      margin:20,
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
    box2: {
      flex: 0.8,
      margin:10,
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    txtTeks: {
      color: 'black',
      marginLeft:60,
      fontSize: 15,
      marginBottom:10,
    },
    body4: {
      flex: 1,
      flexDirection: 'row'
    },
    box1:{
      flex:1,
      margin: 3,
    },
    tombol: {
      alignItems: 'center',
      backgroundColor: 'orange',
      padding: 15,
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
  }
});