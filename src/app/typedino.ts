import { Dinosaur } from "./dinosaur";

export interface Typedino {
    id: number,
    typeName: string,
    feeding: string
    dinosaur: Dinosaur[]
}