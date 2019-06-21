import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './Login';
import Menu from './Menu';
import Listanggota from './Listanggota';
import Tambahpeminjaman from './Tambahpeminjaman';
import Tambahbuku from './Tambahbuku';
import Tambahanggota from './Tambahanggota';
import Listbuku from './Listbuku';
import Listpeminjaman from './Listpeminjaman';
import Editanggota from './Editanggota';
import Editbuku from './Editbuku';
import Editpeminjaman from './Editpeminjaman';
import Menuanggota from './Menuanggota';
import Menubuku from './Menubuku';
import Menupinjam from './Menupinjam';


const AppNavigator = createStackNavigator(
        {
            Utama: MainScreen,
            Menu: Menu,
            Listanggota:Listanggota,
            Tambahpeminjaman:Tambahpeminjaman,
            Tambahbuku:Tambahbuku,
            Tambahanggota:Tambahanggota,
            Listbuku:Listbuku,
            Listpeminjaman:Listpeminjaman,
            Editanggota: Editanggota,
            Editbuku:Editbuku,
            Editpeminjaman:Editpeminjaman,
            Menuanggota:Menuanggota,
            Menubuku:Menubuku,
            Menupinjam:Menupinjam,

        {
            headerMode: 'none',
            navigationOptions: {
              headerVisible: false,
            },
        },
        {
            initialRouteName: "Utama"
        }
        );
export default createAppContainer(AppNavigator);
