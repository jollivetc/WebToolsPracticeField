(function(){
    var fun = retrievePersons;
    $('#bigbutton').click(retrievePersons);
    var ev = 'cl'
    function retrievePersons() {
        function traitement (){
            $('.display-3').text(arguments[0].title);
            $('#description').text(arguments[0].description)
        }
        services.retrievePersons(traitement);
    }
    function updateContent(data) {
        $('.display-3').text(data.title);
        $('#description').text(data.description)
    }
    ev = ev+'ick';  
    $('.btn-lg').unbind('click').on(ev, fun)
})();