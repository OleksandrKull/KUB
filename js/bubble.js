$(document).ready(function()    {
    // game display
    let gameBoard = $('#gameBoard');
    let wdh = gameBoard.css('width');
    wdh = wdh.match(/.*(?=px)/);
    wdh = +wdh/(1.5);
    gameBoard.css('height',wdh);
    // $("#play").click(function()   {
    //     gameBoard.innerHTML("<img src='/image/bubble.jpg'>");
    // })

});