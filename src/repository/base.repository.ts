export abstract class BaseRepository<T> implements RepositoryInterface<T> {
  // constructor(db: DB) {}

  create(item: T): boolean {
    throw new Error("Method not implemented.");
  }

  delete(id: string): boolean {
    throw new Error("Method not implemented.");
  }

  find(item: T): T[] {
    throw new Error("Method not implemented.");
  }

  findOne(id: string): T {
    throw new Error("Method not implemented.");
  }

  update(id: string): boolean {
    throw new Error("Method not implemented.");
  }
}
