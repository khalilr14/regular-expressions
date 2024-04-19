$(function ()
{ 
    const email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const notelepon = /^\+?\d{6,15}$/;
    const username = /^[a-zA-Z0-9]{3,16}$/;
    const ipv4 = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const passw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\d\s])\S{8,}$/;

    $('input').each(function ()
    {
        $(this).on('input', function ()
        {
            const pElement = $(this).parent().siblings().filter('p');

            if ($(this).attr('id') == "email")
            {
                if (email.test($(this).val()))
                {
                    pElement.html('Bagus, Email yang Anda input sudah VALID.')
                    pElement.removeClass('text-red-600')
                    pElement.addClass('text-green-600')
                }
                else
                {
                    pElement.html('Maaf, Email yang Anda input TIDAK VALID, coba lagi.')
                    pElement.removeClass('text-green-600')
                    pElement.addClass('text-red-600')
                }
            }
            if ($(this).attr('id') == "notelepon")
            {
                if (notelepon.test($(this).val()))
                {
                    pElement.html('Bagus, No. Telepon yang Anda input sudah VALID.')
                    pElement.removeClass('text-red-600')
                    pElement.addClass('text-green-600')
                }
                else
                {
                    pElement.html('Maaf, No. Telepon yang Anda input TIDAK VALID, coba lagi.')
                    pElement.removeClass('text-green-600')
                    pElement.addClass('text-red-600')
                }
            } 
            if ($(this).attr('id') == "username")
            {
                if (username.test($(this).val()))
                {
                    pElement.html('Bagus, Username yang Anda input sudah VALID.')
                    pElement.removeClass('text-red-600')
                    pElement.addClass('text-green-600')
                }
                else
                {
                    pElement.html('Hanya huruf dan angka, minimal 3 karakter, maksimal 16 karakter.')
                    pElement.removeClass('text-green-600')
                    pElement.addClass('text-red-600')
                }
            } 
            if ($(this).attr('id') == "ipv4")
            {
                if (ipv4.test($(this).val()))
                {
                    pElement.html('Bagus, IPv4 yang Anda input sudah VALID.')
                    pElement.removeClass('text-red-600')
                    pElement.addClass('text-green-600')
                }
                else
                {
                    pElement.html('Contoh format IPv4: "192.168.0.1", "10.0.0.1", "172.16.0.1", "192.0.2.1", "127.0.0.1", "255.255.255.0"')
                    pElement.removeClass('text-green-600')
                    pElement.addClass('text-red-600')
                }
            } 
            if ($(this).attr('id') == "passw")
            {
                if (passw.test($(this).val()))
                {
                    pElement.html('Bagus, Password yang Anda input sudah VALID.')
                    pElement.removeClass('text-red-600')
                    pElement.addClass('text-green-600')
                }
                else
                {
                    pElement.html('Minimal 8 karakter, minimal satu huruf besar, satu huruf kecil, satu angka, dan satu karakter khusus.')
                    pElement.removeClass('text-green-600')
                    pElement.addClass('text-red-600')
                }
            } 
        })
    })
})