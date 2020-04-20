import Vue from 'vue'
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
        runeInfo: null,
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
            for (let i = 0; i < data.length; i++) {
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
            state.guide = null
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
        },
        SET_SKILL(state, data) {
            Vue.set(state.guide.skills, data.ind, data.value);
        },
        SET_RUNE(state, data) {
            if (state.guide.runeset.mainset[data.ind] === undefined) {
                Vue.set(state.guide.runeset.mainset, data.ind, data.title);
            } else if (state.guide.runeset.secondset[data.ind] === undefined) {
                if(state.guide.runeset.mainset[data.ind] === data.title) return;
                Vue.set(state.guide.runeset.secondset, data.ind, data.title);
            }
        },
        REMOVE_RUNE(state, data) {
            if (state.guide.runeset.mainset.includes(data.title)) {
                if(data.title === state.guide.runeset.mainset[0])
                {
                    state.guide.runeset.mainset.fill(undefined);
                }
                Vue.set(state.guide.runeset.mainset, data.ind, undefined);
            } else if (state.guide.runeset.secondset.includes(data.title)) {
                if(data.title === state.guide.runeset.secondset[0])
                {
                    state.guide.runeset.secondset.fill(undefined);
                }
                Vue.set(state.guide.runeset.secondset, data.ind, undefined);
            }
        },
        ADD_SUBRUNE(state, data) {
            if (state.guide.runeset.mainset.includes(data.parent)) {
                Vue.set(state.guide.runeset.mainset, data.ind, data.title);
            } else if (state.guide.runeset.secondset.includes(data.parent)) {
                Vue.set(state.guide.runeset.secondset, data.ind, data.title);
            }
        },
        UPDATE_TITLE(state, title) {
            state.guide.title = title;
        },
        UPDATE_CHAMPION(state, champion) {
            state.guide.champion = champion;
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
        resetGuides({commit}) {
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
        setRuneInfo({commit}, runedata) {
            commit('SET_RUNE_INFO', runedata)
        },
        setSkill({commit}, data) {
            commit('SET_SKILL', data);
        },
        setRune({commit}, data) {
            commit('SET_RUNE', data);
        },
        removeRune({commit}, data) {
            commit('REMOVE_RUNE', data);
        },
        addSubRune({commit}, data) {
            commit('ADD_SUBRUNE', data);
        },
        updateTitle({commit}, title) {
            commit('UPDATE_TITLE', title);
        },
        updateChampion({commit}, champion) {
            commit('UPDATE_CHAMPION', champion);
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