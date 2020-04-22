$(document).ready(function () {
    $('#logout').click(function () {

        axios({
            method: 'post',
            url: 'https://qupe.herokuapp.com/backend/logout.php'

        })
            .then(function (response) {
                //handle success
                console.log(response);
                window.location.href = "https://qupe.herokuapp.com/gp2/logIn.html";
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });

    });
});