export interface ProjectDTO{
    id: number,
    icon: string,
    color: string,
    title: string,
    thumbnail: string,
    description: {
        br: string,
        en: string,
    }
    tecnologies: {
        id: number,
        name: string,
        icon: string
    }[],
    difficulty: number,
    url: string
    githubUrl: string,
    figmaUrl: string
}