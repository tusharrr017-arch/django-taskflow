from django.urls import path
from .views import RegisterView,UserListView,MeView

urlpatterns = [
    path(
        'signup/',
        RegisterView.as_view(),
        name='signup'
    ),
     path(
        'users/',
        UserListView.as_view(),
        name='users'
    ),
    path(
    'me/',
    MeView.as_view(),
    name='me'
),
]