<template>
  <v-app id="inspire">

    <guest-header :hamberger="false" v-if="isAuthenticated"> </guest-header>
    <user-header :hamberger="false" v-else></user-header>
    
    <v-content class="mt-4">

        <signup-form></signup-form>

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
import SignupForm from '@/components/SignupForm'
import SignupRules from '@/components/SignupRules'

  export default {
    components: {
        SignupForm,
        SignupRules,
        Drawer,
        Footer,
        UserHeader,
        GuestHeader,
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