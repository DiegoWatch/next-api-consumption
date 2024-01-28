// 'use client';

import { Category } from "@/models/CategoryModel"

interface Props {
    categories: Category[];
    onClick: (category_key: string) => void;
}

export const CategoriesTabs = ({categories, onClick}: Props) => {
  return (
    <ul className="flex flex-wrap justify-center text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
    {
        categories.map( (category) => (
            <li className="me-2" key={category._KEY}>
                <button 
                    className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
                    onClick={() => onClick(category._KEY) }
                >
                    {category.category}
                </button>
            </li>
        ))
    }
    </ul>
  )
}
