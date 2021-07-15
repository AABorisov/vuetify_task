// actions
const setProductNum = ({ commit }, { name, num }) => {
    commit('SET_PRODUCT_NUM', { name, num });
    commit('UPDATE_TOTAL');
};

export default {
    setProductNum,
}; // actions
