import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    goals: [], // To store goals
    apiData: null, // Store API response data if needed
    loading: false, // Loading state
    error: null, // Error state
  },
  mutations: {
    ADD_GOAL(state, goal) {
      state.goals.push(goal) // Mutation to add a single goal
    },
    SET_GOALS(state, goals) {
      state.goals = goals // Mutation to set the goals from API response
    },
    ADD_QUESTION(state, question) {
      state.questions.push(question) // Mutation to add a single question
    },
    ADD_QUESTIONS(state, questions) {
      state.questions = questions // Mutation to set the questions from API response
    },
    SET_API_DATA(state, data) {
      state.apiData = data // Store API response data (optional)
    },
    SET_LOADING(state, status) {
      state.loading = status // Set loading state
    },
    SET_ERROR(state, error) {
      state.error = error // Set error state
    },
  },
  actions: {
    addGoal({ commit }, goal) {
      commit('ADD_GOAL', goal) // Action to add a goal
    },
    addQuestion({ commit }, question) {
      commit('ADD_QUESTION', question) // Action to add a question
    },
    async postApiData({ commit }) {
      commit('SET_LOADING', true) // Set loading to true before the API request
      commit('SET_ERROR', null) // Reset error before making the request

      try {
        const response = await axios.post(
          'https://4caeisr4q3.execute-api.us-east-1.amazonaws.com/mentoassignment/assignment/onboarding/start',
          {
            newUser: true,
            deviceId: '387c2863-6ee3-4a56-8210-225f774edade',
            appFlavour: 'DEV',
            versionNumber: '3.1.0',
            courseId: 'dbcf0666-8429-42a3-91dc-5bfe5e31e6e1',
          },
        )
        console.log(response.data) // Log the response data
        commit('SET_GOALS', response.data.domains) // Commit the API response to goals
      } catch (error) {
        commit('SET_ERROR', error) // If error, commit error to the store
      } finally {
        commit('SET_LOADING', false) // Set loading to false after the request completes
      }
    },
    async postApiDomainData({ id, commit }) {
      commit('SET_LOADING', true) // Set loading to true before the API request
      commit('SET_ERROR', null) // Reset error before making the request

      try {
        const response = await axios.post(
          'https://4caeisr4q3.execute-api.us-east-1.amazonaws.com/mentoassignment/assignment/onboarding/domains',
          {
            selectedDomainId: id,
          },
        )
        console.log(response.data) // Log the response data
        commit('ADD_QUESTIONS', response.data) // Commit the API response to goals
      } catch (error) {
        commit('SET_ERROR', error) // If error, commit error to the store
      } finally {
        commit('SET_LOADING', false) // Set loading to false after the request completes
      }
    },
  },
  getters: {
    getAllGoals: (state) => state.goals, // Getter to access all goals
    getGoalById: (state) => (id) => state.goals.find((goal) => goal.id === id), // Getter for specific goal by ID
    getQuestions: (state) => state.questions, // Getter to access all questions
    apiData: (state) => state.apiData, // Getter for API response data
    loading: (state) => state.loading, // Getter for loading state
    error: (state) => state.error, // Getter for error state
  },
})
