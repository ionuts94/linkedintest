$(document).ready(() =>{
    let i = 1;
    
    function toggleS() {
        if(i % 2 === 1) {
            $('body').removeClass('flex-row');
            $('body').addClass('flex-column');
            $('.contentContainer').removeClass('content');
            $('.contentContainer').addClass('content100');
            $('.titluSiteContainer').removeClass('titlu-site');
            $('.titluSiteContainer').addClass('titlu-site-2');
            i++;
        } else {
            $('body').removeClass('flex-column');
            $('body').addClass('flex-row');
            $('.contentContainer').removeClass('content100');
            $('.contentContainer').addClass('content');
            $('.titluSiteContainer').removeClass('titlu-site-2');
            $('.titluSiteContainer').addClass('titlu-site');
            i++;
        }
    }

    function removeHidden(class1, class2='null' ) {
        $('.link-A, .link-B, .link-B1, .link-A, .link-B2, .link-B3, .link-C, .link-D, .link-E').addClass('hidden');
        $(`.link-${class1}`).removeClass('hidden');
 
        class2 ? ( $(`.link-${class2}`).removeClass('hidden')) : null;
    }
 
    $('#linkToA').on('click', () => {
        removeHidden('A')
    });
 
    $('#linkToB1').on('click', () => {
        removeHidden('B', 'B1');
    });
 
    $('#linkToB2').on('click', () => {
        removeHidden('B', 'B2');
    });
 
    $('#linkToB3').on('click', () => {
        removeHidden('B', 'B3');
    });
 
    $('#linkToC').on('click', () => {
        removeHidden('C')
    });
 
    $('#linkToD').on('click', () => {
        removeHidden('D')
    });
 
    $('#linkToE').on('click', () => {
        removeHidden('E')
    });
 
    $('.sBtn').on('click', () => {
        toggleS();
    })

    $('.drop-down').on('mouseenter', () => {
        $('.drop-down-container').slideDown('fast');
    });
    $('.drop-down').on('mouseleave', () => {
        $('.drop-down-container').slideUp('fast');
    });

});