
export type Iroutes = Iroute[];
interface Iroute {
    id: number | string,
    path: string,

    title: string,
    element: JSX.Element
}
export interface titleType {
    id?: number ,
    bId?:number ,
    description?: string,
    img?: string,
    date?: string,
    ptitle?: string,
    title?: string,
    h2title?: string,
    src?: string;
    number?: string,
}
export interface buttonType {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    To?: string;

    title: string, bg?: string, br?: string, p?: string, border?: string, fs?: string, icon?: JSX.Element;
}
export interface title {
    title: string;
}
export interface txtphotoType {
    src1?: string, src2?: string, toptext: string, maintext: string,
}
export interface priceType {
    buttonTxt: string, btnColor?: string, btnBg?: string,
    price: string, design: string, page: string, lorem: string, color: string,
    cardBg?: string;
}