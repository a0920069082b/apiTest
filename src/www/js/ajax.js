$(document).ready(() => {
    $.ajax({
        url: 'http://localhost:3002/api/test',
        method: 'GET',
        dataType: 'json',
        data: null,
        success: (res) => {
            $('#result').html(syntaxHighlight(res));
        },
        error: (err) => {
            console.log(err);
        },
    });
});