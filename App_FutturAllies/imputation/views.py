from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
import pandas as pd
import joblib
import os
import sklearn
print(sklearn.__version__)


class ImputeDataView(APIView):
    parser_classes = [JSONParser]

    def post(self, request, *args, **kwargs):
        try:
            # Charger le modèle sauvegardé
            model_path = os.path.join('C://Users//vertu//Documents//s9//machine_learning//Projet_de_Zio', 'knn_imputer_model.pkl')
            imputer = joblib.load(model_path)
            
            # Récupérer les données envoyées par le frontend
            input_data = request.data.get("data")
            if not input_data:
                return Response({"error": "Aucune donnée fournie"}, status=400)

            # Convertir en DataFrame
            df = pd.DataFrame(input_data)

            # Appliquer l'imputation
            imputed_data = imputer.transform(df)
            imputed_df = pd.DataFrame(imputed_data, columns=df.columns)

            # Retourner les données imputées
            return Response({"data": imputed_df.to_dict(orient="records")}, status=200)

        except Exception as e:
            return Response({"error": str(e)}, status=500)
