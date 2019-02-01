// initial state
const state = {
    windowWidth: 0,
    windowHeight: 0,
    isImporting: false,
    fromImport: false,
    isLoading: false,
    continuousClinicalVariables: []
}

// getters
const getters = {
    windowWidth: state => state.windowWidth,
    windowHeight: state => state.windowHeight,
    isImporting: state => state.isImporting,
    fromImport: state => state.fromImport,
    isLoading: state => state.isLoading,
    continuousClinicalVariables: state => state.continuousClinicalVariables
}

// actions
const actions = {

}

// mutations
const mutations = {
    setWindowWidth (state, windowWidth) {
        state.windowWidth = windowWidth;
    },
    setWindowHeight (state, windowHeight) {
        state.windowHeight = windowHeight;
    },
    setIsImporting (state, isImporting) {
        state.isImporting = isImporting;
    },
    setFromImport (state, fromImport) {
        state.fromImport = fromImport;
    },
    setIsLoading (state, isLoading) {
        state.isLoading = isLoading;
    },
    setContinuousClinicalVariables (state, clinicalVars) {
        state.continuousClinicalVariables = clinicalVars;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}