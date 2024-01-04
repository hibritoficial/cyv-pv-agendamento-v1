<template>
    <v-app>
        <v-main>

            <div>
                <v-img src="cyro1.jpg" cover>
                    <div>
                        <v-img src="localizaçao.png" :class="smAndDown ? 'w-0 h-0' : 'w-0'" />

                        <div class="d-none d-sm-block">
                            <v-img src="localizaçao.png" :class="lgAndUp ? 'w-50 ml-10 mt-10' : 'w-50 ml-10 mt-10'" />
                        </div>

                    </div>

                    <div class="bloco1tablet">

                        <div class="d-lg-none">
                            <p class="text-sm-h4 text-lg-h2"
                                :class="smAndDown ? 'ml-2 mt-3 text-body-2' : 'ml-10 mt-5 text-black'">CUIDE DA SUA SAÚDE
                                COM
                            <p></p>UMA <span class="textobloco1">ABORDAGEM EM<p></p>
                                MEDICINA INTEGRATIVA</span></p>
                            <p class="text-quartiary text-sm-h6 text-lg-h4"
                                :class="smAndDown ? 'ml-2 text-body-2' : 'ml-10 mt-2'">
                                Descubra a
                                medicina
                                integrativa
                            <p class="d-lg-none"></p> que aborda sua saúde de forma<p class="d-lg-none"></p> ampla com a
                            <span class="textobloco1">Ayurveda</span>,
                            <p class="d-lg-none"></p>
                            <span class="textobloco1">Nutrologia</span> e <span class="textobloco1">Fitoterapia</span>.</p>
                        </div>


                        <div class="d-none d-lg-block">
                            <p class="text-sm-h4 text-lg-h2 ml-10 mt-5 text-black">CUIDE DA SUA SAÚDE COM
                            <p></p>UMA <span class="textobloco1">ABORDAGEM EM<p></p>
                                MEDICINA INTEGRATIVA</span></p>
                            <p class="text-quartiary text-sm-h6 text-lg-h4 ml-10 mt-4">
                                Descubra o poder da
                                medicina
                                integrativa
                            <p class="d-lg-none"></p> que
                            <p /> aborda sua saúde de forma<p class="d-lg-none"></p> ampla com a
                            <p />
                            <span class="textobloco1">Ayurveda</span>,
                            <p class="d-lg-none"></p>
                            <span class="textobloco1">Nutrologia</span> e <span class="textobloco1">Fitoterapia</span>.</p>
                        </div>




                        <div :class="smAndUp ? 'd-none' : 'w-50 '">
                            <v-btn size="small" class="bg-terciary rounded-xl text-primary"
                                :class="smAndUp ? 'px-10' : 'mt-2 ml-2 pr-2 pl-2'">
                                <p :class="smAndUp ? 'text-h6' : 'text-body-2'">Agendar Consulta</p>
                            </v-btn>
                        </div>

                        <div class="d-lg-none" :class="smAndUp ? 'pt-3' : 'd-none'">
                            <v-btn size="x-large" class="bg-terciary rounded-xl text-primary">
                                <p :class="smAndUp ? 'text-body-2' : ''">Agendar Consulta Integrativa</p>
                            </v-btn>
                        </div>

                        <div class="d-none d-lg-block mt-16">
                            <v-btn height="100" width="600" class="bg-terciary rounded-pill text-primary pl-16 pr-16 ml-10">
                                <p class="text-h4">Agendar Consulta Integrativa</p>
                            </v-btn>
                        </div>
                    </div>

                    <div class="divcyrobloco1 d-none d-lg-block mt-10 pl-16 ml-12 h-100" align="right">
                        <div class="cyrobloco1 bg-white w-50 pl-5 pt-5 h-100" align="left">
                            <p class="cyrop1bloco1 text-lg-h5">DR. CYRO VIDAL</p>
                            <p class="cyrop2bloco1 text-lg-h6">Médico Especialista em Nutrologia, Ayurveda, Fitoterapia e
                                Acupuntura
                            </p>
                        </div>
                    </div>

                    <div class="divcyrobloco1" align="right" :class="mdAndUp ? 'd-none' : ''">
                        <div class="cyrobloco1 bg-white w-50 pl-5" align="left" :class="smAndUp ? 'py-3' : 'd-none'">
                            <p class="cyrop1bloco1">DR. CYRO VIDAL</p>
                            <p class="cyrop2bloco1">Médico Especialista em Nutrologia, Ayurveda, Fitoterapia e Acupuntura
                            </p>
                        </div>
                    </div>
                </v-img>
            </div>


            <div class="bg-secondary" align="center" :class="smAndDown ? 'pb-16' : 'pt-16'">
                <div :class="smAndDown ? 'pt-10' : 'pt-16'">
                    <p class="textobloco2 text-lg-h6">DESCUBRA O PODER DA <span class="text-primary">MEDICINA
                            INTEGRATIVA</span></p>
                    <p class="paragrafobloco2 text-sm-h5 text-lg-h3" :class="smAndDown ? '' : 'mt-3'"><span
                            class="text-primary">3 ESPECIALIDADES EM</span> UMA
                    <p></p> ÚNICA CONSULTA</p>
                    <p class="textobloco2 text-lg-h6" :class="smAndDown ? 'ml-8' : 'ml-16 pl-5'">Saúde e qualidade de vida
                        em nivel de
                        excelência.</p>
                </div>

                <div class="d-flex justify-space-between" :class="smAndDown ? 'mt-8 px-2' : 'mt-16 pt-10 pb-16'">

                    <div :class="smAndDown ? 'w-50 mr-2' : 'w-25 ml-16 pl-10'">
                        <v-card class="bg-primary rounded-xl">
                            <v-img src="fotocard1.png" />
                            <div align="center" :class="smAndDown ? 'mt-3' : 'mt-10'">
                                <p class="especialidade1 text-lg-h6" :class="smAndUp ? 'text-body-2' : ''">ESPECIALIDADE 1
                                </p>
                                <p class="Especialidades text-terciary text-lg-h4" :class="smAndUp ? 'text-h5' : ''">
                                    NUTROLOGIA
                                </p>

                                <div>
                                    <p class="DescriçaoEspecialidades text-lg-h5 text-lg-center"
                                        :class="smAndUp ? 'text-body-2 pl-5 pr-5 mt-2' : ''">
                                        Previna doenças, gerencie seu peso e melhore a sua
                                        saúde geral.
                                    </p>
                                </div>
                            </div>

                            <div :class="smAndUp ? 'd-none' : ''">
                                <v-btn class="botaocards bg-transparent rounded-pill" :class="smAndDown ? 'mt-5 mb-5' : ''">
                                    <p class="text-terciary" :class="smAndDown ? 'text-body-2' : ''">Detalhes</p>
                                </v-btn>
                            </div>

                            <div :class="smAndUp ? '' : 'd-none'">
                                <v-btn class="botaocards bg-transparent rounded-pill" height="60" width="300"
                                    :class="smAndDown ? 'mt-5 mb-5 w-50' : 'mt-10 mb-10'">
                                    <p class="text-terciary" :class="smAndDown ? 'text-body-2' : 'text-h6'"> Ver Detalhes
                                    </p>
                                </v-btn>
                            </div>
                        </v-card>
                    </div>

                    <div :class="smAndDown ? 'w-50 mr-2' : 'w-25 mr-10 pl-10'">
                        <v-card class="bg-primary rounded-xl">
                            <v-img src="fotocard2.png" />
                            <div align="center" :class="smAndDown ? 'mt-3' : 'mt-10'">
                                <p class="especialidade2 text-lg-h6" :class="smAndUp ? 'text-body-2' : ''">ESPECIALIDADE 2
                                </p>
                                <p class="Especialidades text-terciary text-lg-h4" :class="smAndUp ? 'text-h5' : ''">
                                    AYURVEDA
                                </p>

                                <div :class="smAndDown ? '' : 'pl-4 pr-4'">
                                    <p class="DescriçaoEspecialidades text-lg-h5 text-lg-center"
                                        :class="smAndUp ? 'text-body-2 pl-5 pr-5 mt-2' : ''">
                                        Equilibre, harmonize, desintoxique e purifique seu
                                        corpo e mente.
                                    </p>
                                </div>
                            </div>

                            <div :class="smAndUp ? 'd-none' : ''">
                                <v-btn class="botaocards bg-transparent rounded-pill" :class="smAndDown ? 'mt-5 mb-5' : ''">
                                    <p class="text-terciary" :class="smAndDown ? 'text-body-2' : ''">Detalhes</p>
                                </v-btn>
                            </div>

                            <div :class="smAndUp ? '' : 'd-none'">
                                <v-btn class="botaocards bg-transparent rounded-pill" height="60" width="300"
                                    :class="smAndDown ? 'mt-5 mb-5 w-50' : 'mt-10 mb-10'">
                                    <p class="text-terciary" :class="smAndDown ? 'text-body-2' : 'text-h6'"> Ver Detalhes
                                    </p>
                                </v-btn>
                            </div>

                            <div>

                            </div>
                        </v-card>
                    </div>

                    <div :class="smAndDown ? 'w-50' : 'w-25 mr-16 pr-10'">
                        <v-card class="bg-primary rounded-xl">
                            <v-img src="fotocard3.png" />
                            <div align="center" :class="smAndDown ? 'mt-3' : 'mt-10'">
                                <p class="especialidade3 text-lg-h6" :class="smAndUp ? 'text-body-2' : ''">ESPECIALIDADE 3
                                </p>
                                <p class="Especialidades text-terciary text-lg-h4" :class="smAndUp ? 'text-h5' : ''">
                                    FITOTERAPIA
                                </p>
                                <p class="DescriçaoEspecialidades text-lg-h5 text-lg-center"
                                    :class="smAndUp ? 'text-body-2 pl-5 pr-5 mt-2' : ''">
                                    Trate e previna doenças através do uso de ervas e plantas medicinais.
                                </p>
                            </div>

                            <div :class="smAndUp ? 'd-none' : ''">
                                <v-btn class="botaocards bg-transparent rounded-pill" :class="smAndDown ? 'mt-5 mb-5' : ''">
                                    <p class="text-terciary" :class="smAndDown ? 'text-body-2' : ''">Detalhes</p>
                                </v-btn>
                            </div>

                            <div :class="smAndUp ? '' : 'd-none'">
                                <v-btn class="botaocards bg-transparent rounded-pill" height="60" width="300"
                                    :class="smAndDown ? 'mt-5 mb-5 w-50' : 'mt-10 mb-10'">
                                    <p class="text-terciary" :class="smAndDown ? 'text-body-2' : 'text-h6'"> Ver Detalhes
                                    </p>
                                </v-btn>
                            </div>
                        </v-card>
                    </div>
                </div>
            </div>

            <div class="bg-senario d-flex" :class="smAndDown ? '' : 'pl-16'">


                <div class="d-lg-none" :class="smAndDown ? 'w-50 pl-2 pr-2 mt-5 mb-2' : ''">
                    <v-img class="rounded-xl" src="fotocard1.png" :class="smAndDown ? '' : ''" />
                </div>

                <div class="d-none d-lg-block ml-16 pl-16 mt-16" align="center">
                    <v-img class="rounded-xl" src="fotocard1.png" width="450" />
                </div>


                <div :class="smAndDown ? 'mr-2 mt-7 pr-2 pb-10' : 'mr-16 pr-16 mt-16 ml-16 pt-5 pb-16 mb-16'">
                    <div :class="smAndUp ? 'ml-16' : ''">
                        <p class="p1card1 text-quinary" :class="smAndDown ? 'pr-1 pl-1' : 'text-h6'">DESCUBRA O PODER DA</p>
                        <p class="p2card1 text-quartiary" :class="smAndDown ? 'text-h6 pr-1 pl-1 ' : 'text-h2'">NUTROLOGIA
                        </p>
                        <p class="p2card1 text-quartiary"
                            :class="smAndDown ? 'text-body-2 pr-1 pl-1 mt-2 ' : 'mt-10 text-h4'">
                            Abordagem
                        </p>
                        <p class="text-quartiary" :class="smAndDown ? 'pl-1' : 'text-body-2 mt-5'">LOREM IPSUM</p>
                        <p class="p2card1 text-quartiary"
                            :class="smAndDown ? 'text-body-2 pr-1 pl-1 mt-2 ' : 'mt-10 text-h4'">
                            Beneficios
                        </p>

                        <div class="text-quartiary" :class="smAndDown ? 'ml-5 text-body-2' : 'ml-5 mt-2 text-h6'">
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

                            <div :class="smAndUp ? 'd-none' : ''">
                                <v-btn class="bg-terciary rounded-pill text-primary"
                                    :class="smAndDown ? 'text-body-2 mt-7 pr-3 pl-3' : ''">
                                    <p>Agendar Consulta</p>
                                </v-btn>
                            </div>

                            <div class="d-lg-none">
                                <v-btn class="bg-terciary rounded-pill text-primary"
                                    :class="smAndUp ? 'mt-5 text-body-2' : 'd-none'">
                                    <p>Agendar Consulta Integrada</p>
                                </v-btn>
                            </div>
                        </div>
                        <div class="d-none d-lg-block mt-10 ml-1">
                            <v-btn width="450" height="60" class="bg-terciary rounded-pill text-primary">
                                <p class="text-h6">Agendar Consulta Integrada</p>
                            </v-btn>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-septenary d-flex">

                <div :class="smAndDown ? 'mr-2 mt-7 pl-2 pb-10' : 'mr-16 pr-16 mt-16 ml-5 pl-16 pt-5 pb-16 mb-16'">
                    <div :class="smAndUp ? 'ml-16' : ''">
                        <p class="p1card2 text-quinary" :class="smAndDown ? 'pr-1 pl-1' : 'text-h6 pl-10'">DESCUBRA O PODER
                            DA</p>
                        <p class="p2card2 text-quartiary" :class="smAndDown ? 'text-h6 pr-1 pl-1 ' : 'text-h2 pl-10'">
                            AYURVEDA</p>
                        <p class="p2card2 text-quartiary"
                            :class="smAndDown ? 'text-body-2 pr-1 pl-1 mt-2 ' : 'mt-10 text-h4 pl-10'">Abordagem
                        </p>
                        <p class="text-quartiary" :class="smAndDown ? 'pl-1 pr-1' : 'text-body-2 mt-5 pl-10'">LOREM IPSUM
                        </p>
                        <p class="p2card2 text-quartiary"
                            :class="smAndDown ? 'text-body-2 pr-1 pl-1 mt-2 ' : 'mt-10 text-h4 pl-10'">Beneficios
                        </p>

                        <div class="text-quartiary" :class="smAndDown ? 'ml-5 text-body-2' : 'ml-5 mt-2 text-h6 pl-10'">
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

                            <div :class="smAndUp ? 'd-none' : ''">
                                <v-btn class="bg-terciary rounded-xl text-primary"
                                    :class="smAndDown ? 'text-body-2 mt-7 pr-3 pl-3' : ''">
                                    <p>Agendar Consulta</p>
                                </v-btn>
                            </div>
                        </div>
                        <div class="d-lg-none">
                            <v-btn class="bg-terciary rounded-xl text-primary"
                                :class="smAndUp ? 'mt-5 text-body-2' : 'd-none'">
                                <p>Agendar Consulta Integrada</p>
                            </v-btn>
                        </div>
                    </div>
                    <div class="d-none d-lg-block mt-10 ml-16 pl-10">
                        <v-btn width="450" height="60" class="bg-terciary rounded-pill text-primary">
                            <p class="text-h6">Agendar Consulta Integrada</p>
                        </v-btn>
                    </div>
                </div>

                <div class="d-lg-none" :class="smAndDown ? 'w-50 pl-2 pr-2 mt-5 mb-2' : ''">
                    <v-img class="rounded-xl" src="fotocard2.png"></v-img>
                </div>

                <div class="d-none d-lg-block mt-16" align="center">
                    <v-img class="rounded-xl" src="fotocard2.png" width="450" />
                </div>
            </div>

            <div class="bg-senario d-flex" :class="smAndDown ? '' : 'pl-16'">

                <div class="d-lg-none" :class="smAndDown ? 'w-50 pl-2 pr-2 mt-5 mb-2' : ''">
                    <v-img class="rounded-xl" src="fotocard3.png"></v-img>
                </div>
                <div class="d-none d-lg-block ml-16 pl-16 mt-16" align="center">
                    <v-img class="rounded-xl" src="fotocard3.png" width="450" />
                </div>



                <div :class="smAndDown ? 'mr-2 mt-7 pr-2 pb-10' : 'mr-16 pr-16 mt-16 ml-16 pt-5 pb-16 mb-16'">
                    <div :class="smAndUp ? 'ml-16' : ''">
                        <p class="p1card1 text-quinary" :class="smAndDown ? 'pr-1 pl-1' : 'text-h6'">DESCUBRA O PODER DA</p>
                        <p class="p2card1 text-quartiary" :class="smAndDown ? 'text-h6 pr-1 pl-1 ' : 'text-h2'">FITOTERAPIA
                        </p>
                        <p class="p2card1 text-quartiary"
                            :class="smAndDown ? 'text-body-2 pr-1 pl-1 mt-2 ' : 'mt-10 text-h4'">Abordagem
                        </p>
                        <p class="text-quartiary" :class="smAndDown ? 'pl-1 ' : 'text-body-2 mt-5'">LOREM IPSUM</p>
                        <p class="p2card1 text-quartiary"
                            :class="smAndDown ? 'text-body-2 pr-1 pl-1 mt-2 ' : 'mt-10 text-h4'">Beneficios
                        </p>

                        <div class="text-quartiary" :class="smAndDown ? 'ml-5 text-body-2' : 'text-h6 ml-5 mt-2'">
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

                            <div :class="smAndUp ? 'd-none' : ''">
                                <v-btn class="bg-terciary rounded-xl text-primary"
                                    :class="smAndDown ? 'text-body-2 mt-7 pr-3 pl-3' : ''">
                                    <p>Agendar Consulta</p>
                                </v-btn>
                            </div>

                            <div class="d-lg-none">
                                <v-btn class="bg-terciary rounded-xl text-primary"
                                    :class="smAndUp ? 'mt-5 text-body-2' : 'd-none'">
                                    <p>Agendar Consulta Integrada</p>
                                </v-btn>
                            </div>
                        </div>
                        <div class="d-none d-lg-block mt-10 ml-1">
                            <v-btn width="450" height="60" class="bg-terciary rounded-pill text-primary">
                                <p class="text-h6">Agendar Consulta Integrada</p>
                            </v-btn>
                        </div>
                    </div>
                </div>
            </div>

            <div class="d-flex justify-space-between" :class="smAndDown ? 'w-100' : 'w-75'">
                <v-img src="cyro2.png" cover></v-img>


                <div class="text-terciary" :class="smAndDown ? 'pl-3 w-50 mb-2 pt-5' : 'mt-16 ml-10 pr-10 mb-10'">
                    <div :class="smAndUp ? 'pl-3 mb-5' : ''">
                        <p class="p1bloco6 d-lg-none" :class="smAndUp ? 'pt-10 text-body-2' : 'mt-2'">CYRO VIDAL</p>
                        <p class="p1bloco6 d-none d-lg-block mb-2" :class="smAndDown ? '' : 'text-body-1'">CYRO VIDAL</p>
                        <p class="text-lg-h2" :class="smAndUp ? 'text-h4' : ''">SEU <span class="p2bloco6">MÉDICO <p
                                    class="d-none d-lg-block"></p>INTEGRATIVO</span></p>
                        <p :class="smAndUp ? 'text-body-2 mt-5' : ''" class="p3bloco6 text-lg-h6">Lorem ipsum dolor sit amet
                            consectetur
                            <p /> adipiscing elit. Lorem ipsum dolor sit
                            amet
                            <p />
                            consectetur adipiscing elit.
                        </p>
                        <p :class="smAndUp ? 'text-body-2 mt-5' : 'mt-1'" class="p3bloco6 text-lg-h6">Lorem ipsum dolor sit
                            amet
                            consectetur
                            <p />
                            adipiscing
                            elit. Lorem ipsum dolor sit amet
                            <p />
                            consectetur adipiscing elit.
                        </p>
                        <p class="p3bloco6 text-lg-h6" :class="smAndUp ? 'text-body-2 mt-5' : 'mt-1'">Lorem ipsum dolor sit
                            amet
                            consectetur
                            <p />
                            adipiscing
                            elit. Lorem ipsum dolor sit amet
                            <p />
                            consectetur adipiscing elit.
                        </p>

                        <div :class="smAndUp ? 'd-none' : ''">
                            <v-btn class="bg-terciary rounded-xl text-primary" size="small"
                                :class="smAndDown ? 'text-body-2 mt-16 mb-3 pr-4 pl-4 ml-1' : ''">
                                <p>Agendar Consulta</p>
                            </v-btn>
                        </div>

                        <div class="d-lg-none" align="center" :class="smAndUp ? 'mt-16 pt-16' : 'd-none'">
                            <v-btn class="bg-terciary rounded-pill text-primary" size="large"
                                :class="smAndDown ? 'text-body-2 mt-3 pr-16 pl-16' : ''">
                                <p>Agendar Consulta Ampla</p>
                            </v-btn>
                        </div>

                        <div class="d-none d-lg-block mt-16 pt-16" align="center">
                            <v-btn class="bg-terciary rounded-pill text-primary " width="450" height="60" size="x-large">
                                <p class="text-lg-h6">Agendar Consulta Ampla</p>
                            </v-btn>
                        </div>
                    </div>
                </div>
            </div>

            <div align="center" class="bg-terciary" :class="smAndDown ? 'pt-10' : 'pt-8 pb-16'">
                <div :class="smAndDown ? '' : 'pt-16 pb-16'">
                    <v-carousel :show-arrows="false" hide-delimiter-background color="primary">
                        <v-carousel-item><v-avatar class="d-lg-none" image="fulana.png" size="80"
                                :class="smAndDown ? 'mt-16' : ''"></v-avatar>
                            <v-avatar class="d-none d-lg-block mt-16" image="fulana.png" size="180"></v-avatar>
                            <p :class="smAndDown ? 'mt-4 pl-5 pr-5' : 'mt-5 text-h5 px-16 mx-16'">Lorem ipsum dolor sit amet
                                consectetur adipiscing
                                elit. Lorem
                                ipsum dolor sit amet consectetur
                                adipiscing elit. Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                            <p class="text-primary" :class="smAndDown ? 'mt-4' : 'mt-5 text-h5'">Fulana Beltrana</p>
                        </v-carousel-item>

                        <v-carousel-item><v-avatar class="d-lg-none" image="fulana2.png" size="80"
                                :class="smAndDown ? 'mt-16' : ''"></v-avatar>
                            <v-avatar class="d-none d-lg-block mt-16" image="fulana2.png" size="180"></v-avatar>
                            <p :class="smAndDown ? 'mt-4 pl-5 pr-5' : 'mt-5 text-h5 px-16 mx-16'">Lorem ipsum dolor sit amet
                                consectetur adipiscing
                                elit. Lorem
                                ipsum dolor sit amet consectetur
                                adipiscing elit. Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                            <p class="text-primary" :class="smAndDown ? 'mt-4' : 'mt-5 text-h5'">Fulana Beltrana</p>
                        </v-carousel-item>

                        <v-carousel-item><v-avatar class="d-lg-none" image="fulana3.png" size="80"
                                :class="smAndDown ? 'mt-16' : ''"></v-avatar>
                            <v-avatar class="d-none d-lg-block mt-16" image="fulana3.png" size="180"></v-avatar>
                            <p :class="smAndDown ? 'mt-4 pl-5 pr-5' : 'mt-5 text-h5 px-16 mx-16'">Lorem ipsum dolor sit amet
                                consectetur adipiscing
                                elit. Lorem
                                ipsum dolor sit amet consectetur
                                adipiscing elit. Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                            <p class="text-primary" :class="smAndDown ? 'mt-4' : 'mt-5 text-h5'">Fulana Beltrana</p>
                        </v-carousel-item>
                    </v-carousel>
                </div>
            </div>

            <div>
                <v-img src="bloco8.png" :class="smAndDown ? 'w-100' : ''" />
            </div>

            <div class="d-flex justify-space-between bg-septenary" :class="smAndDown ? 'pt-16' : ''">
                <div :class="smAndDown ? 'pl-3' : ''">
                    <p class="p1bloco9" :class="smAndUp ? 'text-body-2' : 'pt-3'">MELHORE SUA SAÚDE</p>
                    <p :class="smAndUp ? 'text-h5' : ''">VERIFICAR HORÁRIOS DE <span class="spanbloco9">CONSULTA</span></p>
                    <v-img src="localizaçao.png" :class="smAndUp ? 'w-75 mt-3' : 'w-75 mt-3'" />
                    <p class="p1bloco9" :class="smAndUp ? 'text-h6 mt-3' : 'mt-3 pr-5'">Lorem ipsum dolor sit amet
                        consectetur
                        adipiscing elit. Lorem ipsum dolor sit amet consectetur adipiscing elit</p>

                    <div align="left" :class="smAndUp ? 'd-none' : ''">
                        <v-btn size="small" class="bg-terciary rounded-xl text-primary"
                            :class="smAndDown ? 'mt-3 pr-5 pl-5' : ''">
                            <p :class="smAndDown ? 'text-body-2' : ''">Horários</p>
                        </v-btn>
                    </div>

                    <div :class="smAndUp ? 'mt-10' : 'd-none'">
                        <v-btn size="large" class="bg-terciary rounded-xl text-primary">
                            <p :class="smAndDown ? 'text-body-2 pl-16 pr-16' : ''">Consultar Horários</p>
                        </v-btn>
                    </div>
                </div>

                <div align="center" :class="smAndDown ? 'w-100 pb-16' : ''">
                    <v-img src="clinica.jpg" />
                    <p class="p1bloco10" :class="smAndUp ? 'text-h6 mt-3' : 'mt-3'">Clinica Vivere Espaço Saúde</p>
                    <p class="p2bloco10" :class="smAndUp ? 'text-body-2' : 'mt-1'">R. Cel. Auris Coelho, 521 - Lagoa Nova
                    </p>
                    <p class="p2bloco10" :class="smAndUp ? 'text-body-2' : 'mt-1'">Natal-RN, 59075-050</p>

                    <div>
                        <v-btn class="botaomapa bg-transparent rounded-xl" :class="smAndDown ? 'ml-2 mt-3 pl-5 pr-5' : ''">
                            <p :class="smAndDown ? 'text-body-2' : ''">Ver Mapa</p>
                        </v-btn>
                    </div>
                </div>
            </div>

            <div>
                <v-img src="bloco8.png" :class="smAndDown ? 'w-100' : ''" />
            </div>

            <div>
                <v-footer class="d-flex justify-space-between">
                    <div>
                        <v-icon icon="mdi-account" siza="x-small" color="black"></v-icon>
                        <v-icon :class="smAndDown ? 'px-5' : ''" icon="mdi-account" siza="x-small" color="black"></v-icon>
                        <v-icon icon="mdi-account" siza="x-small" color="black"></v-icon>
                    </div>

                    <div :class="smAndDown ? 'w-25' : ''">
                        <v-img src="logo.png" :class="smAndDown ? '' : ''" />
                    </div>
                </v-footer>
            </div>



            <AppBar />
        </v-main>
    </v-app>
</template>
  
<style scoped>
.textobloco1 {
    font-weight: 700;
}

.cyrobloco1 {
    opacity: 0.9;
}

.cyrop1bloco1 {
    font-weight: 700;
    font-size: 12px;
}

.cyrop2bloco1 {
    font-size: 10px;
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

.botaomapa {
    border-width: 2px;
    border-color: black;
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

.p3bloco6 {
    font-size: 8px;
}

.p1bloco9 {
    font-size: 8px;
}

.spanbloco9 {
    font-weight: 700;
}

.p1bloco10 {
    font-size: 12px;
    font-weight: 700;
}

.p2bloco10 {
    font-size: 10px;
}

@media (min-width: 768px) and (max-width: 1024px) {

    .bloco1tablet {
        position: relative;
        left: 30px;

    }



}
</style>
  
<script setup>
import AppBar from '@/components/AppBar.vue'
import { useDisplay } from 'vuetify';


const { smAndDown, smAndUp, lgAndUp, mdAndUp } = useDisplay()
</script>
  