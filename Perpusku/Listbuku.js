import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import Header from './Header';

export default class Listbuku extends Component {
  constructor(props) {
    super(props)
    prefik_url = 'https://putukharisma.000webhostapp.com/sistemperpustakaan/katagoriDataBuku.php';
    this.state = {
      data_buku: []
    };
  }
  componentDidMount() {
    axios.get(`https://putukharisma.000webhostapp.com/sistemperpustakaan/katagoriDataBuku.php`)
      .then(res => {
        const data_buku = res.data;
        console.log(data_buku);
        this.setState({ data_buku });
      })
  }

  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item }) => (
    <ListItem
      title={item.judul_buku}
      left={{ source: { uri: prefik_url = `https://putukharisma.000webhostapp.com/sistemperpustakaan/katagoriDataBuku.php`} }}
      onPress={
        () => {
          this.props.navigation.navigate('Menubuku', { id: item.kode_buku, title: item.judul_buku })
        }
      }
    />
  )
  render() {
    return (
      <View style={styles.container} >
        <Header judul={"DATA BUKU"} />
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.data_buku}
          renderItem={this.renderItem}
        />

        {/* Rest of the app comes ABOVE the action button component !*/}
        <ActionButton buttonColor="rgba(95, 158, 160,1)">
          <ActionButton.Item buttonColor='#5471e5' title="Tambah Buku" onPress={() => this.props.navigation.navigate('Tambahbuku')}>
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
