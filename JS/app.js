$(function () {
    $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
    $('.tree li:not(".parent_li")').addClass('clickable');
    $('.tree li.parent_li > span').on('click', function (e) {
        var children = $(this).parent('li.parent_li').find(' > ul > li');
        if (children.is(":visible")) {
            children.hide('fast');
            $(this).attr('title', 'Expand this branch').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
        } else {
            children.show('fast');
            $(this).attr('title', 'Collapse this branch').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
        }
        e.stopPropagation();
    });

     $('.arrow').click(function(){
        $(".expand-width").toggleClass("collapse-width");
        $(".container-collapse-width").addClass("container-expand-width");
        $('.main-nav').addClass('arrow-clicked');
    });

    $('.main-nav').mouseenter(function(){
        $(".arrow-clicked").addClass("expand-width").removeClass('collapse-width');

    });
    $('.main-nav').mouseleave(function(){
        $(".arrow-clicked").addClass("collapse-width").removeClass('expand-width');
    });
});