// initial state
const state = {
    selected: []
}

// getters
const getters = {
    selectedSamples: state => state.selected
}

// actions
const actions = {

}

// mutations
const mutations = {
    setSelectedSamples (state, selectedSamples) {
        state.selected = selectedSamples.slice();
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}