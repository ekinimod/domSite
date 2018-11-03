/*
 * My main JavaScript file!
 *
 */


// A $( document ).ready() block.
$(document).ready(function () {
    console.log("ready!");
});
///////////////////////////////////:

// Gestion du colapse menu
$('.panel-collapse').on('show.bs.collapse', function () {
    $(this).parent('.panel').find('.fa-minus-square').show();
    $(this).parent('.panel').find('.fa-plus-square').hide();
});
$('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).parent('.panel').find('.fa-minus-square').hide();
    $(this).parent('.panel').find('.fa-plus-square').show();
});

/**
 * Biblio Dom
 */

// function n(n) renvoi une valeur  avec un 0 prefixant les valeurs < 9
(function ($) {
    $.fn.n = function (n) {
        return n > 9 ? "" + n : "0" + n;
    }
})(jQuery);

// function getHeure(date) renvoi une heure formatee hh:mm:ss
(function ($) {
    $.fn.getHeure = function (laDate) {
        var datFormate=$().n(laDate.getHours())+ ":" ;
        datFormate+=$().n(laDate.getMinutes())+ ":" ;
        datFormate+=$().n(laDate.getSeconds());
        return  datFormate;
    };
})(jQuery);

// function getDateFr(date) renvoi une date en Fr :
//      -   complete (lundi 1 Janvier 2018)
//      -   ou abrége  (Lun. 1 Jan. 18)
(function ($) {
    $.fn.getDateFr = function (laDate, setFullOuAbr) {
        if (setFullOuAbr) {
            // DateHeure  format fr complet
            var jourFull = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
            var moisFull = ["Janvier", "F&eacute;vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Ao&ucirc;t", "Septembre", "Octobre", "Novembre", "D&eacute;cembre"];
            return jourFull[laDate.getDay()] + " " + laDate.getDate() + " " + moisFull[laDate.getMonth()] + " " + laDate.getFullYear();
        } else {
            // DateHeure  format fr abrégé
            var jour = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
            var mois = ["Jan", "F&eacute;v", "Mars", "Avr", "Mai", "Juin", "Juil", "Ao&ucirc;t", "Sept", "Oct", "Nov", "D&eacute;c"];
            var annee = laDate.getFullYear() + "";
            var anneeAbr = annee.substring(2);
            return jour[laDate.getDay()] + ". " + laDate.getDate() + " " + mois[laDate.getMonth()] + ". " + anneeAbr;
        }
    };
})(jQuery);

// function setInterval affiche  tte les 1000ms la date/heure
$(function () {
    setInterval(function () {
        var laDate = new Date;
        $("#horloge-date").text($().getDateFr(laDate, false));
        $("#horloge-time").text($().getHeure(laDate));
    }, 1000);

});


