import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        loremText: 'lorem',
        user:'',
        token:'',
        host:'https://1cd9-80-210-55-189.eu.ngrok.io/api/'
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

