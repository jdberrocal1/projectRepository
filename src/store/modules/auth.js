const state = {
    loggedUser: {},
    isUserLogged: false
};

const mutations = {
    'SET_LOGGED_USER' (state, user) {
        state.loggedUser = user;
        state.isUserLogged = true;
    },
    'LOGOUT' (state) {
        state.loggedUser = {};
        state.isUserLogged = false;
    }
};

const actions = {
    setLoggedUser: ({commit}, user) => {
        commit('SET_LOGGED_USER', user);
    },
    logout: ({commit}) => {
        commit('LOGOUT');
    }
};

const getters = {
    loggedUser: state => {
        return state.loggedUser;
    },
    isUserLogged: state => {
        return state.isUserLogged;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};