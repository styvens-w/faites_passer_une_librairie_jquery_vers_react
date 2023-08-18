import { createSlice } from "@reduxjs/toolkit";
import { createEmployee } from "./employeeActions";


// Le state initial
const initialState = {
    loading: false,
    employeesInfos: null,
    error: null,
    success: false,
};

/**
 * createSlice permet de créer une tranche redux qui représente une seule unité d'état Redux.
 * Il s'agit d'un ensemble de logiques et d'actions de réducteur pour une seule fonctionnalité de votre application,
 * généralement définies ensemble dans un seul fichier.
 *
 * J'ai décidé de séparer les reducers et les actions en deux fichiers "authSlice et authAction" pour rendre mon code plus lisible.
 */
const employeeSlice = createSlice({
    // Le nom du slice
    name: "employees",

    // Le state initial
    initialState,

    // "reducers" permet de définir les actions et le reducer
    reducers: {
        // L'action setCredentials qui permet de mettre à jour la valeur du store.
        setCredentials: (state, { payload }) => {
            state.employeesInfos = payload.body;
        },
    },

    /**
     * "extraReducers" permet à "createSlice" de répondre à d'autres types d'action en plus des types qu'il a générés.
     *
     * Comme les réducteurs de cas spécifiés avec extraReducers sont destinés à référencer des actions "externes", ils n'auront pas d'actions générées dans slice.actions.
     *
     * Comme pour reducers, ces réducteurs de cas seront également transmis à createReducer et pourront "muter" leur état en toute sécurité.
     *
     * La méthode d'utilisation recommandée d'extraReducers consiste à utiliser un rappel qui reçoit une "ActionReducerMapBuilder" instance.
     *
     * Les actions créées avec createAsyncThunk génèrent trois types d'action de cycle de vie possibles : 'pending', 'fulfilled' et 'rejected'.
     * On peut utiliser ces types d'action dans la propriété "extraReducers" de "authSlice" pour apporter les modifications appropriées à notre état.
     */
    extraReducers: (builder) => {
        // reducer pour la création d'un employee
        builder
            .addCase(createEmployee.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(createEmployee.fulfilled, (state) => {
                state.loading = false;
                state.success = true; // ajout réussi
            })

            .addCase(createEmployee.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            });
    },
});

export const { setCredentials } = employeeSlice.actions;

export default employeeSlice.reducer;