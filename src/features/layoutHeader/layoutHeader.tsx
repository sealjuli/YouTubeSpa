import { JSX } from 'react'
import { Layout } from 'antd'
import { useAppDispatch } from '../../shared/hooks/storeHooks'
import { clearVideosState } from '../../shared/redux/slices/videosSlice'
import { clearInputValue } from '../../shared/redux/slices/inputValueSlice'
import { setSearch } from '../../shared/redux/slices/menuItemSlice'
import { HeaderMenu } from '../headerMenu/headerMenu'
import './layoutHeaderStyle.css'

const { Header } = Layout

export const LayoutHeader = (): JSX.Element => {
  const dispatch = useAppDispatch()

  const clearPage = () => {
    dispatch(setSearch())
    dispatch(clearVideosState())
    dispatch(clearInputValue())
  }

  return (
    <Header className="headerStyle">
      <div className="logo" onClick={clearPage} />
      <HeaderMenu />
    </Header>
  )
}
