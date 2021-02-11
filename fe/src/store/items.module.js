import {
  ItemsService
} from "@/common/api.service";

import {
  GET_TEST
} from "./actions.type";

import {
  SET_TEST
} from "./mutations.type";

const initialState = {
  testItem: 0
};

export const state = {
  ...initialState
};

export const actions = {
  async [GET_TEST](context, params) {
    await ItemsService.getTest(params).then(
      function (response) {
        context.commit(SET_TEST, response);
      },
      function () {
        console.log(`Place for error handling`);
      }
    );
    return;
  },
};

export const mutations = {
  [SET_TEST](state, params) {
    state.testItem = params.data;
  },
};

const getters = {
  testItem(state) {
    return state.testItem;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
