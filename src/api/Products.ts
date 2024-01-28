import { Category } from "@/models/CategoryModel";
import { Group } from "@/models/GroupModel";
import { Product } from "@/models/ProductModel";

export const getProducts = async(): Promise<Product[] | []> => {

    try {
      const products: Product[] = await fetch(`https://c3f7-186-1-186-108.ngrok-free.app/api/v1/model/product`).then( resp => resp.json() );
    
      return products;
      
    } catch (error) {
      return [];
    }
  
}

export const getCategories = async(): Promise<Category[] | []> => {

    try {
      const categories: Category[] = await fetch(`https://c3f7-186-1-186-108.ngrok-free.app/api/v1/model/category`).then( resp => resp.json() );
    
      return categories;
      
    } catch (error) {
      return [];
    }
  
}

export const getGroups = async(): Promise<Group[] | []> => {

  try {
    const groups: Group[] = await fetch(`https://c3f7-186-1-186-108.ngrok-free.app/api/v1/model/group`).then( resp => resp.json() );
  
    return groups;
    
  } catch (error) {
    return [];
  }
}

export default {
    getProducts,
    getCategories,
    getGroups
}