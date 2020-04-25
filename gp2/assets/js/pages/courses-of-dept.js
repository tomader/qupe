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

$(document).ready(function () {
    var url_string = window.location.href
    var url = new URL(url_string);
    var deptId = url.searchParams.get("id");

    axios({
        method: 'post',
        url: 'https://unadaptable-odors.000webhostapp.com/backend/fetch-courses-from-dept.php',
        data: {
            dept: deptId
        }
    })
        .then(function (response) {
            //handle success
            let $select = $('#courses-of-dept');
            console.log(response);
            $.each(response.data, function (key, value) {
                var currentUrl = 'https://unadaptable-odors.000webhostapp.com/gp2/qualityMember/one-course-quality.html';
                var url = new URL(currentUrl);
                url.searchParams.set("id", value.ID);
                var newUrl = url.href;
                $select.append('<div class="col-lg-4 col-md-6"><div class= "kt-portlet kt-callout kt-callout--diagonal-bg kt-callout--brand"><div class="kt-portlet__body"><div class="kt-callout__body"><a href="' + newUrl + '"><div class="kt-callout__content"><p class="kt-callout__desc">' +
                    value.CODE + '</p> <h3 class="kt-callout__title">' +
                    value.NAME + '</h3></div></a><div class="kt-callout__action"></div></div></div></div></div>');

            });
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    axios({
        method: 'post',
        url: 'https://unadaptable-odors.000webhostapp.com/backend/one-dept.php',
        data: {
            dept: deptId
        }
    })
        .then(function (response) {
            //handle success
            $('#dept-name').append('<span class="kt-subheader__desc">' + response.data.NAME + '</span>');
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });


});
