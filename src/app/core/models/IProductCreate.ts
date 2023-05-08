export interface IProductCreate {
    name: string;
    photo: string;
    description: string;
    departmentName: string;
    stock: number;
    price: number;
    expireDate: Date;
    categoryId: number;
}