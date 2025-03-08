const tutorial = document.querySelector('.triangle_tutorial');
const toggle_tuto = document.querySelectorAll('.toggle_tuto');
const i_toggle_tuto = document.querySelectorAll('i.toggle_tuto');
const triangle_option = document.querySelector('.triangle_option');

toggle_tuto.forEach(function (btn) {
    btn.addEventListener('click', function () {
        tutorial.classList.toggle('show_tuto');
        if (tutorial.classList.contains('show_tuto')) {
            triangle_option.classList.add('tuto_selected');
        } else {
            triangle_option.classList.remove('tuto_selected');
        }
    });
});

i_toggle_tuto.forEach(function (btn) {
    btn.addEventListener('click', function () {
        tutorial.classList.toggle('show_tuto');
        if (tutorial.classList.contains('show_tuto')) {
            triangle_option.classList.add('tuto_selected');
        } else {
            triangle_option.classList.remove('tuto_selected');
        }
    });
});
