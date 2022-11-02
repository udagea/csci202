
$.getJSON('data.json', function(data) {
    var number = data['number'];
    
    var name =data['name'];

    var craft=data['craft'];

    var people=data['people'];

    
$.getJSON('data.json', function(data) {
    var number = data['number'];
    $('#SpacePeople').html(number);

    data['people'].forEach(function (d) {
        if (d['craft'] == 'Tiangong'){
            $('#TiangongNames').append('<ul>' + d['name'] + '</ul>');
        } else{
            $('#ISSNames').append('<ul>' + d['name'] + '</ul>');
        }
    });
});
    }); 
    
    // data['people'].forEach(function (d) {
        // $('#astroNames').append('<li>' + d['name']+ '</li>');
        // $('#TiangongNames').append('<li>' + d['name']+ '</li>');
        //     if ("craft" = "Tiangong") {
        //     return true;
        // }
        // $('#ISSNames').append('<li>' + d['name']+ '</li>');
        //     if ("craft" = "ISS") {
        //     return true;
        // }
        // });
        
       
