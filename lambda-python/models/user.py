from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from .base import Base

class User(Base):
    __tablename__ = 'User'

    id = Column(Integer, primary_key=True, autoincrement=True)
    email = Column(String, unique=True, nullable=False)
    name = Column(String, nullable=False)
    createdAt = Column(DateTime, default=func.now())

    Rating = relationship('Rating', back_populates='user')
    listenedSongs = relationship(
        'Song',
        secondary='user_listen_history',
        back_populates='listeners'
    )
    likedSongs = relationship(
        'Song',
        secondary='user_like_song',
        back_populates='likes'
    )
    songQueue = relationship(
        'SongQueue',
        back_populates='user'
    )

    def to_dict(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "createdAt": self.createdAt.isoformat() if self.createdAt else None
        }
