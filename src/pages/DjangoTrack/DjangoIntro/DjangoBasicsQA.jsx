import './Article.css'

function DjangoBasicsQA() {
  const qaData = [
    {
      question: 'What is Django?',
      answerPoints: [
        'Django is a high-level Python web framework designed to help you build secure, scalable, and maintainable web applications fast',
        'It follows the philosophy: "Don\'t Repeat Yourself" (DRY) and "Batteries Included"',
        'That means:',
        '  • Authentication? Built-in',
        '  • ORM? Built-in',
        '  • Admin panel? Built-in',
        '  • Security protections? Built-in',
        'Django is boring — and that\'s a good thing. Boring software survives'
      ],
      code: `pip install django
django-admin startproject myproject`
    },
    {
      question: 'Why should I use Django instead of Flask or FastAPI?',
      answerPoints: [
        'Use Django when:',
        '  • You want a full system, not loose parts',
        '  • You care about long-term maintenance',
        '  • You need authentication, permissions, admin dashboards',
        '  • You\'re building a real product, not a demo',
        'Use Flask/FastAPI when you want flexibility',
        'Use Django when you want discipline'
      ],
      code: `Django:
- ORM
- Admin
- Auth
- Middleware
- Migrations

Flask:
- You build everything yourself`
    },
    {
      question: 'What is the Django MVT architecture?',
      answerPoints: [
        'Django uses MVT, not MVC',
        'Model → Database logic',
        'View → Business logic (NOT templates)',
        'Template → UI (HTML)',
        'Controller logic lives inside Views, not Templates'
      ],
      code: `# views.py
from django.http import HttpResponse

def home(request):
    return HttpResponse("Hello Django")`
    },
    {
      question: 'What is a Django Project?',
      answerPoints: [
        'A project is the whole system:',
        '  • Settings',
        '  • URLs',
        '  • Config',
        '  • Apps',
        'Think of it as the container'
      ],
      code: `django-admin startproject config

Structure:
config/
 ├── settings.py
 ├── urls.py
 ├── asgi.py
 ├── wsgi.py`
    },
    {
      question: 'What is a Django App?',
      answerPoints: [
        'An app is a single responsibility unit:',
        '  • users',
        '  • products',
        '  • orders',
        '  • payments',
        'Big apps die. Small focused apps scale'
      ],
      code: `python manage.py startapp users

Structure:
users/
 ├── models.py
 ├── views.py
 ├── urls.py`
    },
    {
      question: 'What is manage.py?',
      answerPoints: [
        'manage.py is Django\'s command-line Swiss Army knife',
        'Used for:',
        '  • Running the server',
        '  • Migrations',
        '  • Creating users',
        '  • Running tests'
      ],
      code: `python manage.py runserver
python manage.py makemigrations
python manage.py migrate`
    },
    {
      question: 'What is the Django ORM?',
      answerPoints: [
        'The ORM lets you work with the database using Python objects, not SQL',
        'It prevents SQL injection and keeps code readable'
      ],
      code: `from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=6, decimal_places=2)`
    },
    {
      question: 'What are migrations?',
      answerPoints: [
        'Migrations are Django\'s way of version-controlling your database',
        'Change model → create migration → apply migration',
        'No cowboy SQL in production'
      ],
      code: `python manage.py makemigrations
python manage.py migrate`
    },
    {
      question: 'What is the Django Admin Panel?',
      answerPoints: [
        'Django gives you a production-ready admin dashboard for free',
        'This alone saves weeks of work'
      ],
      code: `# admin.py
from django.contrib import admin
from .models import Product

admin.site.register(Product)`
    },
    {
      question: 'What are Django Views?',
      answerPoints: [
        'Views handle:',
        '  • Request',
        '  • Business logic',
        '  • Response',
        'They do not render UI only — they control behavior'
      ],
      code: `from django.http import JsonResponse

def api_status(request):
    return JsonResponse({"status": "ok"})`
    },
    {
      question: 'What are Django URLs?',
      answerPoints: [
        'URLs map requests to views',
        'No magic. Explicit routing'
      ],
      code: `# urls.py
from django.urls import path
from .views import home

urlpatterns = [
    path("", home),
]`
    },
    {
      question: 'What are Django Templates?',
      answerPoints: [
        'Templates are presentation only',
        'No business logic. No database calls',
        'If you do logic here, you\'re doing it wrong'
      ],
      code: `<h1>Hello {{ user.username }}</h1>`
    },
    {
      question: 'What is Django Middleware?',
      answerPoints: [
        'Middleware sits between request and response',
        'Used for:',
        '  • Authentication',
        '  • Logging',
        '  • Security',
        '  • Request modification'
      ],
      code: `class SimpleMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        return response`
    },
    {
      question: 'What is Django Authentication?',
      answerPoints: [
        'Django ships with:',
        '  • Users',
        '  • Groups',
        '  • Permissions',
        '  • Password hashing',
        '  • Sessions',
        'Most frameworks make you build this. Django hands it to you'
      ],
      code: `from django.contrib.auth.models import User

User.objects.create_user(
    username="ahmed",
    password="secure123"
)`
    },
    {
      question: 'What is Django REST Framework (DRF)?',
      answerPoints: [
        'DRF turns Django into a serious backend API',
        'Used when:',
        '  • React / Flutter frontend',
        '  • Mobile apps',
        '  • Microservices',
        'Industry standard'
      ],
      code: `from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(["GET"])
def health(request):
    return Response({"status": "ok"})`
    },
    {
      question: 'What should I know before using Django?',
      answerPoints: [
        'You must understand:',
        '  • Python basics',
        '  • HTTP (GET, POST, status codes)',
        '  • Databases (tables, relations)',
        '  • Virtual environments',
        'Django won\'t save you from bad fundamentals'
      ],
      code: `python -m venv venv
source venv/bin/activate`
    },
    {
      question: 'When is Django a bad choice?',
      answerPoints: [
        'Django is NOT ideal if:',
        '  • You need ultra-low latency APIs only',
        '  • You want extreme flexibility',
        '  • You hate structure',
        'Django forces order. Rebels complain. Professionals adapt'
      ],
      code: null
    }
  ]

  return (
    <div className="article-content">
      <div className="article-header">
        <h1 className="article-title">Django Basics Q&A</h1>
      </div>

      <div className="article-body">
        {qaData.map((qa, index) => (
          <div key={index} className="qa-section">
            <div className="qa-question">
              <span className="question-icon">❓</span>
              <h2 className="question-text">{qa.question}</h2>
            </div>
            
            <div className="qa-answer">
              <h3 className="answer-label">Answer:</h3>
              {qa.answerPoints ? (
                <ul className="answer-points">
                  {qa.answerPoints.map((point, idx) => {
                    const isNested = point.startsWith('  •');
                    return (
                      <li 
                        key={idx} 
                        className="answer-point"
                        data-nested={isNested}
                      >
                        {point}
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="answer-text">{qa.answer}</p>
              )}
            </div>

            {qa.code && (
              <div className="qa-code">
                <pre className="code-block">
                  <code>{qa.code}</code>
                </pre>
              </div>
            )}
          </div>
        ))}

        <div className="final-thought">
          <h2 className="final-title">Final Opinion (No Sugar-Coating)</h2>
          <p className="final-text">
            Django is:
          </p>
          <ul className="final-list">
            <li>Not trendy</li>
            <li>Not flashy</li>
            <li>Not hype-driven</li>
          </ul>
          <p className="final-text emphasis">
            And that's exactly why banks, governments, and real businesses use it.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DjangoBasicsQA

