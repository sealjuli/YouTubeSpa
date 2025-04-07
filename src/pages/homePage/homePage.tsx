import { JSX } from 'react'
import { Layout } from 'antd'
import { LayoutHeader } from '../../features/layoutHeader/layoutHeader'
import { ContentWidget } from '../../widgets/contentWidget/contentWidget'
import './homePageStyle.css'

export const HomePage = (): JSX.Element => {
  return (
    <Layout className="layoutStyle">
      <LayoutHeader />
      <ContentWidget />
    </Layout>
  )
}
