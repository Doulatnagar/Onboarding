<template>
  <v-app>
    <v-main>
      <v-container class="fill-height d-flex flex-column align-center justify-center">
        <div class="text-center mb-8">
          <h1 class="display-1 font-weight-bold white--text">MentoMind</h1>
        </div>
        <v-progress-linear :value="25" height="7" color="blue" class="mb-8"></v-progress-linear>
        <div class="text-center mb-8">
          <h2 class="headline font-weight-bold white--text">Choose your Goal!</h2>
          <p class="subtitle-1 white--text">We will keep you motivated to achieve your goals!</p>
        </div>
        <v-row justify="center" class="d-flex mb-8">
          <v-col cols="4" class="d-flex justify-center">
            <v-card class="mx-auto" outlined>
              <v-card-title>
                <v-avatar size="40" class="mr-4"> Image one </v-avatar>
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="4" class="d-flex justify-center">
            <v-card class="mx-auto" outlined>
              <v-card-title>
                <v-avatar size="40" class="mr-4"> Image two </v-avatar>
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
        <v-img
          src="https://storage.googleapis.com/a1aa/image/pent1oqseVa-wViDB9xzafHyJaqTHPjzS5xXeWPrO1I.jpg"
          alt="Green landscape"
          class="w-100"
        ></v-img>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'OnboardingScreen1',
}
</script>

<style>
body {
  background-color: #0d47a1;
  background-image: url('https://placehold.co/1920x1080/0d47a1/0d47a1.png?text=night+sky+with+stars');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  font-family: 'Arial', sans-serif;
}
</style>
