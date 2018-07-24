<template>
  <v-app id="inspire">

    <Drawer v-bind:drawer="openDrawer"></Drawer>
    <guest-header @toggleDrawer="openDrawer = !openDrawer" v-if="isAuthenticated"> </guest-header>
    <user-header @toggleDrawer="openDrawer = !openDrawer" v-else></user-header>
    
    
    <v-content>
            <carousel></carousel>
    </v-content>
    
    <v-content>
        <v-subheader
              inset
            >
              test
        </v-subheader>

        <v-divider
            inset
        ></v-divider>

        <v-container fluid grid-list-md> 
            <v-layout row wrap>
                <v-flex md4 justify-space-around v-for="i in 9">
                    <auction-cart> </auction-cart>
                </v-flex>
            </v-layout>
        </v-container>
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
  export default {
    components: {
        AuctionCart,
        Carousel,
        Drawer,
        Footer,
        UserHeader,
        GuestHeader
    },
    data: () => ({
      openDrawer: null,
    }),
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