export enum sortEnum {
    'none',
    'title',
    'channelTitle',
}

export type FieldType = {
    request: string
    requestName: string
    sortBy: sortEnum
    quantity: number | null
}
export type FavoriteItemType = FieldType & { id: string }