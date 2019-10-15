const helper = (function(){
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
    return {
        retrieveInformations,
        handleError
    }    
})()