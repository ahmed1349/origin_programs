import { Outlet } from 'react-router-dom'
import ContentLayout from '../../../components/layout/ContentLayout/ContentLayout'

function DjangoIntermediateIndex() {
  const articles = [
    {
      id: 'intermediate-qa',
      title: 'Django Intermediate Q&A',
      path: '/django/intermediate/intermediate-qa',
    },
    {
      id: 'project',
      title: 'Project',
      path: '/django/intermediate/project',
    },
  ]

  return (
    <ContentLayout
      title="Django Intermediate"
      logo="🐍"
      articles={articles}
      backPath="/django/intro"
      backLabel="← Back to Intro"
      color="#092E20"
      basePath="/django/intermediate"
    >
      <Outlet />
    </ContentLayout>
  )
}

export default DjangoIntermediateIndex

