from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, UniqueConstraint
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from .base import Base

class SongQueue(Base):
    __tablename__ = 'SongQueue'

    id = Column(Integer, primary_key=True, autoincrement=True)
    userId = Column(Integer, ForeignKey('User.id'), nullable=False)
    songId = Column(String, ForeignKey('Song.id'), nullable=False)
    createdAt = Column(DateTime, default=func.now())

    user = relationship(
        'User', back_populates='songQueue'
    )
    song = relationship(
        'Song', back_populates='queuedBy'
    )

    __table_args__ = (
        UniqueConstraint('userId', 'songId', name='user_song_unique_constraint'),
    )

    def to_dict(self):
        return {
            "userId": self.userId,
            "songId": self.songId,
            "createdAt": self.createdAt.isoformat() if self.createdAt else None
        }
