import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./features/employeeSlice";
import { employeesApi } from "../utils/services/employees.service";


// Le store
const store = configureStore({
    reducer: {
        // On importe la propriété reducer de "authSlice" dans le magasin afin qu'elle se reflète dans l'objet d'état racine Redux.
        employee: employeeReducer,

        /**
         * Nous ajoutons le service d'authentification du fichier "/utils/services/auth.service.js" au store.
         * Un service RTKQ génère un « slice reducer » et un middleware personnalisé qui gère la récupération des données.
         * Les deux doivent être ajoutés au magasin Redux.
         */
        [employeesApi.reducerPath]: employeesApi.reducer,

    },

    /**
     * Les middlewares Redux permettent de changer le fonctionnement du store. Cela permet par exemple d’ajouter un
     * système de logging, ou bien de faciliter la manipulation d’action asynchrone.
     */
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(employeesApi.middleware),

});

export default store;
