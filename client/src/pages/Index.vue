<template>
  <v-app id="inspire">
    <login ref="login"></login>
    <drawer ref="drawer"></drawer>
    <guest-header @toggle-login-modal="$refs.login.show = !$refs.login.show" @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer" v-if="isAuthenticated"> </guest-header>
    <!-- <user-header @toggleDrawer="openDrawer = !openDrawer" v-else></user-header> -->
    
    
    <v-content>
            <carousel></carousel>
    </v-content>
    
    <v-content>
        <v-subheader
              inset
            >
              حراجی ها
        </v-subheader>

        <v-divider
            inset
        ></v-divider>

        <v-container fluid grid-list-md> 
            <v-layout row wrap>
                <v-flex md4 justify-space-around v-for="i in 5">
                    <auction-cart> </auction-cart>
                </v-flex>
            </v-layout>
        </v-container>

        <paginate></paginate>

    </v-content>


    <v-content>
            <Footer></Footer>
    </v-content>
  </v-app>
</template>

<script>
import GuestHeader from '@/components/GuestHeader'
import UserHeader from '@/components/UserHeader'
import Drawer from '@/components/Drawer'
import Footer from '@/components/Footer'
import Carousel from '@/components/Carousel'
import AuctionCart from '@/components/AuctionCart'
import Paginate from '@/components/Paginate'
import Login from '@/components/Login'
  export default {
    components: {
        Login,
        AuctionCart,
        Carousel,
        Drawer,
        Footer,
        UserHeader,
        GuestHeader,
        Paginate
    },
    data: function(){
        return {
            openDrawer: null,
        }
    },
    props: {
      source: String
    },
    computed: {
        isAuthenticated: function(){
            return true;
        }
    },

  }
</script>