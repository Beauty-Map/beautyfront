import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', {
    state: () => ({
        portfolios: [],
        page: 1,
        lastPage: 1,
        showInfiniteScroll: false
    }),
    getters: {
        getPortfolios: (state) => state.portfolios,
        getPage: (state) => state.page,
        getLastPage: (state) => state.lastPage,
        getShowInfiniteScroll: (state) => state.showInfiniteScroll,
    },
    actions: {
        paginate() {
            this.page++
        },
        reset() {
            this.showInfiniteScroll = false
            this.page = 1
            this.lastPage = 1
            this.portfolios = []
        }
    },
})