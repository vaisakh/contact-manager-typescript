
interface BaseService<T> {
    find(item: T): T[]
    findOne(id: string): T
}