$(function ()
{ 
    const email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const handphone = /^\+?\d{6,15}$/;
    const post = /^\d{5}$/;
    const id = /^[A-Z]{3}\d{3}$/;
    const pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    $('input').each(function ()
    {
        $(this).on('input', function ()
        {
            const pElement = $(this).parent().siblings().filter('p');

            if ($(this).attr('id') == "email")
            {
                if (email.test($(this).val()))
                {
                    pElement.html('Email yang Anda input sudah Valid')
                    pElement.removeClass('text-red-600')
                    pElement.addClass('text-green-600')
                }
                else
                {
                    pElement.html('Maaf Email yang Anda input Tidak Valid, coba lagi.')
                    pElement.removeClass('text-green-600')
                    pElement.addClass('text-red-600')
                }
            }
            if ($(this).attr('id') == "handphone")
            {
                if (handphone.test($(this).val()))
                {
                    pElement.html('No. Handphone yang Anda input sudah Valid')
                    pElement.removeClass('text-red-600')
                    pElement.addClass('text-green-600')
                }
                else
                {
                    pElement.html('No. Handphone yang Anda input Tidak Valid, coba lagi.')
                    pElement.removeClass('text-green-600')
                    pElement.addClass('text-red-600')
                }
            } 
            if ($(this).attr('id') == "post")
            {
                if (post.test($(this).val()))
                {
                    pElement.html('No. Post yang Anda input sudah Valid')
                    pElement.removeClass('text-red-600')
                    pElement.addClass('text-green-600')
                }
                else
                {
                    pElement.html('No. Post yang Anda input Tidak Valid, coba lagi.')
                    pElement.removeClass('text-green-600')
                    pElement.addClass('text-red-600')
                }
            } 
            if ($(this).attr('id') == "id")
            {
                if (id.test($(this).val()))
                {
                    pElement.html('No. Post yang Anda input sudah Valid')
                    pElement.removeClass('text-red-600')
                    pElement.addClass('text-green-600')
                }
                else
                {
                    pElement.html('Coba ABC333.')
                    pElement.removeClass('text-green-600')
                    pElement.addClass('text-red-600')
                }
            } 
            if ($(this).attr('id') == "pass")
            {
                if (pass.test($(this).val()))
                {
                    pElement.html('Pass yang Anda input sudah Valid')
                    pElement.removeClass('text-red-600')
                    pElement.addClass('text-green-600')
                }
                else
                {
                    pElement.html('Coba 1 angka 1 huruf besar 1 huruf.')
                    pElement.removeClass('text-green-600')
                    pElement.addClass('text-red-600')
                }
            } 
        })
    })
})