const helper = (function(){
    localStorage.setItem('debug','c\'est super facile');
    const fileURL = 'assets/persons.json';
    const f = 'get'
    function success(data){
        callback(data);
    }
    function handleError(error){
        console.error(error);
    }
    function retrieveInformations(callback) {
        $[f](fileUrl).done(
            success(result)
        ).fail()
    }
    function updateDOM(data){
        $('.display-3').text(data.title);
        $('#description').text(data.description)
    }
    return {
        retrieveInformations,
        handleError
    }    
})()