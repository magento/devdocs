$('.archive_year ul').hide();

$('.years').on('click', function() {
    $(this).next('ul.archive_month').slideToggle();
    $('.archive_month').not($(this).next('ul.archive_month')).slideUp();
});

$('.months').on('click', function() {
    $(this).next('ul.archive_posts').slideToggle();
    $('.archive_posts').not($(this).next('ul.archive_posts')).slideUp();
});