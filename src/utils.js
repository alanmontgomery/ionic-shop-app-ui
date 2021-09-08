import { CategoryStore, ProductStore } from "./store";

const API_URL = "https://fakestoreapi.com";

export const searchProducts = async (category = false, searchTerm = true) => {
}

export const capitalizeWords = string => {
    
    return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

export const fetchCategories = async () => {

    const response = await fetch(`${ API_URL }/products/categories`);
    const data = await response.json();
    
    CategoryStore.update(s => { s.categories = data });
}

// const getProductCategoryId = (category = "") => {

//     const categoriesStore = CategoryStore.getRawState();
//     const productCategory = categoriesStore.categories.filter(c => c.name === capitalizeWords(category));

//     if (productCategory.length > 0) {
        
//         return productCategory[0].id;
//     } else {

//         return 2;
//         // getProductCategoryId(category);
//     }
// }

export const fetchProducts = async () => {

    const response = await fetch(`${ API_URL }/products?limit=1000`);
    const data = await response.json();
    
    ProductStore.update(s => { s.products = data });
}