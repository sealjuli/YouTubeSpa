import { JSX } from 'react'
import { Layout } from 'antd'
import { SearchtWidget } from '../../widgets/SearchWidget/SearchWidget'
import { FavoritesWidget } from '../../widgets/FavoritesWidget/FavoritesWidget'
import { useAppSelector } from '../../shared/hooks/storeHooks'
import { selectVideoStatus } from '../../shared/redux/slices/videosSlice'
import { selectCurrentMenuItem } from '../../shared/redux/slices/menuItemSlice'
import { menuItemsEnum } from '../../shared/helpers/menuItemsEnum'
import './ContentWidget.css'

const { Content } = Layout

export const ContentWidget = (): JSX.Element => {
  const status = useAppSelector(selectVideoStatus)
  const menuItem = useAppSelector(selectCurrentMenuItem)
  const favourites = menuItem === menuItemsEnum.favorites

  return (
    <Content
      className={
        status === 'succeeded' || status === 'loading' || favourites
          ? 'contentStyle'
          : 'contentStyle contentStyleCenter'
      }
    >
      {/* Основной */}
      {!favourites && <SearchtWidget />}
      {/* Избранное */}
      {favourites && <FavoritesWidget />}
    </Content>
  )
}
