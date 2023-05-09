import { IProductResponse } from "./IProductResponse";

export interface IState {
    totalProducts: IProductResponse[];
    cartProducts: IProductResponse[];
    cartOpen: boolean;
}