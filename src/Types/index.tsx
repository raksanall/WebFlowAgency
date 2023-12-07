
export type Iroutes=Iroute[];
interface Iroute{
    id:number | string,
    path:string,
    title:string,
    element:JSX.Element
}
export interface titleType{
    ptitle?:string,
    title?:string,
    h2title?:string,
    src?:string;
    number?:string,
}
export interface buttonType{
   
    title:string,bg?:string,br?:string,p?:string,border?:string,fs?:string,icon?:JSX.Element;
}
export interface title{
    title:string;
}