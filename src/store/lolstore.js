// League of Legends Store
const lolStore = {
    state: {
        championData: null,
        individualChampionData: null,
        freeChampionRotation: [],
        guides: [],
        guide: [],
        versions: [],
        resourceVersion: null,
        runeInfo: null
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
        },
        SET_SELECTED_GUIDE(state, data) {
            state.guide = data;
        },
        RESET_SELECTED_GUIDE(state) {
            state.guide = []
        },
        SET_INDIVIDUAL_CHAMPION(state, data) {
            state.individualChampionData = data;
        },
        RESET_INDIVIDUAL_CHAMPION(state) {
            state.individualChampionData = null;
        },
        SET_VERSIONS(state, data) {
            state.versions = data;
            state.resourceVersion = "10.6.1"
        },
        SET_RUNE_INFO(state, data) {
            state.runeInfo = data;
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
        },
        resetSelectedGuide({commit}) {
            commit('RESET_SELECTED_GUIDE');
        },
        setSelectedGuide({commit}, guide) {
            commit('SET_SELECTED_GUIDE', guide);
        },
        setIndividualChampion({commit}, data) {
            commit('SET_INDIVIDUAL_CHAMPION', data);
        },
        resetIndividualChampion({commit}) {
            commit('RESET_INDIVIDUAL_CHAMPION');
        },
        setVersions({commit}, versions) {
            commit('SET_VERSIONS', versions);
        },
        setRuneInfo({commit}, runedata)
        {
            commit('SET_RUNE_INFO', runedata)
        }
    },
    modules: {},
    getters: {
        championData: state => state.championData,
        freeChampionRotation: state => state.freeChampionRotation,
        lolGuides: state => state.guides,
        guide: state => state.guide,
        individualChampionData: state => state.individualChampionData,
        versions: state => state.versions,
        resourceVersion: state => state.resourceVersion,
        runeInfo: state => state.runeInfo,
        getRuneInfo: (state) => (name) => {
            return state.runeInfo.filter(rune => rune.name === name)
        },

    }
}

export default lolStore