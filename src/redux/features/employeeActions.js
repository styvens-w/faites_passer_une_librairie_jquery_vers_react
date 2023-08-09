import Axios from "../../utils/services/caller.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

/**
 * On utilise createAsyncThunk pour créer une action qui envoie une requête asynchrone au backend,
 * et qui accepte 3 paramètres : "le type d'action (string), une fonction de rappel et un objet (facultatif)".
 *
 * La fonction de rappel est un paramètre important avec deux arguments clés à prendre en considération lors de l'écriture d'actions Redux.
 *
 * Le premier argument est la valeur unique transmise à la méthode dispatch lorsque l'action est appelée.
 * Si on doit transmettre plusieurs valeurs, on peut transmettre un objet "ici l'objet contenant l'email et le mot de passe".
 *
 * Le deuxième argument est un objet contenant des paramètres généralement passés à une fonction thunk Redux (thunk : morceau de code qui effectue un travail différé).
 * Les paramètres incluent getState, dispatch, rejectWithValue, etc.
 */
export const createEmployee = createAsyncThunk(
    "employees",
    async ({ firstName, lastName, birthDate, street, city, state, startDate, zipCode, department, }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };

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
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);