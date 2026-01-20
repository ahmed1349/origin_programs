import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Topics from '../pages/Topics/Topics'
import ReactTrack from '../pages/ReactTrack/ReactTrack'
import ReactIntroIndex from '../pages/ReactTrack/ReactIntro/index'
import ReactBasicsQA from '../pages/ReactTrack/ReactIntro/ReactBasicsQA'
import ReactIntermediateIndex from '../pages/ReactTrack/ReactIntermediate/index'
import IntermediateQA from '../pages/ReactTrack/ReactIntermediate/IntermediateQA'
import ReactAdvancedIndex from '../pages/ReactTrack/ReactAdvanced/index'
import ReactAndDjango from '../pages/ReactTrack/ReactAdvanced/ReactAndDjango'
import ReactAndDjangoQA from '../pages/ReactTrack/ReactAdvanced/ReactAndDjangoQA'
import ReactAdvancedArticle from '../pages/ReactTrack/ReactAdvanced/ReactAdvancedArticle'
import JsTrack from '../pages/JsTrack/JsTrack'
import JsIntro from '../pages/JsTrack/JsIntro'
import JsIntermediate from '../pages/JsTrack/JsIntermediate'
import JsAdvanced from '../pages/JsTrack/JsAdvanced'
import DjangoTrack from '../pages/DjangoTrack/DjangoTrack'
import DjangoIntroIndex from '../pages/DjangoTrack/DjangoIntro/index'
import DjangoBasicsQA from '../pages/DjangoTrack/DjangoIntro/DjangoBasicsQA'
import DjangoIntermediateIndex from '../pages/DjangoTrack/DjangoIntermediate/index'
import DjangoIntermediateQA from '../pages/DjangoTrack/DjangoIntermediate/IntermediateQA'
import DjangoAdvancedIndex from '../pages/DjangoTrack/DjangoAdvanced/index'
import DjangoAdvancedQA from '../pages/DjangoTrack/DjangoAdvanced/AdvancedQA'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/topics',
    element: <Topics />,
  },
  {
    path: '/react',
    element: <ReactTrack />,
  },
  {
    path: '/react/intro',
    element: <ReactIntroIndex />,
    children: [
      {
        path: 'react-basics',
        element: <ReactBasicsQA />,
      },
    ],
  },
  {
    path: '/react/intermediate',
    element: <ReactIntermediateIndex />,
    children: [
      {
        path: 'intermediate-qa',
        element: <IntermediateQA />,
      },
    ],
  },
  {
    path: '/react/advanced',
    element: <ReactAdvancedIndex />,
    children: [
      {
        path: 'react-and-django',
        element: <ReactAndDjango />,
      },
      {
        path: 'react-advanced',
        element: <ReactAdvancedArticle />,
      },
      {
        path: 'common-questions',
        element: <ReactAndDjangoQA />,
      },
    ],
  },
  {
    path: '/javascript',
    element: <JsTrack />,
  },
  {
    path: '/javascript/intro',
    element: <JsIntro />,
  },
  {
    path: '/javascript/intermediate',
    element: <JsIntermediate />,
  },
  {
    path: '/javascript/advanced',
    element: <JsAdvanced />,
  },
  {
    path: '/django',
    element: <DjangoTrack />,
  },
  {
    path: '/django/intro',
    element: <DjangoIntroIndex />,
    children: [
      {
        path: 'django-basics',
        element: <DjangoBasicsQA />,
      },
    ],
  },
  {
    path: '/django/intermediate',
    element: <DjangoIntermediateIndex />,
    children: [
      {
        path: 'intermediate-qa',
        element: <DjangoIntermediateQA />,
      },
    ],
  },
  {
    path: '/django/advanced',
    element: <DjangoAdvancedIndex />,
    children: [
      {
        path: 'advanced-qa',
        element: <DjangoAdvancedQA />,
      },
    ],
  },
])

