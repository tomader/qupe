$(document).ready(function () {
    $('#logout').click(function () {

        axios({
            method: 'post',
            url: 'https://gpqupe.000webhostapp.com/backend/logout.php'

        })
            .then(function (response) {
                //handle success
                console.log(response);
                window.location.href = "https://gpqupe.000webhostapp.com/gp2/login.html";
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });

    });
});