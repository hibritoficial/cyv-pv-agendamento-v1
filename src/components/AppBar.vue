<template>
    <v-app-bar flat height="50">
        <div :class="smAndDown ? 'w-50 ml-3' : 'w-25 ml-10'">
            <v-img src="/public/logo.png" :class="smAndDown ? 'w-50' : 'w-50'"></v-img>
        </div>
        
        <v-app-bar-title />

        <div :class="smAndUp ? 'mr-10' : 'd-none'">
            <v-btn class="botaoappbar bg-primary rounded-lg text-terciary" :class="smAndUp ? 'text-body-2' : ''">
                Agendar Consulta Integrativa
            </v-btn>
        </div>

        <div :class="smAndUp ? 'd-none' : 'mr-2'">
            <v-btn size="small" class="botaoappbar bg-primary rounded-xl text-terciary" :class="smAndUp ? '' : 'text-body-2'">
                Agendar Consulta
            </v-btn>
        </div>
    </v-app-bar>
</template>



<style scoped>
.botaoappbar {
   font-family: "Roboto", sans-serif ;
}
</style>


<script setup>
import { useDisplay } from 'vuetify';

const { smAndDown, smAndUp } = useDisplay()
</script>