let fileUploadInput = $('#upload'),
    getAllFilesImput = $('#getAll'),
    getByNameImput = $('#getName'),
    getByDateImput = $('#getDate'),
    fileDownloadinput = $('#download'),
    form = $('.data__form');

$(getAllFilesImput).click(function(){
    $.get("https://localhost:7121/controller/GetAllFiles")
     .done((data) =>{
        for (const iterator of data) {
            $('#filelist').append(`<option>${iterator}</option>`); 
        }           
    })
     .fail(() =>{
        console.warn("GETALL REQUEST ERROR");
    });
});

