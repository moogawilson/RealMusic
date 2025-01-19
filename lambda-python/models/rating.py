from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from .base import Base

class Rating(Base):
    __tablename__ = 'Rating'

    ratingID = Column(Integer, primary_key=True, autoincrement=True)
    createdAt = Column(DateTime, default=func.now())
    userId = Column(Integer, ForeignKey('User.id'), nullable=False)
    songId = Column(String, ForeignKey('Song.id'), nullable=False)
    rating = Column(Integer, nullable=False)

    user = relationship(
        'User', back_populates='Rating'
    )
    song = relationship(
        'Song', back_populates='Rating'
    )

    def to_dict(self):
        return {
            "userId": self.userId,
            "songId": self.songId,
            "rating": self.rating,
            "createdAt": self.createdAt.isoformat() if self.createdAt else None
        }
