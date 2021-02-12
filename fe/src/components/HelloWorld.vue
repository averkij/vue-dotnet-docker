<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200" />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Web app boilerplate
        </h1>

        <p class="subheading font-weight-regular">
          Backend and frontend tiers backed by Docker.
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Backend
        </h2>

        <p class="subheading font-weight-regular">
          .NET 5 application
        </p>
        <p class="subheading font-weight-regular">
          Backend app have one test API handler which returns random number.
        </p>
        <v-btn class="mt-5" @click="getNewNumber()">Get number</v-btn>
        <p v-show="testItem" class="text-h4 font-weight-bold mt-5">
          {{testItem}}
        </p>
      </v-col>

      <v-col class="mb-5 text-center" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Frontend
        </h2>

        <p class="subheading font-weight-regular">
          Web application made with Vue.js
        </p>
        <p class="subheading font-weight-regular">
          Necessary packages are already configured. See the usage in code.
        </p>
        <v-row class="d-flex justify-center mt-5">
          <ul style="width:300px;">
            <li class="text-left"><b>vuex</b> for managing state</li>
            <li class="text-left"><b>vue-router</b> for routing</li>
            <li class="text-left"><b>vuetify</b> for the fast and neat UI</li>
          </ul>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Docker
        </h2>

        <p class="subheading font-weight-regular">
          Deploy the app with a few commands.
        </p>

        <p class="subheading font-weight-regular">
          <b>docker-compose.yaml</b> contains the deployment configuration.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import {
    mapGetters
  } from "vuex";
  import {
    GET_TEST
  } from "@/store/actions.type";

  export default {
    name: 'HelloWorld',
    data: () => ({
      numberFromBackend: null
    }),
    methods: {
      getNewNumber() {
        this.$store
          .dispatch(GET_TEST, {
            someParameter: "foo"
          });
      }
    },
    computed: {
      ...mapGetters(["testItem"])
    }
  }
</script>