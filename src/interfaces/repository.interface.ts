
interface RepositoryInterface<T> {
    find(item: T) : T[]
    findOne(id: string): T
    create(item: T) : boolean
    update(id: string) : boolean
    delete(id: string) : boolean
}

