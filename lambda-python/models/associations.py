from sqlalchemy import Table, Column, Integer, String, ForeignKey
from .base import Base

user_listen_history = Table(
    'user_listen_history', 
    Base.metadata,
    Column('user_id', Integer, ForeignKey('User.id'), primary_key=True),
    Column('song_id', String, ForeignKey('Song.id'), primary_key=True)
)

user_like_song = Table(
    'user_like_song', 
    Base.metadata,
    Column('user_id', Integer, ForeignKey('User.id'), primary_key=True),
    Column('song_id', String, ForeignKey('Song.id'), primary_key=True)
)

