<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-row justify="center" class="h-100">
      <v-col cols="12" sm="8" md="6">
        <v-card class="question-card">
          <v-card-title>
            <h3 class="text-center">Great! Almost There</h3>
          </v-card-title>

          <v-card-text class="d-flex flex-column align-center text-white">
            <v-text-field label="What should we call you?" v-model="name" required>
              What should we call you?
            </v-text-field>
            <input type="text" v-model="name" placeholder="Name" class="username" />
          </v-card-text>
          <v-card-text class="d-flex flex-column align-center text-white">
            <v-text-field label="What should we call you?" v-model="name" required>
              Please provide your phone number
            </v-text-field>
            <input type="text" v-model="phoneNumber" placeholder="Phone Number" class="username" />
          </v-card-text>

          <v-card-actions class="d-flex justify-center">
            <button type="submit" class="submitClass" @click="submitForm">Submit</button>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'RegisterForm',
  data() {
    return {
      name: '',
      phoneNumber: '',
    }
  },
  methods: {
    submitForm() {
      console.log('Name:', this.name)
      console.log('Phone Number:', this.phoneNumber)
    },
  },
}
</script>

<style>
.question-card {
  display: grid;
  gap: 70px;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
}

.username {
  margin-top: 10px;
  padding: 5px;
  border-radius: 5px;
  background-color: #ffffff;
}

.submitClass {
  background-color: #446f9a;
  color: white;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  width: 60%;
  margin-top: 10px;
}
</style>
