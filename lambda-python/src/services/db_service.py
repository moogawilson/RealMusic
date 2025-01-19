from models.song import Song
from models.rating import Rating
# from filter.filter_test import get_all
from sqlalchemy import desc
from filter import get_all
# from services.song_service import get_all
# from app import db  

def get_recomended_songs(user_token,song_mode):
    return get_all(user_token) 


def get_all_songs(db):
    songs=db.query(Song).order_by(desc(Song.createdAt)).all()
    return [song.to_dict() for song in songs]

def get_all_ratings():

    return get_all()
    # ratings=Rating.query.all()
    # return [rating.to_dict() for rating in ratings]

    
