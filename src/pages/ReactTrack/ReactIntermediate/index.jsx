import { Outlet } from 'react-router-dom'
import ContentLayout from '../../../components/layout/ContentLayout/ContentLayout'
import reactLogo from '../../../assets/react.webp'

function ReactIntermediateIndex() {
  const articles = [
    {
      id: 'intermediate-qa',
      title: 'Intermediate Q&A',
      path: '/react/intermediate/intermediate-qa',
    },
    {
      id: 'project',
      title: 'Project',
      path: '/react/intermediate/project',
    },
  ]

  return (
    <ContentLayout
      title="React Intermediate"
      logo={reactLogo}
      articles={articles}
      backPath="/react/intro"
      backLabel="← Back to Intro"
      color="#61DAFB"
      basePath="/react/intermediate"
    >
      <Outlet />
    </ContentLayout>
  )
}

export default ReactIntermediateIndex

