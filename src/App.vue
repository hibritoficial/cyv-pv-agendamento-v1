<template>
  <v-app>
    <v-main>
      <div>
        <v-img src="/bloco1.jpg">
          TESTE
        </v-img>
      </div>

      <div class="bg-black">
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <h1>INSERIR CARDS</H1>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
      </div>

      <div>
        <v-img src="/bloco3.png">
        </v-img>
      </div>

      <div>
        <v-img src="/bloco4.png">
        </v-img>
      </div>
      <Home />
      <AppBar />
    </v-main>
  </v-app>
</template>

<script setup>
import Home from '@/components/Home.vue'
import AppBar from '@/components/AppBar.vue'
</script>
