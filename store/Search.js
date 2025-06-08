import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', {
    state: () => ({
        portfolios: [],
        artists: [],
        page: 1,
        lastPage: 1,
        showInfiniteScroll: false,
        loadingArtists: false,
        lat: null,
        lng: null,
    }),
    getters: {
        getPortfolios: (state) => state.portfolios,
        getArtists: (state) => state.artists,
        getPage: (state) => state.page,
        getLastPage: (state) => state.lastPage,
        getShowInfiniteScroll: (state) => state.showInfiniteScroll,
        getUserCurrentLocation: (state) => ({lat: state.lat, lng: state.lng}),
    },
    actions: {
        paginate() {
            this.page++
            this.loadingArtists = true
        },
        reset() {
            this.showInfiniteScroll = false
            this.page = 1
            this.lastPage = 1
            this.portfolios = []
        },
        resetArtists() {
            this.showInfiniteScroll = false
            this.page = 1
            this.lastPage = 1
            this.artists = []
        },
        setUserCurrentLocation(lat, lng) {
            this.lat = lat
            this.lng = lng
        }
    },
})