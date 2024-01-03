<template>
    <v-app-bar flat height="64">
        <div :class="smAndDown ? 'w-50 ml-2' : 'w-25 ml-16'">
            <v-img src="/logo.png" :class="smAndDown ? 'w-75' : 'w-75 mb-1'"></v-img>
        </div>
        
        <v-app-bar-title />

        <div :class="smAndDown ? '' : ''">
            <v-btn class="bg-primary rounded-xl text-terciary" :class="smAndDown ? 'text-body-2 mt-1 mr-2' : 'text-body-1'">
                Agendar Consulta
            </v-btn>
            
        </div>
    </v-app-bar>
</template>


<style scoped>

</style>


<script setup>
import { useDisplay } from 'vuetify';

const { smAndDown } = useDisplay()
</script>