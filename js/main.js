jQuery(document).ready
(
    function($){
        var controleNav = false;
        $(document).scroll(
            function(e)
            {
                var scrollTop = $(document).scrollTop();
                if (scrollTop > $('.navbar').height()) 
                {
                    if(controleNav == false)
                    {
                        $('.navbar').removeClass('static-top').addClass('fixed-top');
                        $('.navbar').addClass('navSmall');
                        controleNav = true;

                    }
                } 
                else 
                {
                    if(controleNav == true)
                    {
                        $('.navbar').removeClass('fixed-top').addClass('static-top');
                        $('.navbar').removeClass('navSmall');
                        controleNav = false;
                    }
                }
            }
        );
    }
);

jQuery(document).ready
(
    function($)
    {
      $(document).ready(function()
      {
        var tela = $(window).width();
           if(parseInt(tela)  <= 415)
           {
            
            // Inicio 
            document.getElementById('fundoBannerPrincipal').src="img/Novos/BannerPrincipalFundo-M.jpg" ;
            $('.boxVeiculos').removeClass('boxVeiculos').addClass('boxVeiculosM');
            $('.boxPrincipalTexto').removeClass('boxPrincipalTexto').addClass('boxPrincipalTextoM');
            $('.boxTexto').removeClass('boxTexto').addClass('boxTextoM');
            $('.boxBotao').removeClass('boxBotao').addClass('boxBotaoM');
            // fim inicio

            // Como Funciona
            document.getElementById('fundoComoFunciona').src="img/Novos/como-funciona-M.jpg" ;
            $("#pFuncionaTexto").hide();
            $("#pFuncionaTextoM").show();
            $('.boxComoFuncTitulo').removeClass('boxComoFuncTitulo').addClass('boxComoFuncTituloM');
            // Fim Como funciona

            // Detalhes
            document.getElementById('fundoDetalhes').src="img/Novos/detalhes-M.jpg" ;
            $("#pDescDetalhes").hide();
            $("#pDescDetalhesM").show();
            $('.boxTitDetalhes').removeClass('boxTitDetalhes').addClass('boxTitDetalhesM');
            $('.boxBenefDetalhes').removeClass('boxBenefDetalhes').addClass('boxBenefDetalhesM');
            $('.boxIconDetalhe1').removeClass('boxIconDetalhe1').addClass('boxIconDetalhe1M');
            $('.boxIconDetalhe2').removeClass('boxIconDetalhe2').addClass('boxIconDetalhe2M');
            $('.boxIconDetalhe3').removeClass('boxIconDetalhe3').addClass('boxIconDetalhe3M');
            $('.boxIconDetalhe4').removeClass('boxIconDetalhe4').addClass('boxIconDetalhe4M');
            $('.detalhesBeneficioTit1').removeClass('detalhesBeneficioTit1').addClass('detalhesBeneficioTit1M');
            $('.detalhesBeneficioTit2').removeClass('detalhesBeneficioTit2').addClass('detalhesBeneficioTit2M');
            $('.detalhesBeneficioTit3').removeClass('detalhesBeneficioTit3').addClass('detalhesBeneficioTit3M');
            $('.detalhesBeneficioTit4').removeClass('detalhesBeneficioTit4').addClass('detalhesBeneficioTit4M');
            //Fim Detalhes 

            // Agricola 
            document.getElementById('fundoAgricola').src="img/Novos/rastreamento-maquinas-M.jpg" ;
            document.getElementById('localize').src="img/Novos/botao-M.png" ;
            $("#pDescAgricolaContinuacao").hide();
            $("#pDescAgricolaContinuacaoM").show();
            $('.boxVeiculos').removeClass('boxVeiculos').addClass('boxVeiculosM');
            $('.boxTitAgricola').removeClass('boxTitAgricola').addClass('boxTitAgricolaM');
            $('.boxDesAgricola').removeClass('boxDesAgricola').addClass('boxDesAgricolaM');
            $('.boxLocalize').removeClass('boxLocalize').addClass('boxLocalizeM');
            $('.boxTrator').removeClass('boxTrator').addClass('boxTratorM');
            // fim Agricola

            // Carro e Moto 
            document.getElementById('fundoCarroMoto').src="img/Novos/carros-motos-M.jpg" ;
            document.getElementById('carroMotobotao').src="img/Novos/carros-motosM-quadro.png" ;
            document.getElementById('carroMotoTexto1').src="img/Novos/carros-motosM-locali.png" ;
            document.getElementById('carroMotoTexto2').src="img/Novos/carros-motosM-econo.png" ;
            $('.boxTitCarroMoto').removeClass('boxTitCarroMoto').addClass('boxTitCarroMotoM');
            $('.boxCarroMoto').removeClass('boxCarroMoto').addClass('boxCarroMotoM');
            $('.boxBotaoCarroMoto').removeClass('boxBotaoCarroMoto').addClass('boxBotaoCarroMotoM');
            $('.boxTextoCarroMoto1').removeClass('boxTextoCarroMoto1').addClass('boxTextoCarroMoto1M');
            $('.boxTextoCarroMoto2').removeClass('boxTextoCarroMoto2').addClass('boxTextoCarroMoto2M');
            // fim Carro e Moto

            // Onibus e Caminhoes 
            document.getElementById('fundoOnibusCaminhao').src="img/Novos/onibus-caminhoes-M.jpg" ;
            document.getElementById('OnibusCam').src="img/Novos/onibus-caminhoesM-bkg.png" ;
            $('.boxTitOnibusCam').removeClass('boxTitOnibusCam').addClass('boxTitOnibusCamM');
            $('.boxDesOnibusCam').removeClass('boxDesOnibusCam').addClass('boxDesOnibusCamM');
            $('.boxOnibusCam').removeClass('boxOnibusCam').addClass('boxOnibusCamM');
            $("#pDescOnibusCam").hide();
            $("#pDescOnibusCamM").show();
            // fim Onibus e Caminhoes

            // Missao
            document.getElementById('fundoMissao').src="img/Novos/nossa-missao-M.jpg" ;
            $("#pDescMissao").hide();
            $("#pDescMissaoM").show();
            $("#pDescValores").hide();
            $("#pDescValoresM").show();
            $("#pDescVisao").hide();
            $("#pDescVisaoM").show();
            $('.boxTitMissao').removeClass('boxTitMissao').addClass('boxTitMissaoM');
            $('.boxTitValores').removeClass('boxTitValores').addClass('boxTitValoresM');
            $('.boxTitVisao').removeClass('boxTitVisao').addClass('boxTitVisaoM');
            //Fim Missao 

            // Contato
            $('.contato').removeClass('contato').addClass('contatoM');
            // Fim Contato

           }
           else
           {

            // inicio
            $('.boxPrincipalTextoM').removeClass('boxPrincipalTextoM').addClass('boxPrincipalTexto');
            //Fim Inicio
           
            // Contato
            $('.contatoM').removeClass('contatoM').addClass('contato');
            // Fim Contato

            // Como Funciona
            $("#pFuncionaTexto").show();
            $("#pFuncionaTextoM").hide();
            // Fim Como Funciona
            
            
            // Agricola
            $("#pDescAgricolaContinuacaoM").hide();
            $("#pDescAgricolaContinuacao").show();
            $("#pDescAgricolaM").hide();
            $("#pDescAgricola").show();
            // Fim Agricola
            
            // Onibus e Caminhões 

            
            $("#pDescOnibusCamM").hide();
            $("#pDescOnibusCam").show();

            // Fim Onibus e Caminhões

            // Missao
            $("#pDescMissaoM").hide();
            $("#pDescMissao").show();
            $("#pDescValoresM").hide();
            $("#pDescValores").show();
            $("#pDescVisaoM").hide();
            $("#pDescVisao").show();
            // Fim Missao

            //Detalhes
            $("#pDescDetalhes").show();
            $("#pDescDetalhesM").hide();
            $('.boxTitDetalhesM').removeClass('boxTitDetalhesM').addClass('boxTitDetalhes');
            $('.boxBenefDetalhesM').removeClass('boxBenefDetalhesM').addClass('boxBenefDetalhes');
            $('.boxIconDetalhe1M').removeClass('boxIconDetalhe1M').addClass('boxIconDetalhe1');
            $('.boxIconDetalhe2M').removeClass('boxIconDetalhe2M').addClass('boxIconDetalhe2');
            $('.boxIconDetalhe3M').removeClass('boxIconDetalhe3M').addClass('boxIconDetalhe3');
            $('.boxIconDetalhe4M').removeClass('boxIconDetalhe4M').addClass('boxIconDetalhe4');
            $('.detalhesBeneficioTit1M').removeClass('detalhesBeneficioTit1M').addClass('detalhesBeneficioTit1');
            $('.detalhesBeneficioTit2M').removeClass('detalhesBeneficioTit2M').addClass('detalhesBeneficioTit2');
            $('.detalhesBeneficioTit3M').removeClass('detalhesBeneficioTit3M').addClass('detalhesBeneficioTit3');
            $('.detalhesBeneficioTit4M').removeClass('detalhesBeneficioTit4M').addClass('detalhesBeneficioTit4M');
            
            // Fim Detalhes

           }
      });
    }
);
