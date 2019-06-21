import React from 'react';
import { View,Text,StyleSheet, ImageBackground, TouchableHighlight,TextInput,ScrollView,Alert,image } from 'react-native';
import Textarea from 'react-native-textarea';
import axios from 'axios';
import Header from "./Header";


export default class Tambahbuku extends React.Component {
    static navigationOptions = {
    }
     constructor(props) {
         super(props);
         this.state = {
           kode_buku: '',
           judul_buku: '',
           jenis_buku: '',
           penulis: '',
           penerbit: '',
           tahun_terbit: '',
 
       };
     }
     _simpan = () => {
      axios.post('https://putukharisma.000webhostapp.com/sistemperpustakaan/tambahDataBuku.php', {
        kode_buku: this.state.kode_buku,
        judul_buku: this.state.judul_buku,
        jenis_buku: this.state.jenis_buku,
        penulis: this.state.penulis,
        penerbit: this.state.penerbit,
        tahun_terbit: this.state.tahun_terbit,
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

      <Header judul={"DATA BUKU"} />
      
      <ScrollView>
                <View style={styles.box1}>
                <Text style={styles.teksinputteks}>
                      Kode Buku  :
                      </Text>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="kode_buku"
                  onChangeText={kode_buku => this.setState({kode_buku})}
                  />
                </View>
                <View style={styles.box1}>
                <Text style={styles.teksinputteks}>
                      Judul Buku  :
                      </Text>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="judul buku"
                  onChangeText={judul_buku => this.setState({ judul_buku })}
                  />
                </View>
                <View style={styles.box1}>
                <Text style={styles.teksinputteks}>
                      Jenis Buku :
                      </Text>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="jenis buku"
                  onChangeText={jenis_buku => this.setState({ jenis_buku })}
                  />
                </View> 
                <View style={styles.box1}>
                <Text style={styles.teksinputteks}>
                      penulis  :
                      </Text>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="penulis"
                  onChangeText={penulis => this.setState({ penulis })}
                  />
                </View>
                <View style={styles.box1}>
                <Text style={styles.teksinputteks}>
                     Penerbit  :
                      </Text>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="penerbit"
                  onChangeText={penerbit => this.setState({ penerbit })}
                  />
                </View>
                <View style={styles.box1}>
                <Text style={styles.teksinputteks}>
                      Tahun Terbit  :
                      </Text>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="tahun terbit"
                  onChangeText={tahun_terbit => this.setState({ tahun_terbit })}
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
                onPress={() => {this._simpan();
                this.props.navigation.navigate('Listbuku')}}
                accessibilityLabel="Menu"
                style={styles.tombol}>
                <Text style={styles.tekstombol}>Tambah Buku</Text>
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
  body4: {
    flex: 1,
    flexDirection: 'row'
  },
  tekstombol: {
    fontSize:15,
    color:'white'
  }
});