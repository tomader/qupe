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
    axios({
        method: 'post',
        url: 'https://qupe.herokuapp.com/backend/user-courses.php'
    })
        .then(function (response) {
            //handle success
            let $select = $('#userCourses');
            console.log(response);
            $.each(response.data, function (key, value) {
                var currentUrl = 'https://qupe.herokuapp.com/gp2/faculty/one-course.html';
                var url = new URL(currentUrl);
                url.searchParams.set("id", value.ID); // setting your param
                var newUrl = url.href;
                $select.append('<div class="col-lg-4 col-md-6"><div class= "kt-portlet kt-callout kt-callout--diagonal-bg"><div class="kt-portlet__body"><div class="kt-callout__body"><a href="' + newUrl + '"><div class="kt-callout__content"><p class="kt-callout__desc">' +
                    value.CODE + '</p> <h3 class="kt-callout__title">' +
                    value.NAME + '</h3></div></a><div class="kt-callout__action"><a href="' + newUrl + '" class="btn btn-custom btn-bold btn-upper btn-font-sm  btn-info">Submit</a></div></div></div></div></div>');

            });



        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
});
