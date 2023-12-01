<template>
    <v-app-bar flat height="70">
        <div :class="smAndDown ? 'w-25 d-flex ml-5' : 'w-25 ml-16'">
            <v-img src="/logo.png" :class="smAndDown ? '' : 'w-50 mb-1 ml-14'"></v-img>
        </div>
        <v-app-bar-title />
        <div :class="smAndDown ? 'w-0 h-0 ma-0 pa-0' : ''">
            <v-btn class="rounded-pill border-app d-flex" :class="smAndDown ? '' : 'pa-6 mr-16 w-75'">
                <p :class="smAndDown ? 'w-0 h-0 ma-0 pa-0' : 'text-body-2'">Consultar Horários</p>
            </v-btn>
        </div>
    </v-app-bar>
</template>

<style scoped>
.border-app {
    border-width: 3px;
    border-color: black;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
}
</style>

<script setup>
import { useDisplay } from 'vuetify';

const { smAndDown } = useDisplay()
</script>