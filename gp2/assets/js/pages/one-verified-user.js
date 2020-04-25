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

function getFormData($form) {
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function (n, i) {
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}
var url_string = window.location.href;
var url = new URL(url_string);
var userId = url.searchParams.get("id");
$(document).ready(function () {
    //getUSerName(userId);
    axios({
        method: 'post',
        url: 'https://qupe-backend.herokuapp.com/backend/verified-user-cs.php',
        data: {
            user_id: userId
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $.each(response.data, function (key, value) {
                let time = value.TIME;
                axios({
                    method: 'post',
                    url: 'https://qupe-backend.herokuapp.com/backend/fetch-courseName-from-csId.php',
                    data: {
                        cs_id: value.ID
                    }
                })
                    .then(function (response1) {
                        //handle success
                        console.log(response1);
                        //checkUserReports(value.ID);
                        if (value.STATUS == 5) {
                            var currentUrl = 'https://qupe-backend.herokuapp.com/gp2/TheHead/verified-CourseSpeci.html';
                            var url = new URL(currentUrl);
                            url.searchParams.set("id", value.ID);
                            var newUrl = url.href;
                            $('#userReports').append('<div class="kt-widget3__item">' +
                                '<div class="kt-widget3__header" >' +
                                '<div class="kt-widget3__user-img">' +
                                '<span class="kt-badge kt-badge--lg kt-badge--rounded kt-badge--bold kt-font-success"></span></div>' +
                                '<div class="kt-widget3__info"><a class="kt-widget3__username">Course Specification</a><span class="ml-4 kt-badge kt-badge--inline kt-badge--success">Verified at ' + time.substring(0, 5) + ' on ' + value.DATE + '</span><br><span class="kt-widget3__time">' + response1.data.NAME + '</span></div><a href="' +
                                newUrl + '" class="kt-widget3__status kt-font-info">View</a></div></div >');
                        }
                        else if (value.STATUS == 4) {
                            $('#userReports').append('<div class="kt-widget3__item">' +
                                '<div class="kt-widget3__header" >' +
                                '<div class="kt-widget3__user-img">' +
                                '<span class="kt-badge kt-badge--lg kt-badge--rounded kt-badge--bold kt-font-success"></span></div>' +
                                '<div class="kt-widget3__info"><a class="kt-widget3__username">Course Specification</a><span class="ml-4 kt-badge kt-badge--inline kt-badge--danger">Feedback-ed at ' + time.substring(0, 5) + ' on ' + value.DATE + '</span><br><span class="kt-widget3__time">' + response1.data.NAME + '</span></div>' +
                                '</div></div >');
                        }
                        else if (value.STATUS == 3) {
                            var currentUrl = 'https://qupe-backend.herokuapp.com/gp2/TheHead/CourseSpeci.html';
                            var url = new URL(currentUrl);
                            url.searchParams.set("id", value.ID);
                            var newUrl = url.href;
                            $('#userReports').append('<div class="kt-widget3__item">' +
                                '<div class="kt-widget3__header" >' +
                                '<div class="kt-widget3__user-img">' +
                                '<span class="kt-badge kt-badge--lg kt-badge--rounded kt-badge--bold kt-font-success"></span></div>' +
                                '<div class="kt-widget3__info"><a class="kt-widget3__username">Course Specification</a><span class="ml-4 kt-badge kt-badge--inline kt-badge--info">Submitted at ' + time.substring(0, 5) + ' on ' + value.DATE + '</span><br><span class="kt-widget3__time">' + response1.data.NAME + '</span></div><a href="' +
                                newUrl + '" class="kt-widget3__status kt-font-info">View</a></div></div >');
                        }
                        else {
                            $('#userReports').append('<div class="kt-widget3__item">' +
                                '<div class="kt-widget3__header" >' +
                                '<div class="kt-widget3__user-img">' +
                                '<span class="kt-badge kt-badge--lg kt-badge--rounded kt-badge--bold kt-font-success"></span></div>' +
                                '<div class="kt-widget3__info"><a class="kt-widget3__username">Course Specification</a><br><span class="kt-widget3__time">' + response1.data.NAME + '</span></div>' +
                                '</div></div >');
                        }
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
    axios({
        method: 'post',
        url: 'https://qupe-backend.herokuapp.com/backend/verified-user-cr.php',
        data: {
            user_id: userId
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $.each(response.data, function (key, value) {
                let time = value.TIME;
                axios({
                    method: 'post',
                    url: 'https://qupe-backend.herokuapp.com/backend/fetch-courseName-from-crId.php',
                    data: {
                        cr_id: value.ID
                    }
                })
                    .then(function (response1) {
                        //handle success
                        console.log(response1);
                        //checkUserReports(value.ID);

                        if (value.STATUS == 5) {
                            var currentUrl = 'https://qupe-backend.herokuapp.com/gp2/TheHead/verified-CourseReport.html';
                            var url = new URL(currentUrl);
                            url.searchParams.set("id", value.ID);
                            var newUrl = url.href;
                            $('#userReports').append('<div class="kt-widget3__item">' +
                                '<div class="kt-widget3__header" >' +
                                '<div class="kt-widget3__user-img">' +
                                '<span class="kt-badge kt-badge--lg kt-badge--rounded kt-badge--bold kt-font-success"></span></div>' +
                                '<div class="kt-widget3__info"><a class="mr-5 kt-widget3__username">Course Report</a><span class="ml-4 kt-badge kt-badge--inline kt-badge--success">Verified at ' + time.substring(0, 5) + ' on ' + value.DATE + '</span><br><span class="kt-widget3__time">' + response1.data.NAME + '</span></div><a href="' +
                                newUrl + '" class="kt-widget3__status kt-font-info">View</a></div></div >');
                        }
                        else if (value.STATUS == 4) {

                            $('#userReports').append('<div class="kt-widget3__item">' +
                                '<div class="kt-widget3__header" >' +
                                '<div class="kt-widget3__user-img">' +
                                '<span class="kt-badge kt-badge--lg kt-badge--rounded kt-badge--bold kt-font-success"></span></div>' +
                                '<div class="kt-widget3__info"><a class="mr-5 kt-widget3__username">Course Report</a><span class="ml-4 kt-badge kt-badge--inline kt-badge--danger">Feedback-ed at ' + time.substring(0, 5) + ' on ' + value.DATE + '</span><br><span class="kt-widget3__time">' + response1.data.NAME + '</span></div>' +
                                '</div></div >');
                        }
                        else if (value.STATUS == 3) {
                            var currentUrl = 'https://qupe-backend.herokuapp.com/gp2/TheHead/CourseReport.html';
                            var url = new URL(currentUrl);
                            url.searchParams.set("id", value.ID);
                            var newUrl = url.href;
                            $('#userReports').append('<div class="kt-widget3__item">' +
                                '<div class="kt-widget3__header" >' +
                                '<div class="kt-widget3__user-img">' +
                                '<span class="kt-badge kt-badge--lg kt-badge--rounded kt-badge--bold kt-font-success"></span></div>' +
                                '<div class="kt-widget3__info"><a class="mr-5 kt-widget3__username">Course Report</a><span class="ml-4 kt-badge kt-badge--inline kt-badge--info">Submitted at ' + time.substring(0, 5) + ' on ' + value.DATE + '</span><br><span class="kt-widget3__time">' + response1.data.NAME + '</span></div><a href="' +
                                newUrl + '" class="kt-widget3__status kt-font-info">View</a></div></div >');
                        }
                        else {
                            $('#userReports').append('<div class="kt-widget3__item">' +
                                '<div class="kt-widget3__header" >' +
                                '<div class="kt-widget3__user-img">' +
                                '<span class="kt-badge kt-badge--lg kt-badge--rounded kt-badge--bold kt-font-success"></span></div>' +
                                '<div class="kt-widget3__info"><a class="mr-5 kt-widget3__username">Course Report</a><br><span class="kt-widget3__time">' + response1.data.NAME + '</span></div>' +
                                '</div></div >');
                        }
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
