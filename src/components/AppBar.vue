<template>
    <v-app-bar flat height="64">
        <div :class="smAndDown ? 'w-50 ml-2' : 'w-25 ml-16'">
            <v-img src="logo.png" :class="smAndDown ? 'w-75' : 'w-75 mb-1'"></v-img>
        </div>
        
        <v-app-bar-title />

        <div :class="smAndUp ? 'mr-3' : 'd-none'">
            <v-btn class="bg-primary rounded-xl text-terciary" :class="smAndUp ? 'text-body-2' : ''">
                Agendar Consulta Integrativa
            </v-btn>
        </div>

        <div :class="smAndUp ? 'd-none' : 'mr-2'">
            <v-btn class="bg-primary rounded-xl text-terciary" :class="smAndUp ? '' : 'text-body-2'">
                Agendar Consulta
            </v-btn>
        </div>
    </v-app-bar>
</template>


<style scoped>

</style>


<script setup>
import { useDisplay } from 'vuetify';

const { smAndDown, smAndUp } = useDisplay()
</script>