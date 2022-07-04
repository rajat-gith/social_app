from src.serializers import CommentSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from src.models import Post
from src.serializers import PostSerializer
from src.models import Comment
from rest_framework import status

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

@api_view(['POST'])
def comment(request):
    data=request.data
    print(data)
    try:
        comment=Comment.objects.create(
            post_id=data['post_id'],
            body=data['body'],
            name=data['name'],
        )
        serializer= CommentSerializer(comment,many=True)
        return Response(serializer.data)
    except:
        message={'detail':'some error occcured'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getComments(request):
    comments=Comment.objects.all()
    serializer= CommentSerializer(comments,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getComment(request,post_id):
    comment=Comment.objects.get(_id=post_id)
    serializer=CommentSerializer(comment,many=False)
    return Response(serializer.data)
