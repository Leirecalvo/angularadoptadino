import { Adoption } from "./adoption"

export interface User {
    id: number,
    mail: string,
    password: string,
    name: string,
    surname: string,
    hasDino: string
    // Adoptions: Adoption[]
}