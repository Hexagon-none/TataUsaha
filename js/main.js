(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    function updateTime() {
        const now = new Date(); // Waktu sekarang
        const daysOfWeek = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']; // Nama hari
        const day = daysOfWeek[now.getDay()]; // Nama hari berdasarkan indeks
        const hour = now.getHours().toString().padStart(2, '0'); // Jam (HH)
        const minute = now.getMinutes().toString().padStart(2, '0'); // Menit (MM)
        const second = now.getSeconds().toString().padStart(2, '0'); // Detik (SS)

        // Tampilkan waktu di setiap input
        document.getElementById('days').value = "Hari : " + day; // Tampilkan nama hari
        document.getElementById('hour').value = "Jam : " + hour;
        document.getElementById('minute').value = "Menit : " + minute;
        document.getElementById('second').value = "Detik : " + second;
    }

    // Jalankan fungsi updateTime setiap detik
    setInterval(updateTime, 1000);

    // Panggil sekali untuk inisialisasi awal
    updateTime();


})(jQuery);

