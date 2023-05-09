export interface IProductResponse {
    id: number;
    name: string;
    photo: string;
    description: string;
    stock: number;
    price: number;
    expireDate: Date;
    categoryId: number;
    enabled: boolean;
}
