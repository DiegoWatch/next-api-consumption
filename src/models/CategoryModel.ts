export interface Category {
    category:    string;
    index_order: number;
    _KEY:        string;
    _META:       Meta;
}

export interface Meta {
    created_time: Date;
    updated_time: Date;
}
