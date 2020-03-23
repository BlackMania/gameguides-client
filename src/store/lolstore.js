// League of Legends Store
const lolStore = {
    state: {
        championData: [],
        freeChampionRotation: [],
        guides: []
    },
    mutations: {
        SET_CHAMPION_DATA(state, data) {
            state.championData = data;
        },
        SET_FREE_CHAMPION_ROTATION(state, data) {
            if (state.championData !== [] || state.championData !== undefined) {
                let newData = [];
                for (const champion in state.championData) {
                    let d = state.championData[champion];
                    if (d.key !== undefined) {
                        if (data.freeChampionIds.includes(parseInt(d.key))) {
                            newData.push(state.championData[champion]);
                        }
                    }
                }
                state.freeChampionRotation = newData;
            }
        },
        SET_GUIDES(state, data) {
            for(let i = 0; i < data.length; i++)
            {
                state.guides.push(data[i]);
            }
        },
        RESET_GUIDES(state) {
            state.guides = [];
        }
    },
    actions: {
        setChampionData({commit}, games) {
            commit('SET_CHAMPION_DATA', games);
        },
        setFreeChampionRotation({commit}, champions) {
            commit('SET_FREE_CHAMPION_ROTATION', champions);
        },
        setGuides({commit}, guides) {
            commit('SET_GUIDES', guides);
        },
        resetGuides({ commit }) {
            commit('RESET_GUIDES');
        }
    },
    modules: {},
    getters: {
        championData: state => state.championData,
        freeChampionRotation: state => state.freeChampionRotation,
        lolGuides: state => state.guides
    }
}

export default lolStore