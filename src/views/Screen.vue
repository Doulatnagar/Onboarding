<script>
import { mapGetters } from 'vuex'

export default {
  name: 'GoalScreen',
  computed: {
    ...mapGetters(['getAllGoals', 'loading', 'error']),
    goals() {
      return this.getAllGoals // Access the goals state after it's updated
    },
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    },
  },
  methods: {
    handleGoalClick(id) {
      console.log('Goal clicked:', id)
      this.$router.push({ name: 'Screen2' })
      this.$store.dispatch('postApiDomainData', { id: id })
    },
  },
  created() {
    if (this.getAllGoals.length === 0) {
      this.$store.dispatch('postApiData') // Trigger the API request
    }
  },
}
</script>

<template>
  <v-app>
    <v-main>
      <v-container class="fill-height d-flex flex-column align-center justify-center">
        <div class="text-center mb-8">
          <h1 class="display-1 font-weight-bold white--text">MentoMind</h1>
        </div>
        <v-progress-linear
          :value="loading ? 100 : 0"
          height="7"
          color="blue"
          class="mb-8"
          indeterminate
        ></v-progress-linear>
        <div class="text-center mb-8">
          <h2 class="headline font-weight-bold white--text">Choose your Goal!</h2>
          <p class="subtitle-1 white--text">We will keep you motivated to achieve your goals!</p>
        </div>
        <v-row justify="center" class="options-row">
          <v-col cols="4" class="option-col" v-for="goal in goals" :key="goal.id">
            <v-card class="option-card" outlined>
              <v-card-item>
                <div @click="handleGoalClick(goal.id)">
                  <div class="text-overline mb-1">
                    {{ goal.image }}
                  </div>
                  <div class="text-h6 mb-1 text-left">{{ goal.name }}</div>
                  <div class="text-caption text-left">{{ goal.description }}</div>
                </div>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
body {
  background-image: url('https://placehold.co/1920x1080/0d47a1/0d47a1.png?text=night+sky+with+stars');
  background-size: cover;
  background-position: center;
  font-family: 'Arial', sans-serif;
  transition: transform 0.2s;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  color: #ffffff; /* Set the color for all text within Vuetify components */
}

v-card-item {
  cursor: pointer;
}

.option-col {
  width: 100%;
  display: flex;
}

.options-row {
  display: flex;
  gap: 20px;
  margin-bottom: 5%;
  justify-content: center;
}

.option-card {
  background: #ffffff;
  border-radius: 8px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  height: 90%;
  cursor: pointer;
  transition: transform 0.2s;
}

.option-card:hover {
  transform: scale(1.05);
}
</style>
