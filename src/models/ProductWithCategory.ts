import { HtsCode, Meta, Species } from "./ProductModel";

export interface ProductWithCategory {
    category:       string;
    common_name:    string;
    botanical_name: string;
    index_order:    number;
    group_type:     string;
    is_combo:       boolean;
    hts_code:       HtsCode | null;
    hidden:         boolean;
    highlight:      boolean;
    canceled:       boolean;
    warning:        string | null;
    description:    string | null;
    species:        Species | null;
    _KEY:           string;
    _META:          Meta;
    c_KEY:          string;
    c_META:         Meta;
    c_index_order:  number;
}
