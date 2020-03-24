import store from '../store/index'
import axios from 'axios'

const service = axios.create({
    baseURL: 'http://localhost:3000'
});


function loadSupportedGames() {
    return service.get("/gg/supportedgames")
        .then(response => {
            store.dispatch('setSupportedGames', response.data);
        })
        .catch(error => {
            throw error.message;
        })
}

function loadLolFreeChampionRotation() {
    return service.get("/lol/champion-rotations")
        .then(response => {
            store.dispatch('setFreeChampionRotation', response.data)
        })
        .catch(error => {
            throw error.message;
        })
}

function loadLolGuides(page, size, $state) {
    return service.get("/gg/lol/guides?page=" + page + "&size=" + size)
        .then(response => {
            store.dispatch('setGuides', response.data);
            $state.loaded();
            if (response.data.length <= 0)
                $state.complete();
        })
        .catch(error => {
            throw error.message;
        });
}

function loadSelectedGuide(id) {
    return service.get("/gg/lol/guide/" + id)
        .then(response => {
           store.dispatch('setSelectedGuide', response.data)
        })
        .catch(error => {
            throw error.message;
        })
}

function loadIndividualChampion(champion) {
    return service.get("/lol/data/en_US/champion/" + champion)
        .then(response => {
            store.dispatch('setIndividualChampion', response.data.data[champion])
        })
        .catch(error => {
            throw error.message;
        })
}

function loadLolVersions() {
    return service.get("/lol/versions")
        .then(response => {
            store.dispatch('setVersions', response.data)
        })
        .catch(error => {
            throw error.message;
        })
}

export default { loadSupportedGames, loadLolFreeChampionRotation, loadLolGuides, loadSelectedGuide,
    loadIndividualChampion, loadLolVersions };