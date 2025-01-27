import json
from models import Song
from sqlalchemy import desc
from models.base import get_db
import random
def get_songs():
        songs = []
        try:    
            db_session= next(get_db())
            new_songs_dirty=db_session.query(Song).order_by(desc(Song.createdAt)).limit(100).all()
            new_songs= [song.to_dict() for song in new_songs_dirty]
            # top_songs_dirty=db_session.query(Song).order_by(desc(Song.numberofLikes)).limit(50).all()
            # top_songs= [song.to_dict() for song in top_songs_dirty]
            # combined_songs=(top_songs+new_songs)
            random.shuffle(new_songs)

            #there is not enough data to get fancy with selections
            # print(combined_songs)
            return new_songs
        except Exception as e:
            print("Error fetching songs:", e)
            return {
                'statusCode': 500,
                'body': json.dumps({'error': 'An error occurred while fetching songs.'})
            }