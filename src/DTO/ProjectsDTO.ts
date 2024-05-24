export interface ProjectDTO{
    id: number,
    icon: string,
    color: string,
    title: string,
    thumbnail: string,
    description: string,
    tecnologies: {
        id: number,
        name: string,
        icon: string
    }[]
}