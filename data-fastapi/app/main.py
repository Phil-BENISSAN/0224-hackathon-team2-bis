import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import app.hackathon3_qcm_tech as qcm
import app.ML as mlknn
import os

app = FastAPI()

softskills = pd.read_csv('app/softskilltest.csv')
result_candidats = pd.read_csv('app/data_candidates_scores.csv')
needs_recruteur = pd.read_csv('app/data_recruters_needs.csv')

# -------------------------------------------------   CONFIGURATION CORS   ------------------------------------------------------

origins = [
    "http://localhost:8080",
    # Vous pouvez ajouter d'autres origines si nécessaire
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------  INSERER VOTRE CODE ICI -----------------

@app.get('/')
def fn_fast_api():
    return {'div' : "t'as tout compris"}

@app.get('/softskills_test')
def fn_softskills():
    return softskills.to_dict(orient='index')

@app.get('/tech')
def return_tech_domaines():
    return list(qcm.domaines_dict.keys())

@app.get('/tech/{domaine}/{level}')
def return_tech_QCM(domaine, level):
    if domaine in qcm.domaines_dict.keys() and int(level) in [0, 1, 2]:
        return qcm.domaines_dict[domaine][int(level)]

@app.get('/get_candidate/{recruteur_id}')
def return_candidat_selection(recruteur_id):
    return mlknn.get_candidate_id(int(recruteur_id))

@app.get('/candidats_results')
def candidats_test_results () : 
    return result_candidats.to_dict(orient='index')

@app.get('/recruteurs_needs')
def recruteursneeds () : 
    return needs_recruteur.to_dict(orient='index')


# ---------------- FIN DE TON CODE ----------------


#_______________________________________________________________________________________________________________________


if __name__ == '__main__':
    uvicorn.run(app, port=8000, host='0.0.0.0', reload=True)