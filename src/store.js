import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// ストアを作成
const store = new Vuex.Store({
    state: {
        // count: 0,
        message: '初期メッセージ'
    },
    getters: {
        message(state) { return state.message }
        // ここはあんまり役に立ってない
    },
    mutations: {
        // カウントアップするミューテーションを登録
        // increment(state) {
        // state.count++
        // },
        setMessage(state, payload) {
            state.message = payload.message
        },
    },
    actions: {
        doUpdate({ commit }, message) {
            commit('setMessage',{ message })
        }
    }
})
export default store