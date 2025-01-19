from sqlalchemy import Column, String, Integer, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from .base import Base
from .associations import user_listen_history,user_like_song
from .song_queue import SongQueue #required for import


class Song(Base):
    __tablename__ = 'Song'
    
    id = Column(String, primary_key=True)
    createdAt = Column(DateTime, default=func.now())
    listens = Column(Integer, nullable=False, default=0)
    numberofLikes = Column(Integer, nullable=False, default=0)
    published=Column(String, nullable=False)
    title=Column(String, nullable=False)
    
    Rating = relationship('Rating', back_populates='song')
    listeners = relationship(
        'User', secondary=user_listen_history, back_populates='listenedSongs'
    )
    likes = relationship(
        'User', secondary=user_like_song, back_populates='likedSongs'
    )
    queuedBy = relationship('SongQueue', back_populates='song')

    artist= relationship('Artist',back_populates='songs')

  
    artistId= Column(String, ForeignKey('Artist.id'))

    def to_dict(self):
        return {
            "id": self.id,
            "published": self.published,
            "listens": self.listens,
            "likes":self.numberofLikes,
            "artistName":self.artist.channelTitle,
            "artistChannel":self.artist.id,
            "title":self.title,

        }
