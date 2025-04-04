import { JSX } from 'react'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import { MenuInfo } from 'rc-menu/lib/interface'
import { YouTubeSpaRoutes } from '../../shared/helpers/Routes'
import { useAppSelector, useAppDispatch } from '../../shared/hooks/storeHooks'
import {
  setFavorites,
  setSearch,
  selectCurrentMenuItem,
} from '../../shared/redux/slices/menuItemSlice'
import './HeaderMenuStyle.css'

const items = [
  { key: 0, label: 'Поиск' },
  { key: 1, label: 'Избранное' },
  { key: 2, label: 'Выйти', style: { marginLeft: 'auto' } },
]

export const HeaderMenu = (): JSX.Element => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const menuItem = useAppSelector(selectCurrentMenuItem)

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
    <Menu
      className="menu"
      onClick={(e) => handleClick(e)}
      mode="horizontal"
      selectedKeys={[menuItem.toString()]}
      items={items}
    />
  )
}
