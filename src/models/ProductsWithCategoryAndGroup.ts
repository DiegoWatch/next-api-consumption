import { ProductWithCategory } from '@/models/ProductWithCategory';
import { Meta } from './ProductModel';

export interface ProductWithCategoryAndGroup extends ProductWithCategory {
    g_KEY:          string;
    g_META:         Meta;
    g_index_order:  number | null;
}