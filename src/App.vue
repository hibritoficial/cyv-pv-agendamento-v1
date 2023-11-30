<template>
  <v-app>
    <v-main>
      <v-img src="/bloco1.jpg">

        <v-row>
          <v-col :class="smAndDown ? 'd-flex mt-4 ml-1' : 'd-flex ml-16 pl-16 mt-16 pt-16'">
            <svg-icon color="black" type="mdi" :path="path" :size="iconSize" class="ColorFonts"
              :class="smAndDown ? 'mb-3 pl-3' : 'mb-5 mr-2'" />
            <div :class="smAndDown ? '' : ''">
              <p class="ConsultorioMobile ColorFonts text-sm-p text-md-h6  mt-2">
                CONSULTÓRIO EM
              </p>
              <h3 class="NatalRnMobile ColorFonts text-md-h4 text-sm-h1" :class="smAndDown ? '' : 'Teste'">
                NATAL-RN
              </h3>
            </div>
          </v-col>
        </v-row>

        <div :class="smAndDown ? 'ml-5' : ''">
          <p class="EncontreCaminho ColorFonts">ENCONTRE O CAMINHO
          </p>
          <p class="EncontreCaminho ColorFonts">PARA UMA <span class="VidaMelhorMobile">VIDA MELHOR</span></p>

          <p class="EncontreCaminho ColorFonts DescubraMedicinaMobile mt-2" :class="smAndDown ? '' : ''">Descubra o poder
            da <span class="VidaMelhorMobile">Medicina</span> que
            integra
          <p></p> <span class="VidaMelhorMobile">Ayurveda, Nutrologia</span> e <span
            class="VidaMelhorMobile">Fitoterapia.</span></p>
        </div>
        <div>
          <v-btn class="BtnAgendarMobile h-25 pa-2 bg-terciary mt-2 ml-5 text-quartiary">Agendar Consulta</v-btn>
        </div>

        <v-row class="ml-16 text-sm-h1">
          <v-col cols="10">
            <p class="DrCyroVidalMobile ColorFonts ml-16 bg-white text-sm-h6 mt-4 pt-1 pl-2">DR. CYRO VIDAL
            <p class="DescricaoCyroVidalMobile">Médico Especialista em Nutrologia, Ayurveda, Fitoterapia e Acupuntura</p>
            </p>
          </v-col>
        </v-row>

      </v-img>

      <div class="bg-secondary pb-16">
        <div class="pt-16">
          <p class="d-flex justify-center align-center" :class="smAndDown ? 'text-body-2' : 'text-blue'">
            Descubra o poder da
          </p>
          <h1 class="MedIntegrativaMobile d-flex justify-center align-center text-quartiary" :class="smAndDown ? '' : ''">
            MEDICINA
            INTEGRATIVA
          </h1>
          <p class="SaudeMobile d-flex justify-center align-center" :class="smAndDown ? '' : ''">
            Saúde e qualidade de vida
            em nivel de excelência.
          </p>
        </div>

        <div :class="smAndDown ? 'mt-16' : ''">
          <v-row :class="smAndDown ? 'd-flex ml-2 mr-2' : ''">
            <v-col cols="12" md="4">
              <div>
                <p class="Abordagem1Mobile d-flex justify-center align-center text-quartiary"
                  :class="smAndDown ? '' : ''">
                  ABORDAGEM 1
                </p>
                <p class="d-flex justify-center align-center text-h6" :class="mdAndUp ? 'text-red' : ''">
                  AYURVEDA
                </p>
              </div>
              <v-card class="bg-quartiary w-75 ml-10 mt-2" :class="smAndDown ? 'text-ml-10' : ''">
                <v-img src="/fotocard1.png" />
                <p class="pl-5 pr-5 mt-6">
                  Saiba consumir alimentos,
                  temperos e ervas de acordo com seu
                  biotipo genético/epigenético.
                </p>
                <v-btn class="btnterapias bg-transparent  mt-13 mb-10">
                  SAIBA MAIS
                </v-btn>
              </v-card>
            </v-col>

            <v-col cols="12" md="4">
              <div class="mt-10">
                <p class="Abordagem2Mobile d-flex justify-center align-center text-quartiary"
                  :class="smAndDown ? '' : ''">
                  ABORDAGEM 2
                </p>
                <p class="d-flex justify-center align-center text-h6" :class="smAndDown ? '' : ''">
                  NUTROLOGIA
                </p>
              </div>
              <v-card class="bg-quartiary w-75 ml-10 mt-2">
                <v-img src="/fotocard2.png" />
                <v-list class="bg-quartiary">
                  <v-list-item>
                    <p>• Emagrecimento</p>
                  </v-list-item>
                  <v-list-item>
                    <p>• Ganho de Massa Muscular (hipertrofia)</p>
                  </v-list-item>
                  <v-list-item>
                    <p>• Correção de Deficiências Nutricionais</p>
                  </v-list-item>
                </v-list>
                <v-btn class="btnterapias bg-transparent d-flex justify-center align-center"
                  :class="smAndDown ? 'ml-5 w-75  mb-11 mt-1' : ''">
                  SAIBA MAIS
                </v-btn>
              </v-card>
            </v-col>

            <div :class="smAndDown ? 'w-100 pr-10 mt-5' : ''">
              <v-col cols="6" md="12" :class="smAndDown ? '' : ''">
                <div class="mb-2">
                  <p class="Abordagem3Mobile d-flex justify-center align-center"
                    :class="smAndDown ? 'text-body-2 text-quartiary' : ''">
                    ABORDAGEM 3
                  </p>
                  <p class="d-flex justify-center align-center" :class="smAndDown ? 'text-h6 ' : ''">
                    FITOTERAPIA
                  </p>
                </div>
                <v-card class="bg-quartiary">
                  <v-img src="/fotocard3.png" />
                  <v-list class="bg-quartiary">
                    <v-list-item>
                      <p>• Beneficio 1</p>
                    </v-list-item>
                    <v-list-item>
                      <p>• Beneficio 2</p>
                    </v-list-item>
                    <v-list-item>
                      <p>• Beneficio 3</p>
                    </v-list-item>
                  </v-list>
                  <v-btn class="btnterapias bg-transparent d-flex justify-center align-center mt-10 mb-10"
                    :class="smAndDown ? 'ml-5 w-75' : ''">
                    SAIBA MAIS
                  </v-btn>
                </v-card>
              </v-col>
            </div>
          </v-row>
        </div>
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

<style scoped>
.ConsultorioMobile {
  font-size: 7px;
  line-height: 2px;
  font-family: "OpenSans-Light", "Open Sans Light", "Open Sans", sans-serif;
}

.NatalRnMobile {
  font-size: 12.5px;
  font-family: "Open Sans Bold", "Open Sans", sans-serif;
}

.EncontreCaminho {
  font-family: "OpenSans-Light", "Open Sans Light", "Open Sans", sans-serif;
  font-size: 10px;
}

.VidaMelhorMobile {
  font-family: "Open Sans Bold", "Open Sans", sans-serif;
  font-weight: 800;
}

.DescubraMedicinaMobile {
  font-size: 10px;
  font-family: "OpenSans-Light", "Open Sans Light", "Open Sans", sans-serif;
}

.MedIntegrativaMobile {
  font-size: 24px;
  line-height: 25px;
}

.BtnAgendarMobile {
  border-radius: 30px;
  font-size: 7px;
}

.DrCyroVidalMobile {
  font-family: "OpenSans-SemiBold", "Open Sans SemiBold", "Open Sans", sans-serif;
  font-weight: 650;
  font-size: 9px;
  opacity: 0.9;
}

.DescricaoCyroVidalMobile {
  font-size: 5.4px;
  font-weight: 100;
}

.btnterapias {
  border-radius: 30px;
  border-width: 2px;
  border-color: black;
}

.Abordagem1Mobile {
  font-size: 12px;
  line-height: 15px;
}

.Abordagem2Mobile {
  font-size: 12px;
  line-height: 15px;
}

.Abordagem3Mobile {
  font-size: 12px;
  line-height: 15px;
}

.SaudeMobile {
  font-size: 11px;
  font-family: "OpenSans-Light", "Open Sans Light", "Open Sans", sans-serif;
}

.NatalRn {
  font-family: "Open Sans Bold", "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 29px;
  line-height: 30px;
}

.ColorFonts {
  color: #2f4045;
}
</style>

<script setup>
import Home from '@/components/Home.vue'
import AppBar from '@/components/AppBar.vue'
import SvgIcon from '@jamescoyle/vue-icon'
import { ref } from 'vue';
import { mdiMapMarker } from '@mdi/js';
import { useDisplay } from 'vuetify';

const { smAndDown } = useDisplay()
const path = mdiMapMarker;
const iconSize = ref(30);
</script>
