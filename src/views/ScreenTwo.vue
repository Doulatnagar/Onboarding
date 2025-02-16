<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ScreenTwo',
  computed: {
    ...mapGetters(['getQuestions', 'loading', 'error']),
    questions() {
      return this.getQuestions
    },
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    },
  },
  methods: {
    goToRegister() {
      this.$router.push('/register')
    },
  },
}
</script>

<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-row justify="center" class="h-100">
      <v-col cols="12" sm="8" md="6" v-for="question in questions" :key="question.questionId">
        <v-card justify="center" class="question-card">
          <v-card-subtitle class="question-text"> {{ question.questionText }}</v-card-subtitle>
          <v-card-text>
            <v-row justify="center" cols="12" class="options-row">
              <v-col cols="6" class="option-col" @click="goToRegister()">
                <v-card class="option-card" tile>
                  <template v-slot:append>
                    <v-avatar size="24">
                      <v-img alt="Option Image" :src="question.options[0].image"></v-img>
                    </v-avatar>
                  </template>
                  <v-card-text>
                    <span>{{ question.options[0].text }}</span>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="6" class="option-col" @click="goToRegister()">
                <v-card class="option-card">
                  <template v-slot:append>
                    <v-avatar size="24">
                      <v-img alt="Option Image" :src="question.options[1].image"></v-img>
                    </v-avatar>
                  </template>
                  <v-card-text>
                    <span>{{ question.options[1].text }}</span>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <v-row justify="center" cols="12" class="options-row">
              <v-col cols="6" class="option-col" @click="goToRegister()">
                <v-card class="option-card" tile>
                  <template v-slot:append>
                    <v-avatar size="24">
                      <v-img alt="Option Image" :src="question.options[2].image"></v-img>
                    </v-avatar>
                  </template>
                  <v-card-text>
                    <span>{{ question.options[2].text }}</span>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="6" class="option-col" @click="goToRegister()">
                <v-card class="option-card" tile>
                  <template v-slot:append>
                    <v-avatar size="24">
                      <v-img alt="Option Image" :src="question.options[3].image"></v-img>
                    </v-avatar>
                  </template>
                  <v-card-text>
                    <span>{{ question.options[3].text }}</span>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.headline {
  background-color: #446f9a;
  color: white;
  padding: 16px;
}

.v-card-subtitle {
  font-size: 1.2rem;
  font-weight: bold;
}

.background {
  background: linear-gradient(to bottom, #3b5998, #8b9dc3);
  height: 100vh;
  position: relative;
  color: white;
}

.header {
  margin-bottom: 20px;
}

.title {
  font-size: 2.5rem;
  text-align: center;
}

.question-row {
  margin-bottom: 30px;
}

.question-text {
  font-size: 1.5rem;
  text-align: center;
  color: #ffffff;
  margin-bottom: 4%;
}

.question-card {
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.options-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 5%;
  justify-content: center;
}

.option-col {
  width: 200px;
  display: flex;
}

.option-card {
  background: #ffffff;
  border-radius: 8px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  height: 80px;
  cursor: pointer;
  transition: transform 0.2s;
}

.option-card:hover {
  transform: scale(1.05);
}
</style>
