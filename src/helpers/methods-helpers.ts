export function filterByIndexes<T>(data: T[], indexes: number[]) {
    return data.filter((_, index) => indexes.includes(index));
}