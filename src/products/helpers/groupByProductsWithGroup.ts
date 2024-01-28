import { Group } from "@/models/GroupModel";
import { ProductWithCategory } from "@/models/ProductWithCategory";
import { ProductWithCategoryAndGroup } from "@/models/ProductsWithCategoryAndGroup";

export const groupByProductsWithGroup = (products: ProductWithCategory[], groups: Group[]): ProductWithCategoryAndGroup[] => {
    let productsWithGroup = [];

    for (let product of products) {

        let group = groups.find(item => item._KEY === product.group_type);

        if (group) {
            productsWithGroup.push({ 
                ...product,   
                group_type: group.group_type,
                g_KEY: group._KEY,
                g_META: group._META,
                g_index_order: group.index_order 
            });
        }
    }
    
    return productsWithGroup;
}
