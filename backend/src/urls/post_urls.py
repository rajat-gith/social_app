from django.urls import path
from src.views import post_views as views

urlpatterns =[
    path('',views.getPosts,name='posts'),
    path('<int:pk>/',views.getPost,name='post'),
    path('postcomment/',views.comment,name='comment'),
    path('comments/',views.getComments,name='comments'),
    path('comments/<int:post_id>',views.getComment,name="comment")
]