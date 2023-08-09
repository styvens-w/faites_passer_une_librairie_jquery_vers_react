// Point d'entrée spécifique à React pour permettre de générer des hooks React
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/**
 * "createApi" est le cœur de la fonctionnalité de RTK Query. Il nous permet de définir un ensemble de
 * "points de terminaison" décrivant comment récupérer des données à partir de l'API backend.
 *
 * "reducerPath" est une clé unique sur laquelle notre service sera monté dans notre store. Il est par défaut à 'api'.
 *
 * "baseQuery" est utilisé par chaque point de terminaison défini si l'option 'queryFn' n'est pas spécifiée.
 * RTK Query fournit un utilitaire appelé 'fetchBaseQuery' qui est un wrapper léger autour de fetch.
 *
 */
export const employeesApi = createApi({
    reducerPath: "employeesApi",
    baseQuery: fetchBaseQuery({
        // URL de base de l'API backend
        baseUrl: "http://localhost:3001/api/v1",
    }),

    // .
    /**
     * Les "endpoints" sont un ensemble d'opérations que nous souhaitons effectuer sur notre serveur.
     * Ils sont définis comme un objet utilisant la syntaxe du builder.
     *
     * Il existe deux types de points de terminaison de base : requête et mutation.
     * Ci-dessous, On crée un endpoints de requête qui envoie une requête "POST" à la route du profil.
     */
    endpoints: (builder) => ({
        getEmployees: builder.query({
            query: () => ({
                url: "/getEmployees",
                method: "POST",
            }),
        }),
    }),
});

// On exporte les hooks pour les utiliser dans les composants fonctionnels, qui sont généré automatiquement en fonction des endpoints définis.
export const { useGetEmployeesQuery } = employeesApi;

/**
 * Nous sommes maintenant prêt à exécuter useGetEmployeesQuery dans un composant.
 * Nous l'utiliserons dans le composant Header car il reste visible sur chaque page de l'application.
 */