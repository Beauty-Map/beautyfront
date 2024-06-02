import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', {
    state: () => ({
        portfolios: [],
        page: 1,
        lastPage: 1,
        showInfiniteScroll: false,
        lat: null,
        lng: null,
    }),
    getters: {
        getPortfolios: (state) => state.portfolios,
        getPage: (state) => state.page,
        getLastPage: (state) => state.lastPage,
        getShowInfiniteScroll: (state) => state.showInfiniteScroll,
        getUserCurrentLocation: (state) => ({lat: state.lat, lng: state.lng}),
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
        },
        setUserCurrentLocation(lat, lng) {
            this.lat = lat
            this.lng = lng
        }
    },
})