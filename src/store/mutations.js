// mutations
const SET_PRODUCT_NUM = (state, { name, num }) => {
    const product = state.products.find((item) => item.name === name);
    product.num = num;
};

const UPDATE_TOTAL = (state) => {
    state.total = state.products
        .reduce((total, product) => (total + product.num * product.price), 0);
};

export default {
    SET_PRODUCT_NUM,
    UPDATE_TOTAL,
}; // mutations
