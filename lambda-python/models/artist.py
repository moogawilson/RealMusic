from sqlalchemy import Column, String, Integer, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from .base import Base

class Artist(Base):
    __tablename__ = 'Artist'
    
    id = Column(String, primary_key=True)
    channelTitle = Column(String)
    songs=   relationship('Song',back_populates='artist')
    
    def to_dict(self):
        return {
            "id": self.id,
            "channelTitle": self.channelTitle,
            "listens": self.listens
        }
