import { TableProductsWithCategoryAndGroup } from "@/components";
import apiProducts from '@/api/Products';

const ProductsPage = async() => {

  const products = await apiProducts.getProducts();
  const categories = await apiProducts.getCategories();
  const groups = await apiProducts.getGroups();

  return (
    <div className="p-10">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="font-bold text-2xl">Categories With Products And Groups</h1>
        <TableProductsWithCategoryAndGroup categories={categories} products={products} groups={groups} />
      </div>
    </div>
  )
}

export default ProductsPage;