import { Outlet } from 'react-router-dom'
import ContentLayout from '../../../components/layout/ContentLayout/ContentLayout'
import reactLogo from '../../../assets/react.webp'

function ReactIntroIndex() {
  const articles = [
    {
      id: 'react-basics',
      title: 'React Basics Q&A',
      path: '/react/intro/react-basics',
    },
  ]

  return (
    <ContentLayout
      title="React Intro"
      logo={reactLogo}
      articles={articles}
      backPath="/react"
      backLabel="← Back to React Track"
      color="#61DAFB"
      basePath="/react/intro"
    >
      <Outlet />
    </ContentLayout>
  )
}

export default ReactIntroIndex

