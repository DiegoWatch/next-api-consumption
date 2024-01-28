import { ProductWithCategoryAndGroup } from "@/models/ProductsWithCategoryAndGroup";

interface Props {
    products: ProductWithCategoryAndGroup[];
}

export const TableProductsWithGroup = ({products}: Props) => {

    return (
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Group
                </th>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
              </tr>
            </thead>
    
            <tbody>
              {products.map(({ common_name, group_type }, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 py-4">{group_type}</td>
                    <td className="px-6 py-4">{common_name}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      );
}
