import React, { Component } from 'react';
import { StyleSheet,ImageBackground, Text, View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import Header from './Header';

export default class Hapusanggota extends Component {
  constructor(props) {
    super(props)
    prefik_url = 'https://putukharisma.000webhostapp.com/sistemperpustakaan/kategoriDataAnggota.php';
    this.state = {
      data_anggota: []
    };
  }
  componentDidMount() {
    axios.get(`https://putukharisma.000webhostapp.com/sistemperpustakaan/kategoriDataAnggota.php`)
      .then(res => {
        const data_anggota = res.data;
        console.log(data_anggota);
        this.setState({ data_anggota });
      })
  }

  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item }) => (
    <ListItem
      title={item.nama}
      left={{ source: { uri: prefik_url= `https://putukharisma.000webhostapp.com/sistemperpustakaan/kategoriDataAnggota.php`} }}
      onPress={
        () => {
          this.props.navigation.navigate('Menuanggota', { id: item.kode_anggota, title: item.nama,title: item.nim,title: item.fakultas,title: item.prodi,title: item.alamat})
        }
      }
    />
  )
  render() {
    return (
      <View style={styles.container} >
        <Header judul={"KATEGORI ANGGOTA"} />
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.data_anggota}
          renderItem={this.renderItem}
        />

        {/* Rest of the app comes ABOVE the action button component !*/}
        <ActionButton buttonColor="rgba(95, 158, 160,1)">
          <ActionButton.Item buttonColor='#5471e5' title="Daftar Anggota Perpustakaan" onPress={() => this.props.navigation.navigate('Tambahanggota')}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F8FF',
    flex: 1,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
