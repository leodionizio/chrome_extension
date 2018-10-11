
$('h1').html("Glória a Deux!");
$('h2').html("Acabar com a Nova Ordem Mundial");
$('h3').html("Combater a URSAL");
$('h4').html("O grande problema é a falta de amor");
$('h5').html("As estátuas vão sair uma por uma");
$('h6').html("Nós vamos pegar eles");

$('span').html("Para honra e glória do Senhor Jesux!");
$('li').html("Aleluia Senhor!");

$('p').html("Eu vou ser presidente, não sei como!");

// $('a').html("Fora Iluminatis!");
$('button').html("Em nome do Senhor Jesux!");

/* $('img').attr(
  'src',
  'https://www.rapidonoar.com.br/wp-content/uploads/2018/09/daciolo-presidente.jpg'
); */

//nDaciolo
(function ($) {

    var self = $.nDaciolo = new function () { };

    $.extend(self, {

        nDacioloBackgrounds: [
            'https://www.rp10.com.br/wp-content/uploads/2018/09/daciolo1537879675.jpg',
            'https://s3.portalt5.com.br/imagens/A-Globo-vai-cair-profetiza-Cabo-Daciolo-apos-ser-barrado-em-debate.jpg',
            'https://noticias.gospelmais.com.br/files/2018/02/maxresdefault-1.jpg'
        ],

        nDacioloImgs: [
            'https://pbs.twimg.com/media/DnocRcbX4AA36kY.jpg',
            'https://www.tribunapr.com.br/wp-content/uploads/sites/1/2018/10/daciolo-arcoiris-825x615.jpg',
            'https://catracalivre.com.br/wp-content/uploads/2018/09/daciolo-globo-record-450x269.jpg',
            'https://abrilexame.files.wordpress.com/2018/07/18157874_1968911100010992_2.jpg',
            'https://noticias.gospelmais.com.br/files/2018/02/maxresdefault-1.jpg',
            'https://www.jmnoticia.com.br/wp-content/uploads/2018/10/cabo-daciolo.jpg',
            'https://www.opovo.com.br/noticiasimages/app/noticia_146418291334/2018/08/14/391413/cabo-daciolo.png',
            'https://www.revistaforum.com.br/wp-content/uploads/2015/05/cabo-daciolo.jpg',
            'https://d2mncrarm6nvo7.cloudfront.net/wp-content/uploads/2018/09/CABO-DACIOLO-DESAFIA-MA%C3%87ONS-QUER-DERRUBAR-E-DESTRUIR-AS-ESTATUAS-DE-LOJAS-HAVAN-ESTATUA-DA-LIBERDADE-700x325.jpg',
            'https://www.dailymotion.com/thumbnail/video/x6tkgwg',
            'https://upload.wikimedia.org/wikipedia/commons/a/aa/Deputados_cabo_Daciolo_%28PSOL-RJ%29_e_Marcos_Reategui_%28PSC-AP%29_participam_do_programa_Brasil_em_Debate_%28cropped2%29.jpg',
            'https://aparecebrasil.com.br/portal/perfilpublico/img/fotoperfil/deputadofederal/1484602748.jpg',
            'https://ogimg.infoglobo.com.br/in/23070124-e2e-7d9/FT1086A/420/x77298986_Brasilia-DF13-06-2018Deputado-Cabo-Daciolo-do-Patriota-RJ-recebe-fieis-no-gabinet.jpg.pagespeed.ic.X4Uz8vC8D5.jpg',
            'https://p0.ipstatp.com/large/005b341a39114093350e',
            'https://ogimg.infoglobo.com.br/in/15699860-e0c-19f/FT1086A/652/DACIOLO.jpg',
            'https://www.geledes.org.br/wp-content/uploads/2015/03/DACIOLO.jpg',
            'https://odia.ig.com.br/_midias/jpg/2018/10/05/700x470/1_daciolo_1538062313315_300x300-8226565.jpg',
            'https://img.estadao.com.br/resources/jpg/2/9/1533918372292.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeM_UwmRizwmfpsgB9SIi5HU3xcvaXNJFjmgdhXUWElvOELeLu',
            'https://s3.amazonaws.com/static-colunistas.gazetadopovo.com.br/wp-content/uploads/sites/6/2018/08/14162835/Daciolo-1-Nelson-Almeida-AFP-900x607.jpg',
            'https://printerama.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/2/1/21-ursal-estampa.png',
            'https://noticias.gospelmais.com.br/files/2018/08/cabo-daciolo-memes.jpg',
            'https://resumo.com.br/wp-content/uploads/2018/08/ursal.jpg',
            'https://abrilsuperinteressante.files.wordpress.com/2018/08/cabo-daciolo.jpg',
            'https://pbs.twimg.com/media/DkNZM91W0AAS1yh.jpg'
        ],

        handleImages: function (lstImgs, time) {
            $.each($('img'), function (i, item) {
                //Skip if image is already replaced
                if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                    var h = $(item).height();
                    var w = $(item).width();

                    //If image loaded
                    if (h > 0 && w > 0) {
                        //Replace
                        $(item).css('width', w + 'px').css('height', h + 'px');
                        $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                    }
                    else {
                        //Replace when loaded
                        $(item).load(function () {
                            //Prevent 'infinite' loop
                            if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                                var h = $(item).height();
                                var w = $(item).width();
                                $(item).css('width', w + 'px').css('height', h + 'px');
                                $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                            }
                        });
                    }
                }
            });

            //Keep replacing
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        },

        handleLogo: function (bgImgs, time) {
            $backgroundImages = $(
                '[class*=logo], [class*=header], [id*=header], [id*=logo],' +
                '[class*=logo] span, [class*=header] span, [id*=header] span, [id*=logo] span,' +
                '[class*=logo] h1, [class*=header] h1, [id*=header] h1, [id*=logo] h1,' +
                '[class*=logo] a, [class*=header] a, [id*=header] a, [id*=logo] a'
            )
                .filter(function () {
                    backgroundImg = $(this).css('background-image');
                    return backgroundImg && backgroundImg != 'none';
                }
                );

            $backgroundImages.each(function (i, item) {
                $(item).css('background-image', 'url(' + bgImgs[Math.floor(Math.random() * bgImgs.length)] + ')');
                $(item).css('background-position', '0 0');
                $(item).css('background-repeat', 'no-repeat');
                $(item).css('background-size', 'contain');
            });
        }
    });

    //Run on jQuery ready
    $(function () {
        self.handleImages(self.nDacioloImgs, 3000);
        self.handleLogo(self.nDacioloBackgrounds, 3000);
    });
})(jQuery);
