from django.db import models

# Create your models here.

from django.contrib.auth.models import User



STATUS = (
    (0,"Draft"),
    (1,"Publish")
)
 
class Post(models.Model):
    user= models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    title = models.CharField(max_length=200, unique=True)
    content = models.TextField()
    creator=models.CharField(max_length=20)
    created_on = models.DateTimeField(auto_now_add=True)
    _id=models.AutoField(primary_key=True,editable=False)
    #image=models.ImageField(null=True,blank=True)

    class Meta:
        ordering = ['-created_on']

    def __str__(self):
        return self.title
    
class Comment(models.Model):
    post=models.ForeignKey(Post,on_delete=models.SET_NULL,null=True)
    user= models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    name = models.CharField(max_length=80)
    email = models.EmailField()
    body = models.TextField()
    _id=models.AutoField(primary_key=True,editable=False)

    def __str__(self):
        return str(self.body)
