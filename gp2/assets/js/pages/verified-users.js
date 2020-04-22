var showErrorMsg = function (form, type, msg) {
    var alert = $('<div class="alert alert-' + type + ' alert-dismissible" role="alert">\
			<div class="alert-text">'+ msg + '</div>\
			<div class="alert-close">\
                <i class="flaticon2-cross kt-icon-sm" data-dismiss="alert"></i>\
            </div>\
		</div>');

    form.find('.alert').remove();
    alert.prependTo(form);
    //alert.animateClass('fadeIn animated');
    KTUtil.animateClass(alert[0], 'fadeIn animated');
    alert.find('span').html(msg);
}
function checkUserReports(user_id) {
    axios({
        method: 'post',
        url: 'https://gp2.herokuapp.com/backend/check-user-reports.php',
        data: {
            user_id: user_id
        }
    })
        .then(function (response) {
            var currentUrl = 'https://gp2.herokuapp.com/gp2/TheHead/one-verified-user.html';
            var url = new URL(currentUrl);
            url.searchParams.set("id", response.data.ID);
            var newUrl = url.href;
            $('#users').append('div class= "kt-widget3__item" > ' +
                '<div class="kt-widget3__header" >' +
                '<div class="kt-widget3__user-img">' +
                '<span class="kt-badge kt-badge--lg kt-badge--rounded kt-badge--bold kt-font-success"></span></div>' +
                '<div class="kt-widget3__info"><a class="kt-widget3__username">' +
                response.data.FIRST_NAME + ' ' + response.data.LAST_NAME + '</a><br><span class="kt-widget3__time"></span></div><a href="' +
                newUrl + '" class="kt-widget3__status kt-font-info">View</a></div></div >');
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
}
var url_string = window.location.href
var url = new URL(url_string);
var deptId = url.searchParams.get("id");
$(document).ready(function () {
    axios({
        method: 'post',
        url: 'https://gp2.herokuapp.com/backend/fetch-faculty.php'
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $.each(response.data, function (key, value) {
                axios({
                    method: 'post',
                    url: 'https://gp2.herokuapp.com/backend/fetch-deptName-from-userId.php',
                    data: {
                        user_id: value.ID
                    }
                })
                    .then(function (response1) {
                        //handle success
                        console.log(response1);
                        //checkUserReports(value.ID);
                        var currentUrl = 'https://gp2.herokuapp.com/gp2/TheHead/one-verified-user.html';
                        var url = new URL(currentUrl);
                        url.searchParams.set("id", value.ID);
                        var newUrl = url.href;
                        $('#users').append('<div class="kt-widget3__item">' +
                            '<div class="kt-widget3__header" >' +
                            '<div class="kt-widget3__user-img">' +
                            '<span class="kt-badge kt-badge--lg kt-badge--rounded kt-badge--bold kt-font-success"></span></div>' +
                            '<div class="kt-widget3__info"><a class="kt-widget3__username">' +
                            value.FIRST_NAME + ' ' + value.LAST_NAME + '</a><br><span class="kt-widget3__time">' + response1.data.NAME + '</span></div><a href="' +
                            newUrl + '" class="kt-widget3__status kt-font-info">View</a></div></div >');



                    })
                    .catch(function (response1) {
                        //handle error
                        console.log(response1);
                    });

            });

        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

});
