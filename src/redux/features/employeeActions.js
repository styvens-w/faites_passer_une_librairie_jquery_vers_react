import Axios from "../../utils/services/caller.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

/**
 * On utilise createAsyncThunk pour créer une action qui envoie une requête asynchrone au backend,
 * et qui accepte 3 paramètres : "le type d'action (string), une fonction de rappel et un objet (facultatif)".
 *
 * La fonction de rappel est un paramètre important avec deux arguments clés à prendre en considération lors de l'écriture d'actions Redux.
 *
 * Le premier argument est la valeur unique transmise à la méthode dispatch lorsque l'action est appelée.
 * Si on doit transmettre plusieurs valeurs, on peut transmettre un objet "ici l'objet contenant (firstName, lastName, birthDate, street, city, state, startDate, zipCode, department)".
 *
 * Le deuxième argument est un objet contenant des paramètres généralement passés à une fonction thunk Redux (thunk : morceau de code qui effectue un travail différé).
 * Les paramètres incluent getState, dispatch, rejectWithValue, etc.
 */
export const createEmployee = createAsyncThunk(
    "employees",

    async ({ firstName, lastName, birthDate, street, city, state, startDate, zipCode, department }, { rejectWithValue }) => {
        // On utilise "try...catch" pour regrouper des instructions à exécuter et définir une réponse si l'une de ces instructions provoque une exception.
        try {
            // On configure le type de contenu de l'en-tête en tant que JSON (pour la requête axios).
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };

            // La requête axios. Ici, j'utilise le service "Axios" que j'ai créé dans le fichier /src/utils/services/caller.service.js
            await Axios.post(
                `/createEmployee`,
                {
                    firstName,
                    lastName,
                    birthDate,
                    street,
                    city,
                    state,
                    startDate,
                    zipCode,
                    department,
                },
                config
            );

        // Si une erreur se produit, "thunkAPI.rejectWithValue" renverra le message d'erreur personnalisé du backend en tant que charge utile au reducer.
        } catch (error) {
            // On renvoie un message d'erreur personnalisé de l'API, le cas échéant.
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);