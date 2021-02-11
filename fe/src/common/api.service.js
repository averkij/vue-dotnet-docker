import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import {
  API_URL
} from "@/common/config";

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },
  //add POST, PUT, etc. methods here
  get(resource, slug = "") {
    return this.axios.get(`api/${resource}/${slug}`).catch(error => {
      throw new Error(`ApiService ${error}`);
    });
  }
};

export default ApiService;

export const ItemsService = {
  getTest(params) {
    return ApiService.get("test",
      `/${params.someBeParameter}`);
  }
};
