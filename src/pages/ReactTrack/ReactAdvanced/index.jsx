import { Outlet } from 'react-router-dom'
import ContentLayout from '../../../components/layout/ContentLayout/ContentLayout'
import reactLogo from '../../../assets/react.webp'

function ReactAdvancedIndex() {
  const articles = [
    {
      id: 'react-and-django',
      title: 'React and Django',
      path: '/react/advanced/react-and-django',
    },
    {
      id: 'react-advanced',
      title: 'React Advanced',
      path: '/react/advanced/react-advanced',
    },
    {
      id: 'common-questions',
      title: 'Common Questions',
      path: '/react/advanced/common-questions',
    },
  ]

  return (
    <ContentLayout
      title="React Advanced"
      logo={reactLogo}
      articles={articles}
      backPath="/react/intermediate"
      backLabel="← Back to Intermediate"
      color="#61DAFB"
      basePath="/react/advanced"
    >
      <Outlet />
    </ContentLayout>
  )
}

export default ReactAdvancedIndex

