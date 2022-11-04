const watchlistVue = new Vue({ 
    el: "#netflixWatchlist", 

    data: {
        watchlist: [],
},

    methods: {

        removeWatchlistItem(index) { 
            this.watchlist.splice(index, 1); 

            localStorage.setItem("movies", JSON.stringify(this.watchlist)); 
            this.watchlist = JSON.parse(localStorage.getItem("movies")); 
        }, 
    },

    mounted() { 
        if (!localStorage.getItem("movies")) {
            let arrayListItem = [];
            localStorage.setItem("movies", JSON.stringify(arrayListItem));
        }

        this.watchlist = JSON.parse(localStorage.getItem("movies"));
    },
});