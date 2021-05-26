


 import Vue from 'vue'
    import Vuex from 'vuex'
    Vue.use(Vuex)

    const state = {}         //存放 state，類似原本的 data
    const getters = {}       //負責取得 state 資料，類似 computed
    const actions = {}       //調用處理 ajax 及調用 mutation (不改變 State)，類似 methods
    const mutations = {}     //負責改變 state 資料 (Vuex 文件說明，盡可能使用 mutation 改變狀態)
    
    export default new Vuex.Store({
      state,
      getters,
      actions,
      mutations
    })