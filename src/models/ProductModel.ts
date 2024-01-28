export interface Product {
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
    warning:        null | string;
    description:    null | string;
    species:        Species | null;
    _KEY:           string;
    _META:          Meta;
}

export interface Meta {
    created_time: Date;
    updated_time: Date;
}

export type HtsCode = "0604.20.0080" | "0603.19.0160" | "0603.13.0060" | "0603.11.0060" | "0603.19.0120" | "0603.14.0010" | "0603.15.0000" | "0603.12.7000" | "0603.19.0140";

export type Species = "hybrid" | "Coronaria" | "Colvillei" | "Neopolitanum" | "Niger" | "Hybrid" | "Oriental x Trumpet";
