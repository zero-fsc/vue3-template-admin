import { defineStore } from 'pinia'

export const useRouteStore = defineStore({
  id: 'routeStore',

  state: () => ({
    // 面包屑路由匹配
    routeMatched: []
  }),

  getters: {
    getRouteMatched(state) {
      return state.routeMatched
    }
  },

  actions: {
    setRouteMatched (route: any) {
      this.routeMatched.push(route)
    }
  }
})