from multiprocessing import get_context
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics,serializers
from src import models as src_models
from src import serializers as src_serializers
from django.contrib.auth.models import User
from rest_framework.status import HTTP_200_OK,HTTP_400_BAD_REQUEST

class CreateComment(APIView):
    serializer_class = src_serializers.CommentSerializer
    def post(self,request,*args,**kwargs):
        context = {}
        new_comment = src_models.Comment()
        new_comment.post = src_models.Post.objects.get(_id =request.data.get('post'))
        new_comment.user = User.objects.get(id=request.data.get('user'))
        new_comment.body = request.data.get('body')
        new_comment.email = request.data.get('email')
        new_comment.save()
        context['new_comment']=src_serializers.CommentSerializer(new_comment).data
        context['message']="New comment has been added successfully."
        return Response(context,status=HTTP_200_OK)