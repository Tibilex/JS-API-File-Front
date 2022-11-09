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
        $('#filelist').append(`<option>Request ERROR</option>`); 
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
        $('#filelist').append(`<option>Request ERROR</option>`); 
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
        $('#filelist').append(`<option>Request ERROR</option>`); 
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
/*
$('#download').click(function(){
    const filelist = document.querySelector('#filelist');
    let value = filelist.options[filelist.selectedIndex].text;
    $.ajax({
        url: 'https://localhost:7121/controller/GetFile?fileName=' + value,
        type: 'GET',
        success: function(response){
            let blob = new Blob([response], {type: 'text/plain'});
            let temp = $('<a></a>');
            temp.download = fileName;
            temp.href = window.URL.createObjectURL(blob);
            temp.click();
        },
        error: (function(){
            $('#filelist').append(`<option>Download ERROR</option>`); 
        })
    });
});
*/
$('#download').on('click', function () {
    const filelist = document.querySelector('#filelist');
    let value = filelist.options[filelist.selectedIndex].text;

    $.ajax({
        url: 'https://localhost:7121/controller/DownloadFile?name=' + value,
        method: 'GET',
        xhrFields: {
            responseType: 'blob'
        },
        success: function (data) {
            var a = document.createElement('a');
            var url = window.URL.createObjectURL(data);
            a.href = url;
            a.download = value;
            document.body.append(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        }
    });
});