$(document).ready(function () {
    $('#logout').click(function () {

        axios({
            method: 'post',
            url: 'http://phpstack-399934-1259248.cloudwaysapps.com/backend/logout.php'

        })
            .then(function (response) {
                //handle success
                console.log(response);
                window.location.href = "https://tomader.github.io/qupe/gp2/login.html";
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });

    });
});