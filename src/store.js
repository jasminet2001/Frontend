import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        loremText: 'lorem',
        user:'',
        token:'',
<<<<<<< HEAD
        host:'http://127.0.0.1:8000/api/'
=======
        host:'https://192.168.204.129/api/'
>>>>>>> ffb2926bebb6543d6a03983d7466df49b6095ab7
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

