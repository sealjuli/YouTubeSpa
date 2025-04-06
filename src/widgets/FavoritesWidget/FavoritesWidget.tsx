import { JSX } from 'react'
import { FavoriteItem } from '../../entities/favoriteItem/favoriteItem'
import { ModalWindow } from '../../features/modalWindow/modalWindow'
import { useAppSelector } from '../../shared/hooks/storeHooks'
import { selectItems } from '../../shared/redux/slices/favoriteItemsSlice'

export const FavoritesWidget = (): JSX.Element => {
  const items = useAppSelector(selectItems)

  return (
    <div>
      <h1>Избранное</h1>
      {items.map((item) => (
        <FavoriteItem key={item.id} item={item} />
      ))}
      <ModalWindow />
    </div>
  )
}
