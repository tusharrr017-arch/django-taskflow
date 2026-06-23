from rest_framework import serializers
from .models import User

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True
    )

    class Meta:
        model = User
        fields = [
            'username',
            'password',
        ]

    def validate(self, attrs):
        if 'role' in self.initial_data:
            raise serializers.ValidationError({
                'role': 'Role cannot be set during registration.',
            })
        return attrs

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            role='employee',
        )

        return user
    
class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User

        fields = [
            'id',
            'username',
            'role'
        ]