import { JSX } from 'react'
import { Layout } from 'antd'
import { LayoutHeader } from '../../features/LayoutHeader/LayoutHeader'
import { ContentWidget } from '../../widgets/ContentWidget/ContentWidget'
import './HomePageStyle.css'

export const HomePage = (): JSX.Element => {
  return (
    <Layout className="layoutStyle">
      <LayoutHeader />
      <ContentWidget />
    </Layout>
  )
}
