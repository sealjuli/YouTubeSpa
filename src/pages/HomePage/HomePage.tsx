import { JSX } from 'react'
import { Layout, Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ContentWidget } from '../../widgets/ContentWidget/ContentWidget'
import { FavoritesWidget } from '../../widgets/FavoritesWidget/FavoritesWidget'
import { MenuInfo } from 'rc-menu/lib/interface'
import { YouTubeSpaRoutes } from '../../shared/helpers/Routes'
import { useAppSelector, useAppDispatch } from '../../shared/hooks/storeHooks'
import {
  selectVideoStatus,
  clearVideosState,
} from '../../shared/redux/slices/videosSlice'
import { clearInputValue } from '../../shared/redux/slices/inputValueSlice'
import {
  setFavorites,
  setSearch,
  selectCurrentMenuItem,
} from '../../shared/redux/slices/menuItemSlice'
import { menuItemsEnum } from '../../shared/helpers/menuItemsEnum'
import './HomePageStyle.css'

const { Header, Content } = Layout

const items = [
  { key: 0, label: 'Поиск' },
  { key: 1, label: 'Избранное' },
  { key: 2, label: 'Выйти', style: { marginLeft: 'auto' } },
]

export const HomePage = (): JSX.Element => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const status = useAppSelector(selectVideoStatus)
  const menuItem = useAppSelector(selectCurrentMenuItem)
  const favourites = menuItem === menuItemsEnum.favorites

  const handleClick = (e: MenuInfo) => {
    if (e.key === '0') {
      dispatch(setSearch())
    }

    if (e.key === '1') {
      dispatch(setFavorites())
    }

    if (e.key === '2') {
      localStorage.removeItem('token')
      localStorage.removeItem('login')
      navigate(`/${YouTubeSpaRoutes.root}/${YouTubeSpaRoutes.login}`)
    }
  }

  return (
    <Layout className="layoutStyle">
      <Header className="headerStyle">
        <div
          className="logo"
          onClick={() => {
            dispatch(clearVideosState())
            dispatch(clearInputValue())
          }}
        />
        <Menu
          className="menu"
          onClick={(e) => handleClick(e)}
          mode="horizontal"
          selectedKeys={[menuItem.toString()]}
          items={items}
        />
      </Header>
      <Content
        className={
          status === 'succeeded' || status === 'loading' || favourites
            ? 'contentStyle'
            : 'contentStyle contentStyleCenter'
        }
      >
        {/* Основной */}
        {!favourites && <ContentWidget />}
        {/* Избранное */}
        {favourites && <FavoritesWidget />}
      </Content>
    </Layout>
  )
}
