// League of Legends Store
const lolStore = {
    state: {
        championData: [],
        freeChampionRotation: []
    },
    mutations: {
        SET_CHAMPION_DATA(state, data) {
            state.championData = data;
        },
        SET_FREE_CHAMPION_ROTATION(state, data) {
            if(state.championData !== [] || state.championData !== undefined)
            {
                let newData = [];
                for(const champion in state.championData)
                {
                    let d = state.championData[champion];
                    if(d.key !== undefined)
                    {
                        if(data.freeChampionIds.includes(parseInt(d.key)))
                        {
                            newData.push(state.championData[champion]);
                        }
                    }
                }
                state.freeChampionRotation = newData;
            }
        }
    },
    actions: {
        setChampionData ({ commit }, games) {
            commit('SET_CHAMPION_DATA', games);
        },
        setFreeChampionRotation({commit}, champions) {
            commit('SET_FREE_CHAMPION_ROTATION', champions);
        }
    },
    modules: {

    },
    getters: {
        freeChampionRotation: state => state.freeChampionRotation
    }
}

export default lolStore