import { Outlet } from 'react-router-dom'
import ContentLayout from '../../../components/layout/ContentLayout/ContentLayout'

function DjangoIntroIndex() {
  const articles = [
    {
      id: 'django-basics',
      title: 'Django Basics Q&A',
      path: '/django/intro/django-basics',
    },
  ]

  return (
    <ContentLayout
      title="Django Intro"
      logo="🐍"
      articles={articles}
      backPath="/django"
      backLabel="← Back to Django Track"
      color="#092E20"
      basePath="/django/intro"
    >
      <Outlet />
    </ContentLayout>
  )
}

export default DjangoIntroIndex

