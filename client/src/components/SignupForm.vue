<template>
  <v-form>
    <v-container elevation-10>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <v-text-field
            label="نام"
            append-icon="person"
          ></v-text-field>
          <v-text-field
            label="نام خانوادگی"
            append-icon="person"
          ></v-text-field>
          <v-text-field
            label="پست الکترونیکی"
            append-icon="email"
          ></v-text-field>
          <v-text-field
            label="نام کاربری"
            append-icon="person"
          ></v-text-field>
          <v-text-field
            label="رمز عبور"
            append-icon="person"
          ></v-text-field>
          <v-text-field
            label="تکرار رمز عبور"
            append-icon="repeat"
          ></v-text-field>
        <v-subheader>جنسیت</v-subheader>
            <v-radio-group v-model="gender" :mandatory="true">
            <v-radio label="زن" value="female"></v-radio>
            <v-radio label="مرد" value="male"></v-radio>
            </v-radio-group>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field
            label="کد ملی"
            append-icon="perm_identity"
          ></v-text-field>
          <v-text-field
            label="تلفن همراه"
            append-icon="phone"
          ></v-text-field>
          <v-text-field
            label="استان"
            append-icon="location_city"
          ></v-text-field>
          <v-text-field
            label="شهر"
            append-icon="location_city"
          ></v-text-field>
          <v-text-field
            label="نشانی"
            append-icon="place"
          ></v-text-field>

          <v-layout>
            <v-btn
                :loading="loading"
                :disabled="loading"
                color="primary"
                @click.native="loader = 'loading'"
                >
                ثبت نام
            </v-btn>
            <v-btn
                color="secondary"
                @click="back"
                >
                بازگشت
            </v-btn>
        </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
      select: { required },
      checkbox: { required }
    },

    data: () => ({
      name: '',
      lastName: '',
      email: '',
      gender: 'female',
      loader: null,
      loading: false
    }),

    watch: {
        loader () {
            const l = this.loader
            this[l] = !this[l]

            setTimeout(() => (this[l] = false), 3000)

            this.loader = null
        }
    },
    methods: {
        back: function(){
            this.$router.go(-1);
        }
    }
  }
</script>
