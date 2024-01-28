export interface Group {
    group_type:  string;
    index_order: number | null;
    _KEY:        string;
    _META:       Meta;
}

export interface Meta {
    created_time: Date;
    updated_time: Date;
}
