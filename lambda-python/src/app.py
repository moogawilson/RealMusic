import json
# from src.services.filter import get_all
from models import Song
from sqlalchemy import desc
from models.base import get_db
from .engine.selection_engine import get_songs

def lambda_handler(event, context):
    query_params = event.get('queryStringParameters', {})
    songs=get_songs()
  
    

    if songs:
        return {
            'statusCode': 200,
            'body': json.dumps(songs)
        }
    return {
        'statusCode': 404,
        'body': json.dumps({'error': 'No songs found.'})
    }
