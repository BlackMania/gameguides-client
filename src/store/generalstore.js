const generalStore = {
    state: {
        selectedGame: "",
        suportedGames: [ {name: "League of Legends", shorthand: "lol"}]
    },
    mutations: {
        changeSelectedGame(state, newGame) {
            state.selectedGame = newGame;
        }
    },
    actions: {
    },
    modules: {

    },
    getters: {
        selectedGame: state => state.selectedGame,
        supportedGames: state => state.suportedGames
    }
}

export default generalStore;