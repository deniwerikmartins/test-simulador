$('.navbar-toggle').click(function () {
    $('.separador').toggleClass("hide");
});

var h;

$(window).resize(function () {

    h = $('#displayImagens').parent().innerHeight();
    $('#macanetas').height(h - 66);
    $('#espelhos').height(h - 66);
    $('#rosetas').height(h - 66);
    $('#acabamento').height(h - 66);

});
var data;
var tipo = 901;
$('.espelho').each(function () {
    $(this).click(function () {
        $('img').css("border","none");
        $(this).find("img").css("border","solid 2px red");
        data = $(this).data("espelho");
        $('.displayEspelho').each(function () {
            if ($(this).attr("data-espelho") === data){
                $('.spanRoseta').each(function () {
                    if ($(this).hasClass("show")){
                        $(this).removeClass("show");
                        $(this).hide();
                        return false;
                    }
                });

                $('.spanEspelho').each(function () {
                    if ($(this).hasClass("show")){
                        $(this).removeClass("show");
                        $(this).hide();
                        return false;
                    }
                });
                $(this).parent().removeClass("hidden");
                $(this).parent().addClass("show");
                $(this).parent().show();

                $('.spanMacaneta.show').removeClass("alignMacaneta901Espelho");
                $('.spanMacaneta.show').removeClass("alignMacanetaMACANETA20MAEspelho");
                $('.spanMacaneta.show').removeClass("alignMacanetaNJEspelho");
                $('.spanMacaneta.show').removeClass("alignMacanetaNSEspelho");

                $('.spanMacaneta.show').removeClass("alignMacaneta901Roseta");
                $('.spanMacaneta.show').removeClass("alignMacanetaMACANETA20MARoseta");
                $('.spanMacaneta.show').removeClass("alignMacanetaNJRoseta");
                $('.spanMacaneta.show').removeClass("alignMacanetaNSRoseta");

                if (tipo === 901){
                    $('.spanMacaneta.show').addClass("alignMacaneta901Espelho");
                } else if(tipo === "MACANETA%20MA"){
                    $('.spanMacaneta.show').addClass("alignMacanetaMACANETA20MAEspelho");
                } else if(tipo === "NJ"){
                    $('.spanMacaneta.show').addClass("alignMacanetaNJEspelho");
                } else if(tipo === "NS"){
                    $('.spanMacaneta.show').addClass("alignMacanetaNSEspelho");
                }

                return false;

            }
        });
    });
});

$('.roseta').each(function () {
    $(this).click(function () {
        $('img').css("border","none");
        $(this).find("img").css("border","solid 2px red");
        data = $(this).data("roseta");
        $('.displayRoseta').each(function () {
            if ($(this).attr("data-roseta") === data){
                $('.spanEspelho').each(function () {
                   if ($(this).hasClass("show")){
                       $(this).removeClass("show");
                       $(this).hide();
                       return false;
                   }
                });

                $('.spanRoseta').each(function () {
                    if ($(this).hasClass("show")){
                        $(this).removeClass("show");
                        $(this).hide();
                        return false;
                    }
                });
                $(this).parent().removeClass("hidden");
                $(this).parent().addClass("show");
                $(this).parent().show();

                $('.spanMacaneta.show').removeClass("alignMacaneta901Espelho");
                $('.spanMacaneta.show').removeClass("alignMacanetaMACANETA20MAEspelho");
                $('.spanMacaneta.show').removeClass("alignMacanetaNJEspelho");
                $('.spanMacaneta.show').removeClass("alignMacanetaNSEspelho");

                $('.spanMacaneta.show').removeClass("alignMacaneta901Roseta");
                $('.spanMacaneta.show').removeClass("alignMacanetaMACANETA20MARoseta");
                $('.spanMacaneta.show').removeClass("alignMacanetaNJRoseta");
                $('.spanMacaneta.show').removeClass("alignMacanetaNSRoseta");

                if (tipo === 901){
                    $('.spanMacaneta.show').addClass("alignMacaneta901Roseta");
                } else if(tipo === "MACANETA%20MA"){
                    $('.spanMacaneta.show').addClass("alignMacanetaMACANETA20MARoseta");
                } else if(tipo === "NJ"){
                    $('.spanMacaneta.show').addClass("alignMacanetaNJRoseta");
                } else if(tipo === "NS"){
                    $('.spanMacaneta.show').addClass("alignMacanetaNSRoseta");
                }


                return false;
            }
        });

    });
});

$('.macaneta').each(function () {
    $(this).click(function () {
        $('img').css("border","none");
        $(this).find("img").css("border","solid 2px red");
        data = $(this).data("macaneta");
        $('.displayMacaneta').each(function () {
            if ($(this).attr("data-macaneta") === data){
                $('.spanMacaneta').each(function () {
                    if ($(this).hasClass("show")){
                        $(this).removeClass("show");
                        $(this).hide();
                        return false;
                    }
                });
                $(this).parent().removeClass("hidden");

                tipo = $(this).data("tipo");

                if ($('.spanRoseta').hasClass("show")){
                    $(this).parent().removeClass("alignMacaneta901Espelho");
                    $(this).parent().removeClass("alignMacanetaMACANETA20MAEspelho");
                    $(this).parent().removeClass("alignMacanetaNJEspelho");
                    $(this).parent().removeClass("alignMacanetaNSEspelho");

                    $(this).parent().removeClass("alignMacaneta901Roseta");
                    $(this).parent().removeClass("alignMacanetaMACANETA20MARoseta");
                    $(this).parent().removeClass("alignMacanetaNJRoseta");
                    $(this).parent().removeClass("alignMacanetaNSRoseta");

                    if (tipo === 901){
                        $(this).parent().addClass("alignMacaneta901Roseta");
                        $(this).addClass("displayMacaneta901");
                    }  else if (tipo === "MACANETA%20MA"){
                        $(this).parent().addClass("alignMacanetaMACANETA20MARoseta");
                        $(this).addClass("displayMacanetaMACANETA20MA");
                    } else if (tipo === "NJ"){
                        $(this).parent().addClass("alignMacanetaNJRoseta");
                        $(this).addClass("displayMacanetaNJ");
                    } else if (tipo === "NS"){
                        $(this).parent().addClass("alignMacanetaNSRoseta");
                        $(this).addClass("displayMacanetaNS");
                    }

                    $(this).parent().addClass("show");
                }

                if ($('.spanEspelho').hasClass("show")){
                    $(this).parent().removeClass("alignMacaneta901Espelho");
                    $(this).parent().removeClass("alignMacanetaMACANETA20MAEspelho");
                    $(this).parent().removeClass("alignMacanetaNJEspelho");
                    $(this).parent().removeClass("alignMacanetaNSEspelho");

                    $(this).parent().removeClass("alignMacaneta901Roseta");
                    $(this).parent().removeClass("alignMacanetaMACANETA20MARoseta");
                    $(this).parent().removeClass("alignMacanetaNJRoseta");
                    $(this).parent().removeClass("alignMacanetaNSRoseta");

                    if (tipo === 901){
                        $(this).parent().addClass("alignMacaneta901Espelho");
                        $(this).addClass("displayMacaneta901");
                    }  else if (tipo === "MACANETA%20MA"){
                        $(this).parent().addClass("alignMacanetaMACANETA20MAEspelho");
                        $(this).addClass("displayMacanetaMACANETA20MA");
                    } else if (tipo === "NJ"){
                        $(this).parent().addClass("alignMacanetaNJEspelho");
                        $(this).addClass("displayMacanetaNJ");
                    } else if (tipo === "NS"){
                        $(this).parent().addClass("alignMacanetaNSEspelho");
                        $(this).addClass("displayMacanetaNS");
                    }

                    $(this).parent().addClass("show");
                }

                $(this).parent().show();
                return false;
            }
        });


    });
});


window.onload = function () {
    $(window).trigger('resize');
}



