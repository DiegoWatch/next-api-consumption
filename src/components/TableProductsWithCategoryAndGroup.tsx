import { Category } from "@/models/CategoryModel";
import { Group } from "@/models/GroupModel";
import { Product } from "@/models/ProductModel";
import { groupByCategoriesWithProducts } from "@/products/helpers";
import { groupByProductsWithGroup } from "@/products/helpers/groupByProductsWithGroup";

interface Props {
  categories: Category[];
  products: Product[];
  groups: Group[];
}

export const TableProductsWithCategoryAndGroup = ({ categories, products, groups }: Props) => {

  const categoriesWithProducts = groupByCategoriesWithProducts(categories, products);
  const ProductsWithGroups = groupByProductsWithGroup(categoriesWithProducts,groups);

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Group
            </th>
            <th scope="col" className="px-6 py-3">
              Product
            </th>
          </tr>
        </thead>

        <tbody>
          {ProductsWithGroups.map(
            ({ category, common_name, group_type }, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4">{category}</td>
                <td className="px-6 py-4">{group_type}</td>
                <td className="px-6 py-4">{common_name}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};
