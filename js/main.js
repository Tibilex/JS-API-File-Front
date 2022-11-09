let fileUploadInput = $('#upload');

function cearList(){
    $('#filelist').children().remove();
}

$('#getAll').click(function(){
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

$('#getName').click(function(){
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

$('#getDate').click(function(){
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

$('#upload').click(function(){
    cearList();
    var file_data = $('.data__upload').prop('files')[0];   
    var form_data = new FormData();                  
    form_data.append('file', file_data);                           
    $.ajax({
        url: 'https://localhost:7121/controller/Upload',
        dataType: 'text',
        cache: false,
        contentType: false,
        processData: false,
        data: form_data,                         
        type: 'post',
        success: function(){
            $('#filelist').append(`<option>File uploaded</option>`); 
        },
        error: function(){
            cearList();
            $('#filelist').append(`<option>Upload ERROR</option>`); 
        }
        });
});