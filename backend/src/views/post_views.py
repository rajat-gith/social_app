from rest_framework.decorators import api_view
from rest_framework.response import Response
from src.models import Post
from src.serializers import PostSerializer


@api_view(['GET'])
def getPosts(request):
    posts=Post.objects.all()
    serializer=PostSerializer(posts,many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getPost(request,pk):
    product=Post.objects.get(_id=pk)
    serializer=PostSerializer(product,many=False)
    return Response(serializer.data)