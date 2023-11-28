<template>
    <v-app-bar flat height="200">
        <v-img src="/logo.png" :class="smAndDown ? '' : 'mb-4 h-75'"></v-img>
        <v-app-bar-title />
        <v-btn class="rounded-pill border-app d-flex justify-center align-center"
            :class="smAndDown ? '' : 'mr-16 mt-10 pa-7'">Consultar Horários</v-btn>
    </v-app-bar>
</template>

<style scoped>
.border-app {
    border-width: 3px;
    border-color: black;
}
</style>

<script setup>
import { useDisplay } from 'vuetify';

const { smAndDown } = useDisplay()
</script>