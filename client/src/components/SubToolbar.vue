<template>
  <v-tabs
    cantered
    show-arrows
  >
    <v-tabs-slider color="blue"></v-tabs-slider>

    <v-tab
      v-for="i in 3"
      :href="'#tab-' + i"
      :key="i"
    >
      دسته بندی {{ i }}
    </v-tab>

    <v-tabs-items>
      <v-tab-item
        v-for="i in 15"
        :id="'tab-' + i"
        :key="i"
      >
        <!-- <v-card flat>
          <v-card-text>{{ text }}</v-card-text>
        </v-card> -->
      </v-tab-item>
    </v-tabs-items>
  </v-tabs>
</template>


<script>
  export default {
      name: "SubToolbar"
  }
</script>