import { Outlet } from 'react-router-dom'
import ContentLayout from '../../../components/layout/ContentLayout/ContentLayout'

function DjangoAdvancedIndex() {
  const articles = [
    {
      id: 'advanced-qa',
      title: 'Django Advanced Q&A',
      path: '/django/advanced/advanced-qa',
    },
  ]

  return (
    <ContentLayout
      title="Django Advanced"
      logo="🐍"
      articles={articles}
      backPath="/django/intermediate"
      backLabel="← Back to Intermediate"
      color="#092E20"
      basePath="/django/advanced"
    >
      <Outlet />
    </ContentLayout>
  )
}

export default DjangoAdvancedIndex

