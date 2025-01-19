
from models.rating import Rating
from sklearn.metrics.pairwise import cosine_similarity
import pandas as pd
import numpy as np

def get_all(user_token,db):
    ratings = db.query(Rating).all()
    data=pd.DataFrame([rating.to_dict() for rating in ratings])
    user_item_matrix = data.pivot_table(index='userToken', columns='songID', values='rating').fillna(0)
    user_similarity = cosine_similarity(user_item_matrix)
    predictions = predict_ratings(user_token, user_item_matrix, user_similarity)
    recommendations = recommend_songs(user_token, predictions, user_item_matrix)
    formatted_recommendations = [{'id': song_id} for song_id in recommendations.index]

    print(formatted_recommendations)
    return(formatted_recommendations)

def predict_ratings(user_id, user_item_matrix, user_similarity):
    user_idx = user_item_matrix.index.get_loc(user_id)
    sim_scores = user_similarity[user_idx]
   
    # Weighted ratings from similar users
    sim_scores = np.delete(sim_scores, user_idx)  # Remove similarity with itself
    user_ratings = np.delete(user_item_matrix.values, user_idx, axis=0)

    # Compute weighted average of other users' ratings
    weighted_ratings = np.dot(sim_scores, user_ratings) / np.sum(sim_scores)
    print(sim_scores)
    return pd.Series(weighted_ratings, index=user_item_matrix.columns)

def recommend_songs(user_id, predictions, user_item_matrix, n_recommendations=50):
    user_ratings = user_item_matrix.loc[user_id]
    already_rated = user_ratings[user_ratings > 0].index
    recommendations = predictions.drop(already_rated).sort_values(ascending=False)
    return recommendations.head(n_recommendations)
