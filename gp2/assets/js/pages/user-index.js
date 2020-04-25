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
function getAnnouncerName(user_id) {
    axios({
        method: 'post',
        url: 'http://phpstack-399934-1259248.cloudwaysapps.com/backend/one-user.php',
        data: {
            user_id: user_id
        }
    })
        .then(function (response) {
            //handle success
            let $select = $('#announcer');
            console.log(response);
            $select.append(response.data.FIRST_NAME + ' ' + response.data.LAST_NAME);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
}
$(document).ready(function () {
    axios({
        method: 'post',
        url: 'http://phpstack-399934-1259248.cloudwaysapps.com/backend/user-name.php'
    })
        .then(function (response) {
            $.each(response.data, function (key, value) {
                $('#user-name').append(value.FIRST_NAME);
            });
            // if (response.data.ROLE == 4) {
            //     $('#user-name').append(response.data.FIRST_NAME);
            // }
            // else {
            //     window.location.href = "https://tomader.github.io/qupe/gp2/error-page.html";
            // }
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });


    axios({
        method: 'post',
        url: 'http://phpstack-399934-1259248.cloudwaysapps.com/backend/user-courses.php'
    })
        .then(function (response) {
            //handle success
            let $select = $('#user-courses');
            console.log(response);
            $.each(response.data, function (key, value) {
                var currentUrl = 'http://phpstack-399934-1259248.cloudwaysapps.com/gp2/faculty/one-course.html';
                var url = new URL(currentUrl);
                url.searchParams.set("id", value.ID); // setting your param
                var newUrl = url.href;

                $select.append('<li class="kt-menu__item " aria-haspopup="true"><a href = "' + newUrl + '" class= "kt-menu__link " > <i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">'
                    + value.NAME + '</span></a ></li >');

                //$('#curriculum').html(data);
            });

        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

    axios({
        method: 'post',
        url: 'http://phpstack-399934-1259248.cloudwaysapps.com/backend/fetch-announce.php'
    })
        .then(function (response) {
            //handle success
            let $select = $('#announces');
            console.log(response);
            $.each(response.data, function (key, value) {
                let time = value.TIME;
                if (value.IS_QUALITY != 1) {
                    if (value.USER_ROLE == 2) {
                        $select.append('<div class= " kt-timeline-v3__item kt-timeline-v3__item--info"><span class=" kt-timeline-v3__item-time">' + time.substring(0, 5) + '</span><div class=" kt-timeline-v3__item-desc"><span class="kt-timeline-v3__item-text">' +
                            value.CONTENT + '</span><br><span class="kt-timeline-v3__item-user-name"><a class="kt-link--dark kt-timeline-v3__item-link" id="announcer">By </a></span></div></div>');
                        getAnnouncerName(value.USER_ID);
                    }
                    else if (value.USER_ROLE == 1) {
                        $select.append('<div class= " kt-timeline-v3__item kt-timeline-v3__item--warning"><span class=" kt-timeline-v3__item-time">' + time.substring(0, 5) + '</span><div class=" kt-timeline-v3__item-desc"><span class="kt-timeline-v3__item-text">' +
                            value.CONTENT + '</span><br><span class="kt-timeline-v3__item-user-name"><a class="kt-link--dark kt-timeline-v3__item-link">By Admin</a></span></div></div>');
                    }
                }
                //$('#curriculum').html(data);
            });

        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    axios({
        method: 'post',
        url: 'http://phpstack-399934-1259248.cloudwaysapps.com/backend/fetch-feedback-CR.php'
    })
        .then(function (response) {
            //handle success
            console.log(response);
            axios({
                method: 'post',
                url: 'http://phpstack-399934-1259248.cloudwaysapps.com/backend/fetch-feedback-CS.php'
            })
                .then(function (response2) {
                    //handle success
                    console.log(response2);
                    let n = response.data.length + response2.data.length;
                    if (n > 0)
                        $('#fb-num').append('<span class="ml-1 kt-badge kt-badge--danger">' + n + '</span>');

                })
                .catch(function (response2) {
                    //handle error
                    console.log(response2);
                });

        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });


});
