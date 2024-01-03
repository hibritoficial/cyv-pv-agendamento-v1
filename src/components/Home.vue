<template>
    <v-app>
        <v-main>

            <div>
                <v-img src="cyro1.jpg">
                    <div>
                        <v-img src="localizaçao.png" :class="smAndDown ? 'w-0 h-0' : ''" />
                    </div>

                    <div>
                        <p :class="smAndDown ? 'ml-2 mt-3 text-body-2' : ''">CUIDE DA SUA SAÚDE COM
                        <p></p>UMA <span class="textobloco1">ABORDAGEM EM<p></p>
                            MEDICINA INTEGRATIVA</span></p>
                        <p class="text-quartiary" :class="smAndDown ? 'ml-2 text-body-2' : ''">Descubra a medicina
                            integrativa
                        <p></p> que aborda sua saúde de forma<p></p> ampla com a <span class="textobloco1">Ayurveda</span>,
                        <p></p>
                        <span class="textobloco1">Nutrologia</span> e <span class="textobloco1">Fitoterapia</span>.</p>
                    </div>

                    <div>
                        <v-btn class="bg-terciary rounded-xl text-primary"
                            :class="smAndDown ? 'text-body-2 mt-2 ml-2 pr-2 pl-2' : ''">
                            Agendar Consulta
                        </v-btn>
                    </div>
                </v-img>
            </div>


            <div class="bg-secondary" align="center" :class="smAndDown ? 'pb-16' : ''">
                <div :class="smAndDown ? 'pt-10' : ''">
                    <p class="textobloco2" :class="smAndDown ? '' : 'text-body-2'">DESCUBRA O PODER DA <span
                            class="text-primary">MEDICINA INTEGRATIVA</span></p>
                    <p class="paragrafobloco2"><span class="text-primary">3 ESPECIALIDADES EM</span> UMA
                    <p></p> ÚNICA CONSULTA</p>
                    <p class="textobloco2" :class="smAndDown ? 'ml-8' : ''">Saúde e qualidade de vida em nivel de
                        excelência.</p>
                </div>

                <div class="d-flex justify-space-between" :class="smAndDown ? 'mt-8 px-2' : ''">

                    <div :class="smAndDown ? 'w-50 mr-2' : 'w-25'">
                        <v-card class="bg-primary rounded-lg">
                            <v-img src="fotocard1.png" />
                            <div align="center" :class="smAndDown ? 'mt-3' : ''">
                                <p class="especialidade1" :class="smAndDown ? '' : ''">ESPECIALIDADE 1</p>
                                <p class="Especialidades text-terciary" :class="smAndDown ? '' : 'text-h5'">
                                    NUTROLOGIA
                                </p>
                                <p class="DescriçaoEspecialidades">Previna doenças, gerencie seu peso e melhore sua
                                    saúde geral.
                                </p>
                            </div>

                            <div>
                                <v-btn class="botaocards bg-transparent rounded-xl" :class="smAndDown ? 'mt-5 mb-5' : ''">
                                    <p class="text-terciary" :class="smAndDown ? 'text-body-2' : ''">Detalhes</p>
                                </v-btn>
                            </div>
                        </v-card>
                    </div>

                    <div :class="smAndDown ? 'w-50 mr-2' : 'w-25'">
                        <v-card class="bg-primary rounded-lg">
                            <v-img src="fotocard2.png" />
                            <div align="center" :class="smAndDown ? 'mt-3' : ''">
                                <p class="especialidade2" :class="smAndDown ? '' : ''">ESPECIALIDADE 2</p>
                                <p class="Especialidades text-terciary" :class="smAndDown ? '' : 'text-h5'">
                                    AYURVEDA
                                </p>
                                <p class="DescriçaoEspecialidades">Equilibre, harmonize, desintoxique e purifique seu
                                    corpo e mente.
                                </p>
                            </div>

                            <div>
                                <v-btn class="botaocards bg-transparent rounded-xl" :class="smAndDown ? 'mt-5 mb-5' : ''">
                                    <p class="text-terciary" :class="smAndDown ? 'text-body-2' : ''">Detalhes</p>
                                </v-btn>
                            </div>
                        </v-card>
                    </div>

                    <div :class="smAndDown ? 'w-50' : 'w-25'">
                        <v-card class="bg-primary rounded-lg">
                            <v-img src="fotocard3.png" />
                            <div align="center" :class="smAndDown ? 'mt-3' : ''">
                                <p class="especialidade3" :class="smAndDown ? '' : ''">ESPECIALIDADE 3</p>
                                <p class="Especialidades text-terciary" :class="smAndDown ? '' : 'text-h5'">
                                    FITOTERAPIA
                                </p>
                                <p class="DescriçaoEspecialidades">
                                    Trate e previna doenças através do uso de ervas e plantas medicinais.
                                </p>
                            </div>

                            <div>
                                <v-btn class="botaocards bg-transparent rounded-xl" :class="smAndDown ? 'mt-5 mb-5' : ''">
                                    <p class="text-terciary" :class="smAndDown ? 'text-body-2' : ''">Detalhes</p>
                                </v-btn>
                            </div>
                        </v-card>
                    </div>
                </div>
            </div>

            <div class="bg-senario d-flex justify-space-between">

                <div :class="smAndDown ? 'w-50 pl-2 pr-2 mt-5 mb-2' : ''">
                    <v-img class="rounded-xl" src="fotocard1.png"></v-img>
                </div>

                <div :class="smAndDown ? 'mr-2 mt-7 pr-2 pb-10' : ''">
                    <p class="p1card1" :class="smAndDown ? 'pr-1 pl-1 text-quinary' : ''">DESCUBRA O PODER DA</p>
                    <p class="p2card1" :class="smAndDown ? 'text-h6 pr-1 pl-1 text-quartiary' : ''">NUTROLOGIA</p>
                    <p class="p2card1" :class="smAndDown ? 'text-body-2 pr-1 pl-1 mt-2 text-quartiary' : ''">Abordagem</p>
                    <p :class="smAndDown ? 'text-body-2 pr-1 pl-1 text-quartiary' : ''">LOREM IPSUM</p>
                    <p class="p2card1" :class="smAndDown ? 'text-body-2 pr-1 pl-1 mt-2 text-quartiary' : ''">Beneficios</p>

                    <div :class="smAndDown ? 'ml-5 text-body-2' : ''">
                        <ul>
                            <li>
                                Controle de peso
                            </li>
                            <li>
                                Energia e vitalidade
                            </li>
                            <li>
                                Saúde da pele
                            </li>
                            <li>
                                Melhora na performance
                            </li>
                            <li>
                                Prevenção de doenças
                            </li>
                        </ul>

                        <div>
                            <v-btn class="bg-terciary rounded-xl text-primary"
                                :class="smAndDown ? 'text-body-2 mt-7 pr-3 pl-3' : ''">
                                <p>Agendar Consulta</p>
                            </v-btn>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-septenary d-flex justify-space-between">

                <div :class="smAndDown ? 'mr-2 mt-7 pl-2 pb-10' : ''">
                    <p class="p1card2" :class="smAndDown ? 'pr-1 pl-1 text-quinary' : ''">DESCUBRA O PODER DA</p>
                    <p class="p2card2" :class="smAndDown ? 'text-h6 pr-1 pl-1 text-quartiary' : ''">AYURVEDA</p>
                    <p class="p2card2" :class="smAndDown ? 'text-body-2 pr-1 pl-1 mt-2 text-quartiary' : ''">Abordagem</p>
                    <p :class="smAndDown ? 'text-body-2 pr-1 pl-1 text-quartiary' : ''">LOREM IPSUM</p>
                    <p class="p2card2" :class="smAndDown ? 'text-body-2 pr-1 pl-1 mt-2 text-quartiary' : ''">Beneficios</p>

                    <div :class="smAndDown ? 'ml-5 text-body-2' : ''">
                        <ul>
                            <li>
                                Equilibrio do corpo
                            </li>
                            <li>
                                Desintoxicação natural
                            </li>
                            <li>
                                Melhora na digestão
                            </li>
                            <li>
                                Bem-estar emocional
                            </li>
                        </ul>

                        <div>
                            <v-btn class="bg-terciary rounded-xl text-primary"
                                :class="smAndDown ? 'text-body-2 mt-7 pr-2 pl-2' : ''">
                                <p>Agendar Consulta</p>
                            </v-btn>
                        </div>
                    </div>
                </div>

                <div :class="smAndDown ? 'w-50 pl-2 pr-2 mt-5 mb-2' : ''">
                    <v-img class="rounded-xl" src="/fotocard2.png"></v-img>
                </div>
            </div>

            <div class="bg-senario d-flex justify-space-between">

                <div :class="smAndDown ? 'w-50 pl-2 pr-2 mt-5 mb-2' : ''">
                    <v-img class="rounded-xl" src="fotocard3.png"></v-img>
                </div>

                <div :class="smAndDown ? 'mr-2 mt-7 pr-2 pb-10' : ''">
                    <p class="p1card1" :class="smAndDown ? 'pr-1 pl-1 text-quinary' : ''">DESCUBRA O PODER DA</p>
                    <p class="p2card1" :class="smAndDown ? 'text-h6 pr-1 pl-1 text-quartiary' : ''">FITOTERAPIA</p>
                    <p class="p2card1" :class="smAndDown ? 'text-body-2 pr-1 pl-1 mt-2 text-quartiary' : ''">Abordagem</p>
                    <p :class="smAndDown ? 'text-body-2 pr-1 pl-1 text-quartiary' : ''">LOREM IPSUM</p>
                    <p class="p2card1" :class="smAndDown ? 'text-body-2 pr-1 pl-1 mt-2 text-quartiary' : ''">Beneficios</p>

                    <div :class="smAndDown ? 'ml-5 text-body-2' : ''">
                        <ul>
                            <li>
                                Ação anti-inflamatória
                            </li>
                            <li>
                                Suporte imunológico
                            </li>
                            <li>
                                Regulação hormonal
                            </li>
                            <li>
                                Menos efeitos colaterais
                            </li>
                        </ul>

                        <div>
                            <v-btn class="bg-terciary rounded-xl text-primary"
                                :class="smAndDown ? 'text-body-2 mt-7 pr-3 pl-3' : ''">
                                <p>Agendar Consulta</p>
                            </v-btn>
                        </div>
                    </div>
                </div>
            </div>

            <div class="d-flex justify-space-between" :class="smAndDown ? 'w-100' : ''">
                <v-img src="cyro2.png"></v-img>

                <div class="text-terciary" :class="smAndDown ? 'pl-3 w-50' : ''">
                    <p class="p1bloco6" :class="smAndDown ? 'mt-5' : ''">CYRO VIDAL</p>
                    <p :class="smAndDown ? '' : ''">SEU <span class="p2bloco6">MÉDICO INTEGRATIVO</span></p>
                </div>
            </div>




            <AppBar />
        </v-main>
    </v-app>
</template>
  
<style scoped>
.textobloco1 {
    font-weight: 700;
}

.textobloco2 {
    font-size: 7px;

}

.paragrafobloco2 {
    font-weight: 700;
}

.especialidade1 {
    font-size: 9px;
}

.especialidade2 {
    font-size: 9px;
}

.especialidade3 {
    font-size: 9px;
}

.Especialidades {
    font-weight: 700;
    font-size: 14px;
}

.DescriçaoEspecialidades {
    font-size: 9px;
}

.botaocards {
    border-width: 1px;
    border-color: #071c23;
}

.p1card1 {
    font-size: 8px;
}

.p2card1 {
    font-weight: 700;
}

.p1card2 {
    font-size: 8px;
}

.p2card2 {
    font-weight: 700;
}

.p1bloco6 {
    font-size: 8px;
   
}

.p2bloco6 {
    font-weight: 700;
}

@media (min-width: 481px) and (max-width: 1200px) {}
</style>
  
<script setup>
import AppBar from '@/components/AppBar.vue'
import { useDisplay } from 'vuetify';


const { smAndDown } = useDisplay()
</script>
  