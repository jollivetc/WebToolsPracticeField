(function(){
    function retrievePersons() {
        $.get('assets/persons.json').done(
            function(data){
                console.log(data);
            }
        ).fail(function(error){
            console.error(error);
        }).always(function(){
            console.log('query was treated');
        })
    }
    $('#bigbutton').click(retrievePersons);
})();