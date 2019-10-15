const services = (function(){
    const link = 'assets/persons.json';
    const link2= 'assets/data.json';
    function retrievePersons(f) {
        $.get(link2).done(
            function(data){
                f(data);
            }
        ).fail(helper.handleError)
    }
    function getInformations(callback){
        $.get('assets/persons.json').done(
            function(data){
                callback(data);
            }
        ).fail(helper.handleError)
    }
    function loadContent(){
        const fun = arguments[0];
        $.get(link2).done(
            function(data){
                fun(data);
            }
        ).fail(helper.handleError)
    }
    return {
        retrievePersons,
        getInformations,
        loadContent
    }
})()