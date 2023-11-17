export type Translatable = {
    en:string;
    hr:string;
}
export type Orderable = {
    id:number;
    name:Translatable;
    order:number;
    deleted_at: string | null;
}
export type MenuSection = Orderable