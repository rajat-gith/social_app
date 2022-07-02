from django.urls import path
from src.views import user_views as views 

urlpatterns =[
    path('register/',views.registerUser,name='register'),
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
]