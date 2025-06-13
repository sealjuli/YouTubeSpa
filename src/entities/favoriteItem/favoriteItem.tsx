import { JSX } from 'react'
import { Button } from 'antd'
import { FavoriteItemType } from '../../shared/types/favoriteItemsTypes'
import { useAppDispatch } from '../../shared/hooks/storeHooks'
import {
  changeShowWindow,
  setQuery,
} from '../../shared/redux/slices/modalWindowSlice'
import { deleteItem } from '../../shared/redux/slices/favoriteItemsSlice'
import { setSearch } from '../../shared/redux/slices/menuItemSlice'
import {
  updateInputValue,
  updateSearchInputValue,
} from '../../shared/redux/slices/inputValueSlice'
import { fetchGetVideos } from '../../shared/redux/slices/videosSlice'
import './favoriteItemStyle.css'

type PropsType = {
  item: FavoriteItemType
}

export const FavoriteItem = ({ item }: PropsType): JSX.Element => {
  const dispatch = useAppDispatch()

  const openModalWindow = (item: FavoriteItemType) => {
    dispatch(setQuery(item))
    dispatch(changeShowWindow())
  }

  const onClickDelete = (id: string) => {
    dispatch(deleteItem(id))
  }

  const onClickExecute = (item: FavoriteItemType) => {
    dispatch(updateInputValue(item.request))
    dispatch(updateSearchInputValue())
    dispatch(
      fetchGetVideos({
        request: item.request,
        quantity: item.quantity || 12,
        sortBy: item.sortBy,
      })
    )
    dispatch(setSearch())
  }

  return (
    <div className="item">
      <div className="item-text" onClick={() => openModalWindow(item)}>
        <b>{item.requestName}</b>
      </div>
      <div>
        <Button type="link" onClick={() => onClickExecute(item)}>
          Выполнить
        </Button>
        <Button type="link" onClick={() => onClickDelete(item.id)}>
          Удалить
        </Button>
      </div>
    </div>
  )
}
