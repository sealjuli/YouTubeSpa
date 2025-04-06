export type SortType = 'none' | 'title' | 'channelTitle'

export type FieldType = {
    request: string
    requestName: string
    sortBy: SortType
    quantity: number | null
}
export type FavoriteItemType = FieldType & { id: string }