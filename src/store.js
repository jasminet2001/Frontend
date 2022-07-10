import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        loremText: 'lorem',
        user:'',
        token:'',
        host:'http://localhost:8000'
    },
    mutations: {
        setUser (state, info){
            state.user = info;
        },
        setLorem (state, info){
            state.loremText = info
        }
    }
})

