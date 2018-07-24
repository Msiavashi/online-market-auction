<template>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="blue darken-3"
      dark
      app
      fixed
      clipped-right
    >
      <v-toolbar-side-icon v-if="hamberger" @click.stop="$emit('toggle-drawer')"></v-toolbar-side-icon>
      <v-toolbar-title style="width: 300px" class="mr-0 pr-3">
        <span class="hidden-sm-and-down">بیست بید</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="search"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <router-link :to="{name: 'Signup'}">
        <v-btn flat>
          ثبت نام
        </v-btn>
      </router-link>
      <v-btn @click.stop="$emit('toggle-login-modal')" flat>ورود</v-btn>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon large>
        <v-avatar size="32px" tile>
          <img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
          >
        </v-avatar>
      </v-btn>

    </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  }),
  props: {
    hamberger:{
      type: Boolean,
      required: false,
      default: true
    }
  }
}
</script>
