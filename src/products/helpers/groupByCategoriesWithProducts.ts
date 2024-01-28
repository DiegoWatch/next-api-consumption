
import { Category } from "@/models/CategoryModel";
import { Product } from "@/models/ProductModel";
import { ProductWithCategory } from "@/models/ProductWithCategory";


export const groupByCategoriesWithProducts = (categories: Category[], products: Product[]): ProductWithCategory[] => {
    let productsWithCategory = [];
    
    for (let product of products) {

        let category = categories.find(item => item._KEY === product.category);

        if (category) {
            productsWithCategory.push({ 
                ...product,
                category: category.category,
                c_KEY: category._KEY,
                c_META: category._META,
                c_index_order: category.index_order 
            });
        }
    }
    

    productsWithCategory.sort(function(a, b) {
        return a.category.localeCompare(b.category);
    });

    return productsWithCategory;
}
