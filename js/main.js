let fileUploadInput = $('#upload'),
    getAllFiles = $('#getAll'),
    getByName = $('#getName'),
    getByDate = $('#getDate'),
    fileDownloadinput = $('#download');

function cearList(){
    $('#filelist').children().remove();
}

$(getAllFiles).click(function(){
    cearList();
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

$(getByName).click(function(){
    cearList();
    let value = $(".data__name").val();
    $.get("https://localhost:7121/controller/GetFileByName?fileName=" + value)
    .done((data) =>{
        $('#filelist').append(`<option>${data}</option>`);         
    })
    .fail(() =>{
        console.warn("GETALL REQUEST ERROR");
    });
});

$(getByDate).click(function(){
    cearList();
    let value = $(".data__date").val();
    $.get("https://localhost:7121/controller/GetFileByDate?date=" + value)
     .done((data) =>{
        $('#filelist').append(`<option>${data}</option>`);         
    })
     .fail(() =>{
        console.warn("GETALL REQUEST ERROR");
    });
});