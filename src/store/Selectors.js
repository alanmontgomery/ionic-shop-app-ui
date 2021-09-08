import { createSelector } from 'reselect';

const getState = state => state;

//  General getters
export const getCart = createSelector(getState, state => state.cart);
export const getCategories = createSelector(getState, state => state.categories);
export const getProducts = createSelector(getState, state => state.products);

//  Specific getters
export const getProduct = id => createSelector(getState, state => state.products.filter(p => parseInt(p.id) === parseInt(id))[0]);
export const getCategoryProducts = category => createSelector(getState, state => state.products.filter(p => p.category === category));