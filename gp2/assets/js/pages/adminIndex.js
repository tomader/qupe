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
$(document).ready(function () {


    axios({
        method: 'post',
        url: 'https://gp2.herokuapp.com/backend/user-name.php'
    })
        .then(function (response) {
            $.each(response.data, function (key, value) {
                $('#user-name').append(value.FIRST_NAME);
            });
            // if (response.data.ROLE == 1)
            //     $('#user-name').append(response.data.FIRST_NAME);
            // else
            //     window.location.href = "https://gp2.herokuapp.com/gp2/error-page.html";
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

    axios({
        method: 'post',
        url: 'https://gp2.herokuapp.com/backend/fetch-user.php'
    })
        .then(function (response) {
            //handle success
            console.log(response);

            let $select = $('#view_all');
            let role = '';
            $.each(response.data, function (key, value) {

                if (value.ROLE == 4) {
                    var currentUrl = 'https://gp2.herokuapp.com/gp2/admin/edit_faculty.html';
                    var url = new URL(currentUrl);
                    url.searchParams.set("id", value.ID);
                    var newUrl = url.href;
                    role = 'Faculty Member';
                    $select.append('<div class="kt-widget4__item"><div class= "kt-widget4__pic kt-widget4__pic--pic"><img src="../assets/media/users/default.jpg" alt=""></div><div class="kt-widget4__info"><a class="kt-widget4__username">' +
                        value.FIRST_NAME + ' ' + value.LAST_NAME + '</a><p class="kt-widget4__text">' +
                        role + '</p ></div ><a href="' + newUrl + '" class="btn btn-sm btn-label-brand btn-bold">Edit</a></div>');
                }
                if (value.ROLE == 3) {
                    var currentUrl = 'https://gp2.herokuapp.com/gp2/admin/edit_quality.html';
                    var url = new URL(currentUrl);
                    url.searchParams.set("id", value.ID);
                    var newUrl = url.href;
                    role = 'Quality Member';
                    $select.append('<div class="kt-widget4__item"><div class= "kt-widget4__pic kt-widget4__pic--pic"><img src="../assets/media/users/default.jpg" alt=""></div><div class="kt-widget4__info"><a class="kt-widget4__username">' +
                        value.FIRST_NAME + ' ' + value.LAST_NAME + '</a><p class="kt-widget4__text">' +
                        role + '</p ></div ><a href="' + newUrl + '" class="btn btn-sm btn-label-brand btn-bold">Edit</a></div >');
                }
                else if (value.ROLE == 2) {
                    var currentUrl = 'https://gp2.herokuapp.com/gp2/admin/edit_quality.html';
                    var url = new URL(currentUrl);
                    url.searchParams.set("id", value.ID);
                    var newUrl = url.href;
                    role = 'Head of Quality Unit';
                    $select.append('<div class="kt-widget4__item"><div class= "kt-widget4__pic kt-widget4__pic--pic"><img src="../assets/media/users/default.jpg" alt=""></div><div class="kt-widget4__info"><a class="kt-widget4__username">' +
                        value.FIRST_NAME + ' ' + value.LAST_NAME + '</a><p class="kt-widget4__text">' +
                        role + '</p ></div ><a href="' + newUrl + '" class="btn btn-sm btn-label-brand btn-bold">Edit</a></div >');
                }

            });

            $select = $('#view_faculty');
            role = '';
            $.each(response.data, function (key, value) {

                if (value.ROLE == 4) {
                    var currentUrl = 'https://gp2.herokuapp.com/gp2/admin/edit_faculty.html';
                    var url = new URL(currentUrl);
                    url.searchParams.set("id", value.ID);
                    var newUrl = url.href;
                    role = 'Faculty Member';
                    $select.append('<div class="kt-widget4__item"><div class= "kt-widget4__pic kt-widget4__pic--pic"><img src="../assets/media/users/default.jpg" alt=""></div><div class="kt-widget4__info"><a class="kt-widget4__username">' +
                        value.FIRST_NAME + ' ' + value.LAST_NAME + '</a><p class="kt-widget4__text">' +
                        role + '</p ></div ><a href="' + newUrl + '" class="btn btn-sm btn-label-brand btn-bold">Edit</a></div>');
                }

            });
            $select = $('#view_quality');
            role = '';
            $.each(response.data, function (key, value) {
                if (value.ROLE == 3) {
                    var currentUrl = 'https://gp2.herokuapp.com/gp2/admin/edit_quality.html';
                    var url = new URL(currentUrl);
                    url.searchParams.set("id", value.ID);
                    var newUrl = url.href;
                    role = 'Quality Member';
                    $select.append('<div class="kt-widget4__item"><div class= "kt-widget4__pic kt-widget4__pic--pic"><img src="../assets/media/users/default.jpg" alt=""></div><div class="kt-widget4__info"><a class="kt-widget4__username">' +
                        value.FIRST_NAME + ' ' + value.LAST_NAME + '</a><p class="kt-widget4__text">' +
                        role + '</p ></div ><a href="' + newUrl + '" class="btn btn-sm btn-label-brand btn-bold">Edit</a></div >');
                }
                else if (value.ROLE == 2) {
                    var currentUrl = 'https://gp2.herokuapp.com/gp2/admin/edit_quality.html';
                    var url = new URL(currentUrl);
                    url.searchParams.set("id", value.ID);
                    var newUrl = url.href;
                    role = 'Head of Quality Unit';
                    $select.append('<div class="kt-widget4__item"><div class= "kt-widget4__pic kt-widget4__pic--pic"><img src="../assets/media/users/default.jpg" alt=""></div><div class="kt-widget4__info"><a class="kt-widget4__username">' +
                        value.FIRST_NAME + ' ' + value.LAST_NAME + '</a><p class="kt-widget4__text">' +
                        role + '</p ></div ><a href="' + newUrl + '" class="btn btn-sm btn-label-brand btn-bold">Edit</a></div >');
                }

            });




        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

});
