let fileUploadInput = $('#upload'),
    getAllFiles = $('#getAll'),
    getByName = $('#getName'),
    getByDateImput = $('#getDate'),
    fileDownloadinput = $('#download');

$(getAllFiles).click(function(){
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

$(getByName).click(function(event){
    let value = $(".data__name").val();
    $.get("https://localhost:7121/controller/GetFileByName?fileName=" + value)
     .done((data) =>{
        $('#filelist').append(`<option>${data}</option>`);         
    })
     .fail(() =>{
        console.warn("GETALL REQUEST ERROR");
    });
});
