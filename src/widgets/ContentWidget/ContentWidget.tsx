import { JSX } from 'react'
import { Layout } from 'antd'
import { SearchtWidget } from '../searchWidget/searchWidget'
import { FavoritesWidget } from '../favoritesWidget/favoritesWidget'
import { useAppSelector } from '../../shared/hooks/storeHooks'
import { selectVideoStatus } from '../../shared/redux/slices/videosSlice'
import { selectCurrentMenuItem } from '../../shared/redux/slices/menuItemSlice'
import { menuItemsEnum } from '../../shared/enums/menuItemsEnum'
import './contentWidgetStyle.css'

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
      {!favourites && <SearchtWidget />}
      {favourites && <FavoritesWidget />}
    </Content>
  )
}
