import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import Header from './Header';

export default class Listpeminjaman extends Component {
  constructor(props) {
    super(props)
    prefik_url = 'https://putukharisma.000webhostapp.com/sistemperpustakaan/kategoriDataPeminjaman.php';
    this.state = {
      data_peminjaman: []
    };
  }
  componentDidMount() {
    axios.get(`https://putukharisma.000webhostapp.com/sistemperpustakaan/kategoriDataPeminjaman.php`)
      .then(res => {
        const data_peminjaman = res.data;
        console.log(data_peminjaman);
        this.setState({ data_peminjaman });
      })
  }

  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item }) => (
    <ListItem
      title={item.nama_anggota}
      left={{ source: { uri: prefik_url = 'https://putukharisma.000webhostapp.com/sistemperpustakaan/kategoriDataPeminjaman.php'} }}
      onPress={
        () => {
          this.props.navigation.navigate('Menupinjam', { id: item.kode_peminjaman, title: item.nama_anggota })
        }
      }
    />
  )
  render() {
    return (
      <View style={styles.container} >
        <Header judul={"DATA PEMINJAMAN"} />
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.data_peminjaman}
          renderItem={this.renderItem}
        />

        {/* Rest of the app comes ABOVE the action button component !*/}
        <ActionButton buttonColor="rgba(95, 158, 160,1)">
          <ActionButton.Item buttonColor='#5471e5' title="Tambah Peminjaman" onPress={() => this.props.navigation.navigate('Tambahpeminjaman')}>
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
