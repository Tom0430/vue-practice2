import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const moduleA = {
    state: {
        message3: 'はじめ'
    },
    mutations: {
        setMessage3(state, payload) {
            state.message3 = payload.message3
        }
    },
    actions: {
        message3Update({ commit }, message3) {
            commit('setMessage3',{ message3 })
        }
    },
}

const moduleB = {
    state: {
        count: 2
    },
    mutations: {
        countUpdate(state) {
        state.count += 200
        }
    }
}


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
    },
    modules: {
        moduleA,
        moduleB
    }
})
export default store