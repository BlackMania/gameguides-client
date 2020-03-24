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
            window.console.log(error);
            throw new Error("We were unable to load the supported games of the website.")
        })
}

function loadLolFreeChampionRotation() {
    return service.get("/lol/champion-rotations")
        .then(response => {
            store.dispatch('setFreeChampionRotation', response.data)
        })
        .catch(error => {
            window.console.log(error);
            throw new Error("We were unable to load the free champion rotation")
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
            window.console.log(error);
            throw new Error("We were unable to load guides")
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

export default { loadSupportedGames, loadLolFreeChampionRotation, loadLolGuides, loadSelectedGuide };