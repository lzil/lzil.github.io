$(document).ready(function() {
    $('a[name=modalButton]').click(function (e) {
        e.preventDefault();

        var id = $(this).attr('href');
        $('#mask').fadeTo(250, .4);

        var height = $(window).innerHeight();
        var width = $(window).innerWidth();

        $(id).fadeTo(400, 1);
    });

    $('.modal .close, .modalContact .close').click(function (e) {
        e.preventDefault();
        closeModal();
    });
    $('#mask').click(function () {
        closeModal();
    });
    function closeModal() {
        $('.modal, .modalContact').fadeTo(200, 0);
        $('#mask').fadeTo(300, 0);
        setTimeout(function() {
            $('#mask, .modal, .modalContact').hide();
        }, 350);
    }

    
})