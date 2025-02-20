export interface ProductDetail {
    id: number;
    code: string;
    name: string;
    description: string;
    image?: string;
    categoryId: number;
    subcategoryId: number;
    tags: number[];
    type: number;
    type2?: number;
    newPrice: number;
    oldPrice: number;
    offer?: number;
}


// Category export interface
export interface Category {
    id: number;
    name: string;
}

// SubCategory export interface
export interface SubCategory {
    id: number;
    name: string;
}

// Tag export interface
export interface Tag {
    id: number;
    name: string;
}

// Type export interface
export interface Type {
    id: number;
    name: string;
}

// SubType export interface
export interface SubType {
    id: number;
    name: string;
}