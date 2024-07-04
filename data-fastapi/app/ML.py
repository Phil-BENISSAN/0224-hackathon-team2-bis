import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.neighbors import NearestNeighbors

#import csv client-employeur d'anthony

df_recruteurs = pd.read_csv('app/data_recruters_needs.csv')
df_clients = pd.read_csv('app/data_candidates_scores.csv')
df_name = pd.read_csv('app/infos_candidates.csv')


############# Machine Learning Training #############


def get_candidate_id(employeur_id):
    
    col_of_interest_recruteur = [col for col in df_recruteurs.columns if df_recruteurs[col].values[employeur_id] == 1]
    
    X = df_clients[col_of_interest_recruteur]
    
    my_model = NearestNeighbors(n_neighbors=4).fit(X)
    
    idcloser_candidate = my_model.kneighbors(df_recruteurs[col_of_interest_recruteur])[1][0]
        
    return df_name.iloc[idcloser_candidate, :].to_dict(orient='index')