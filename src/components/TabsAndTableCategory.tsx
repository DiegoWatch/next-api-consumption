'use client';

import { Category } from "@/models/CategoryModel";
import { ProductWithCategoryAndGroup } from "@/models/ProductsWithCategoryAndGroup";
import { CategoriesTabs, ProductNotFound, TableProductsWithGroup } from ".";
import { useState } from "react";

interface Props {
    categories: Category[];
    productsGroup: ProductWithCategoryAndGroup[];
}

export const TabsAndTableCategory = ({ categories, productsGroup}: Props) => {

    const [products, setProducts] = useState<ProductWithCategoryAndGroup[]>([]);
    const [firstClick, setFirstClick] = useState<boolean>(false);

    const ProductsFilterCategory = (category_key: string): void => {
        const productsFiltered = productsGroup.filter( product => product.c_KEY === category_key);
        setProducts(productsFiltered);
        setFirstClick(true);
    } 

  return (
    <div>
        <CategoriesTabs categories={categories} onClick={ProductsFilterCategory} />

        <div className="flex justify-center mt-10">
        {
            products.length > 0
            ? <TableProductsWithGroup products={products} />
            : products.length < 1 && firstClick && <ProductNotFound />
        }

        </div>
    </div>
  )
}
