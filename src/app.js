(function() {

    const body = document.querySelector('body');
    const conteudo = `
    <div class="wrapper">
        <!-- Navegação -->
        <header class="navegacao">
                <nav class="navegacao__logo">
                    <div class="logo__container">
                        <h1 class="logo logo__h1">FLÁVIA QUITETE</h1>
                        <div class="logo__icone"></div>
                        <h3 class="logo logo__h3">Psicologia infanto-juvenil</h3>
                    </div>
                </nav>
                <div class="navegacao__conteudo">
                    <div class="navegacao__conteudo-container">
                        <ul class="conteudo__lista">
                            <div class="conteudo__redes-sociais">
                                <a class="ancora_redes" href="https://www.facebook.com/flavia.quitete">
                                    <i class="facebook fab fa-facebook-f"></i>
                                </a>
                                <a class="ancora_redes" href="https://www.instagram.com/psicologaflaviaquitete/?hl=en">
                                    <i class="instagram fab fa-instagram"></i>
                                </a>
                                <a class="ancora_redes" href="https://www.linkedin.com/in/fl%C3%A1via-quitete-5a0bb035/">
                                    <i class="linkedin fab fa-linkedin"></i>
                                </a>
                            </div>
                            <div>
                                <a class="lista__ancora" href="#sobre">SOBRE MIM</a>
                                <a class="lista__ancora" href="#atendimento">ATENDIMENTO</a>
                                <a class="lista__ancora" href="#consultorio">CONSULTÓRIO</a>
                                <a class="lista__ancora" href="#localizacao">LOCALIZAÇÃO</a>
                                <a class="lista__ancora" href="#contato">CONTATO</a>
                            </div>
                            <div id="lista__template"></div>
                        </ul>
                        <div class="menu-bars-container">
                            <i class="menu-times fas fa-times"></i>
                            <i class="menu-bars fas fa-bars"></i>
                        </div>
                    </div>
                </div>
                <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5521970175773/&text=Olá!%20Gostaria%20de%20mais%20informações" id="back-to-top" class="btn__whatsapp"
                title="Chame-nos no Whatsapp" style="display:none;">
                    <i class="whatsapp fab fa-whatsapp" aria-hidden="true"></i>
                </a>
                <a href="#" id="up_page" class="retorno_ao_topo" style="display:none;" >
                    <i class="fas fa-angle-up"></i>
                </a>
                <div class="responsive-menu">
                    <ul class="responsive-menu__lista">
                        <div class="responsive-menu__redes-sociais">
                            <a class="ancora_redes" href="https://www.facebook.com/flavia.quitete">
                                <i class="facebook fab fa-facebook-f"></i>
                            </a>
                            <a class="ancora_redes" href="https://www.instagram.com/psicologaflaviaquitete/?hl=en">
                                <i class="instagram fab fa-instagram"></i>
                            </a>
                            <a class="ancora_redes" href="https://www.linkedin.com/in/fl%C3%A1via-quitete-5a0bb035/">
                                <i class="linkedin fab fa-linkedin"></i>
                            </a>
                        </div>
                        <div class="responsive-menu__ancora">
                            <a class="ancora-link" href="#sobre">SOBRE MIM</a>
                            <a class="ancora-link" href="#atendimento">ATENDIMENTO</a>
                            <a class="ancora-link" href="#consultorio">CONSULTÓRIO</a>
                            <a class="ancora-link" href="#localizacao">LOCALIZAÇÃO</a>
                            <a class="ancora-link" href="#contato">CONTATO</a>
                        </div>
                    </ul>
                </div>
        </header>

        <!-- Conteúdo -->
         <div class="conteudo__destaque">
                <div class="destaque__container">
                    <img class="destaque__img" src="./img/flavia_00.jpeg" alt="">
                </div>
                <img class="sticker sobre__sticker-01" src="./img/sticker_14.png" alt="">
        </div>
        <main class="conteudo__principal">
            <section id="sobre" class="conteudo__sobre">
                <div class="titulo__container">
                    <h2 class="titulo__default">Sobre mim</h2>
                </div>
                <div class="sobre__descricao">
                    <p class="descricao__paragrafo">
                        
                        Sempre tive muito interesse em ouvir , em cuidar do  próximo, 
                        no desenvolvimento das  relações humanas. Assim a psicologia
                        me escolheu e eu escolhi a psicologia para ser minha vida. 
                        formação que levo no meu coração, na minha boca, nas minhas 
                        palavras e nas minhas atitudes.
                    </p>
                    <p class="descricao__paragrafo">
                        Me formei em 2000; Universidade Celso Lisboa,  Logo a seguir, 
                        fiz uma Especialização  em RH,  Formação  em Terapia Cognitiva 
                        omportamental com ênfase em Psicoterapia Infantil pelo  CPAF-RJ ; 
                        Especialização em Terapia Cognitiva Comportamental. Formação em ABA – TEA 
                        (Analise do Comportamento aplicado) – Criatives Ideias.  
                        Formação em Educação parental om ênfase em Psicologia Positiva.
                        ( Praticas clinicas para atendimento parental) Aline Cestaroli.
                    </p>
                    <p class="descricao__paragrafo">
                        Em um breve resumo da minha carreira, destaco atendimentos em 
                        consultório clínico a crianças, adolescentes e adultos.
                    </p>
                    <p class="descricao__paragrafo">
                        Minha jornada profissional também envolve intensa atuação como
                        psicóloga organizacional em empresas de pequeno, médio e grande 
                        porte atuando na área de Recrutamento e seleção , Treinamento e 
                        Gestão profissional.
                    </p>
                    <p class="descricao__paragrafo">
                        Atuo há 15 anos em atendimentos na clínica infanto-juvenil 
                        onde atendo crianças e adolescentes com transtornos do neurodesenvolvimento
                        como TEA ( Transtorno do Espectro autista, TDAH ( Transtorno do déficit de
                        atenção com hiperatividade),            
                        TOD ( Transtorno opositor Desafiador ),  Deficiência intelectual e 
                        Distúrbios de Aprendizagem.
                    </p>
                    <p class="descricao__paragrafo">
                        Espero vê-lo(a) em breve!
                        
                    </p>
                    <p class="descricao__paragrafo">
                        Com carinho,
                    </p>
                    <p class="descricao__paragrafo">
                        Flávia
                    </p>
                </div>
                <img class="sticker sobre__sticker-02" src="./img/sticker_10-rb.png" alt="">
            </section>

            <!-- Atendimento -->
            <section id="atendimento" class="conteudo__atendimento">
                <div class="conteudo__atendimento-container">
                    <div class="atendimento__cards">
                        <div data-aos="fade-right" data-aos-delay="500" class="atendimento__card-default">
                            <img class="atendimento__card_img" src="./img/terapia_00.jpeg" alt="">
                            <h6 class="titulo__cards">DIFICULDADES DE APRENDIZAGEM</h6>
                            <p class="paragrafo__cards">
                                Utilizamos técnicas para o desenvolvimento cognitivo, intelectual,
                                afetivo, social e o aprimoramento do potencial da criança.
                            </p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="800" class="atendimento__card-default">
                            <img class="atendimento__card_img" src="./img/terapia_09.jpeg" alt="">
                            <h6 class="titulo__cards">ESPAÇO LÚDICO E AGREGADOR</h6>
                            <p class="paragrafo__cards">
                                Nosso espaço foi pensado em detalhes para garantir a melhora
                                da autoestima infantil e oportunizar as melhores condições para a aprendizagem.
                            </p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="1100" class="atendimento__card-default">
                            <img class="atendimento__card_img" src="./img/terapia_05.jpeg" alt="">
                            <h6 class="titulo__cards">TEA (Transtorno do Espectro Autista)</h6>
                            <p class="paragrafo__cards">
                                Utilizamos a técnica ABA (Análise do Comportamento Aplicada) para o desenvolvimento 
                                de comportamentos adequados e redução daqueles considerados prejudiciais
                                no transtorno do espectro autista (TEA).
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Conteúdo lead -->
            <section class="conteudo__lead lead__01">
                    <a class="btn__lead-ancora btn-lead btn__first-child" href="https://api.whatsapp.com/send?1=pt_BR&phone=5521970175773/&text=Olá!%20Gostaria%20de%20mais%20informações">
                        FALE CONOSCO
                    </a>
            </section>

            <!-- Terapia Infanto-juvenil -->

            <section class="terapia">
                <div class="terapia__container">
                    <div class="terapia__img-container-00">
                        <img class="terapia__img" src="./img/sticker_07.png" alt="">
                        <div class="terapia__descricao-container">
                            <div class="terapia__descricao-00">
                                <h2 class="terapia__titulo">Como funciona a terapia Infanto-juvenil?</h2>
                                <p class="terapia__paragrafo">
                                    O primeiro momento da terapia é o encontro com os 
                                    pais/família. Esse encontro é para reunir informações sobre
                                    a criança/jovem e sua rotina. Os demais encontros são apenas
                                    com o paciente onde utilizo formas lúdicas para entendê-lo
                                    e tratá-lo.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="terapia__img-container-01">
                        <img class="terapia__img" src="./img/sticker_06.png" alt="">
                        <div class="terapia__descricao-container">
                            <div class="terapia__descricao-01">
                                <h2 class="terapia__titulo">Como perceber que meu filho(a) precisa de psicoterapia?</h2>
                                <p class="terapia__paragrafo">
                                    Fique atento aos comportamentos incomuns como:
                                    choro-excessivo, irritabilidade, isolamento, agrassividade,
                                    dificuldades escolares e demora a falar ou andar.
                                    Percebendo esses sinais, procure o auxílio de um psicoterapeuta.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="terapia__container-last_child">
                    <div class="terapia__img-container-02">
                        <img class="terapia__img" src="./img/sticker_01.png" alt="">
                        <div class="terapia__descricao-container">
                            <div class="terapia__descricao-00">
                                <h2 class="terapia__titulo">Quais são os benefícios?</h2>
                                <p class="terapia__paragrafo">
                                    A criança/jovem passa a compreender seus sentimentos
                                    e a possuir ferramentas para solucionar conflitos
                                    internos, promovendo assim, uma vida emocinal equilibrada.
                                    Seus familiares também se beneficiam pois passam a entender
                                    como lidar melhor com seus filhos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Consultório -->
            <section id="consultorio" class="conteudo__consultorio">
                <div class="abstract__circle circle__up"></div>
                <div class="abstract__circle-tiny circle__up-tiny"></div>
                <h2 class="titulo__default titulo__consultorio">Consultório</h2>
                <div class="sobre__descricao sobre__consultorio">
                    <p data-aos="fade-in" data-aos-delay="400" class="descricao__paragrafo paragrafo__localizacao">
                        Conheça as nossas instalações. Nosso consultório foi pensado para
                        permitir o máximo de conforto a nossos pacientes e suas famílias,
                        possuindo um ambiente aconchegante, sempre pensando no bem estar
                        de todos.
                    </p>
                </div>
                <div class="consultorio__apresentacao">
                    <div class="consultorio__video-container">
                        <div class="consultorio__video ">
                            <video class="video__container"  controls>
                                <source class="video__src"  src="./img/video_01.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="consultorio__video ">
                            <video class="video__container"  controls>
                                <source class="video__src" src="./img/video_02.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="consultorio__video ">
                            <img class="consultorio__img" src="./img/flavia_03_re.jpg" />
                        </div>
                    </div>
                </div>
            </section>

            <!-- Conteúdo lead -->
            <section class="conteudo__lead">
                <div class="lead__descricao">
                    <p class="descricao__paragrafo">
                        Marque uma consulta ou tire suas dúvidas.
                    </p>
                    <a class="btn__lead-ancora btn-lead" href="https://api.whatsapp.com/send?1=pt_BR&phone=5521970175773/&text=Olá!%20Gostaria%20de%20mais%20informações">
                        FALE CONOSCO
                    </a>
                </div>
            </section>

            <!-- Localização -->

            <section id="localizacao" class="conteudo__localizacao">
                <div class="titulo__container">
                    <h2 class="titulo__default">Localização</h2>
                </div>
                <div class="sobre__descricao sobre__localizacao">
                    <p class="descricao__paragrafo paragrafo__localizacao">
                        Nosso espaço foi projetado para recebê-lo(a) com o máximo de conforto e segurança. 
                        Está localizado no shopping Barra World que conta com estacionamento e diversos outros serviços.
                        Lugar de fácil acesso tanto de carro, ônibus ou BRT. 
                
                    </p>
                </div>
                <div class="localizacao__mapa">
                    <iframe class="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.
                        368782871618!2d-43.44464098555756!3d-23.010227847354034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
                        1!3m3!1m2!1s0x9bdcdefb71eb71%3A0xfd01bd492b3b7092!2sAv.
                        %20Alfredo%20Balthazar%20da%20Silveira%2C%20580%20-%20sala%20101-
                        D%20-%20Recreio%20dos%20Bandeirantes%2C%20Rio%20de%20Janeiro%20-
                        %20RJ%2C%2022790-710!5e0!3m2!1spt-BR!2sbr!4v1620007199129!5m2!1spt-BR!2sbr" 
                        height="500" style="border:0;" allowfullscreen="" loading="lazy">
                    </iframe>
                </div>
            </section>
        </main>

        <!-- Footer -->
        <footer id="contato" class="rodape">
            <div class="rodape__logo">
                <h1 class="logo logo__h1 logo__rodape">FLÁVIA QUITETE</h1>
                <div class="logo__icone"></div>
                <h3 class="logo logo__h3 logo__rodape">Psicologia infanto-juvenil</h3>
                <div class="rodape__redes">
                    <a class="ancora_redes" href="https://www.facebook.com/flavia.quitete">
                        <i class="facebook rodape_redes fab fa-facebook-f"></i>
                    </a>
                    <a class="ancora_redes" href="https://www.instagram.com/psicologaflaviaquitete/?hl=en">
                        <i class="instagram rodape_redes fab fa-instagram"></i>
                    </a>
                    <a class="ancora_redes" href="https://www.linkedin.com/in/fl%C3%A1via-quitete-5a0bb035/">
                        <i class="linkedin rodape_redes fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
            <div class="rodape__info-profissional">
                <div class="info__email">
                    <p class="rodape__info-pro-ancora">EMAIL:</p>
                    <a class="rodape__info-pro-ancora" href="mailto:flaviaquitete@gmail.com">flaviaquitete@gmail.com</a>
                </div>
                <p class="rodape__info-pro-paragrafo">Flávia - CRP: 05/30966</p>
            </div>
            <div class="rodape__info-dfg">
                <p class="rodape__info-paragrafo">Powered by: DFG Solutions - 2021</p>
                <a class="rodape__info-ancora" href="http://dfgsolutions.com.br/">www.dfgsolutions.com.br</a>
            </div>
        </footer>
    </div>
    `;

    body.innerHTML = conteudo;

})();