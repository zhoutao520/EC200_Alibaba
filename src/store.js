import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state={
    type:'1'
}
const mutations={
    change(state,val){
        state.type = val;
    }
}

export default new Vuex.Store({
    state,
    mutations
})