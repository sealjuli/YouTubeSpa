import { JSX } from 'react'
import { Layout, Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ContentWidget } from './ContentWidget'
import { MenuInfo } from 'rc-menu/lib/interface'
import { YouTubeSpaRoutes } from '../../shared/helpers/Routes'
import { useAppSelector, useAppDispatch } from '../../shared/hooks/storeHooks'
import {
  selectVideoStatus,
  clearVideosState,
} from '../../shared/redux/slices/videosSlice'
import './HomePageStyle.css'

const { Header, Content } = Layout

const items = [
  { key: 1, label: 'Поиск' },
  { key: 2, label: 'Избранное' },
  { key: 3, label: 'Выйти', style: { marginLeft: 'auto' } },
]

export const HomePage = (): JSX.Element => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const succeedStatus = useAppSelector(selectVideoStatus) === 'succeeded'

  const handleClick = (e: MenuInfo) => {
    console.log('Нажат пункт меню с ключом:', e.key)

    if (e.key === '1') {
      //обнулить стэйт
      dispatch(clearVideosState())
    }

    // if (e.key === '3') {
    //   localStorage.removeItem('token')
    //   navigate(`/${YouTubeSpaRoutes.root}/${YouTubeSpaRoutes.login}`)
    // }
  }

  return (
    <Layout className="layoutStyle">
      <Header className="headerStyle">
        <div className="logo" />
        <Menu
          className="menu"
          onClick={(e) => handleClick(e)}
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
        />
      </Header>
      <Content
        className={
          succeedStatus ? 'contentStyle' : 'contentStyle contentStyleCenter'
        }
      >
        <ContentWidget />
      </Content>
    </Layout>
  )
}
