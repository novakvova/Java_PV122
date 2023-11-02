export interface IProductCreate {
    name: string;
    description: string;
    categoryId: number|null;
    images: File[];
}