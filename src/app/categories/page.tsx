// 'use client';

import apiProducts from '@/api/Products';
import { TabsAndTableCategory } from '@/components';
import { groupByCategoriesWithProducts } from '@/products/helpers';
import { groupByProductsWithGroup } from '@/products/helpers';

const CategoriesPage = async() => {

    const products = await apiProducts.getProducts();
    const categories = await apiProducts.getCategories();
    const groups = await apiProducts.getGroups();

    const categoriesWithProducts = groupByCategoriesWithProducts(categories, products);
    const ProductsWithGroups = groupByProductsWithGroup(categoriesWithProducts, groups);


  return (
    <div className='p-10'>
        <div>
            <TabsAndTableCategory categories={categories} productsGroup={ProductsWithGroups} />
        </div>
        
    </div>
  )
}

export default CategoriesPage