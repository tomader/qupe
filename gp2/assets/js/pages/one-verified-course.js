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
function getUserName(csID) {
    axios({
        method: 'post',
        url: 'https://qupe-backend.herokuapp.com/backend/userName-from-csID.php',
        data: {
            cs_id: csID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);

            $('#userName').append('By: ' + response.data.FIRST_NAME + ' ' + response.data.LAST_NAME);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
}

function getCourseName(courseId) {
    axios({
        method: 'post',
        url: 'https://qupe-backend.herokuapp.com/backend/get-courseName.php',
        data: {
            course_id: courseId
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#courseName').append('<h3 class="kt-subheader__title">' + response.data.NAME + '</h3>');


        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
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
    var courseId = url.searchParams.get("id");
    getCourseName(courseId);
    axios({
        method: 'post',
        url: 'https://qupe-backend.herokuapp.com/backend/verified-cs.php',
        data: {
            course_id: courseId
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            let $select = $('#cs');
            $.each(response.data, function (key, value) {
                let time = value.TIME;
                getUserName(value.ID);
                var currentUrl = 'https://qupe-backend.herokuapp.com/gp2/TheHead/CourseSpeci.html';
                var url = new URL(currentUrl);
                url.searchParams.set("id", value.ID);
                var courseSpeci = url.href;
                $select.append('<div id="icon-color" class="kt-portlet kt-iconbox kt-iconbox--success kt-iconbox--wave col-8">' +
                    ' <div class= "kt-portlet__body" >' +
                    '<div class="kt-iconbox__body">' +
                    '<div class="kt-iconbox__icon">' +
                    '<svg xmlns="http://www.w3.org/2000/svg"' +
                    'xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"' +
                    'height="24px" viewBox="0 0 24 24" version="1.1"' +
                    'class="kt-svg-icon">' +
                    '<g stroke="none" stroke-width="1" fill="none"' +
                    'fill-rule="evenodd">' +
                    '<rect x="0" y="0" width="24" height="24" />' +
                    '<path d="M8,3 L8,3.5 C8,4.32842712 8.67157288,5 9.5,5 L14.5,5 C15.3284271,5 16,4.32842712 16,3.5 L16,3 L18,3 C19.1045695,3 20,3.8954305 20,5 L20,21 C20,22.1045695 19.1045695,23 18,23 L6,23 C4.8954305,23 4,22.1045695 4,21 L4,5 C4,3.8954305 4.8954305,3 6,3 L8,3 Z"' +
                    'fill="#000000" opacity="0.3" />' +
                    '<path d="M11,2 C11,1.44771525 11.4477153,1 12,1 C12.5522847,1 13,1.44771525 13,2 L14.5,2 C14.7761424,2 15,2.22385763 15,2.5 L15,3.5 C15,3.77614237 14.7761424,4 14.5,4 L9.5,4 C9.22385763,4 9,3.77614237 9,3.5 L9,2.5 C9,2.22385763 9.22385763,2 9.5,2 L11,2 Z"' +
                    'fill = "#000000" />' +
                    '<rect fill="#000000" opacity="0.3" x="10" y="9" width="7"' +
                    'height="2" rx="1" />' +
                    '<rect fill="#000000" opacity="0.3" x="7" y="9" width="2"' +
                    'height="2" rx="1" />' +
                    '<rect fill="#000000" opacity="0.3" x="7" y="13" width="2"' +
                    'height="2" rx="1" />' +
                    '<rect fill="#000000" opacity="0.3" x="10" y="13" width="7"' +
                    'height="2" rx="1" />' +
                    '<rect fill="#000000" opacity="0.3" x="7" y="17" width="2"' +
                    'height="2" rx="1" />' +
                    '<rect fill="#000000" opacity="0.3" x="10" y="17" width="7"' +
                    'height="2" rx="1" /></g>' +
                    '</svg> <span class= "kt-badge   kt-badge--inline " >verified</span ></div>' +
                    '<div class="kt-iconbox__desc" ><span class="mb-4 kt-badge kt-badge--inline kt-badge--success">Submitted at ' + time.substring(0, 5) + ' on ' + value.DATE + '</span>' +
                    '<h5 class="mb-5">Course Specification</h5>' +

                    '<h3 class="kt-iconbox__title"><a class="kt-link" href="' + courseSpeci + '" id="userName"></a></h3>' +

                    '</div>' +
                    '</div >' +
                    '</div >' +
                    '</div >');

                // var currentUrl = 'https://qupe-backend.herokuapp.com/gp2/quality/CourseReport.html';
                // var url = new URL(currentUrl);
                // url.searchParams.set("id", value.USER_ID);
                // var courseReport = url.href;
                // $('#cr').append('<div id="icon-color" class="kt-portlet kt-iconbox kt-iconbox--wave">' +
                //     ' <div class= "kt-portlet__body" >' +
                //     '<div class="kt-iconbox__body">' +
                //     '<div class="kt-iconbox__icon">' +
                //     '<svg xmlns="http://www.w3.org/2000/svg"' +
                //     'xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"' +
                //     'height="24px" viewBox="0 0 24 24" version="1.1"' +
                //     'class="kt-svg-icon">' +
                //     '<g stroke="none" stroke-width="1" fill="none"' +
                //     'fill-rule="evenodd">' +
                //     '<rect x="0" y="0" width="24" height="24" />' +
                //     '<path d="M8,3 L8,3.5 C8,4.32842712 8.67157288,5 9.5,5 L14.5,5 C15.3284271,5 16,4.32842712 16,3.5 L16,3 L18,3 C19.1045695,3 20,3.8954305 20,5 L20,21 C20,22.1045695 19.1045695,23 18,23 L6,23 C4.8954305,23 4,22.1045695 4,21 L4,5 C4,3.8954305 4.8954305,3 6,3 L8,3 Z"' +
                //     'fill="#000000" opacity="0.3" />' +
                //     '<path d="M10.875,15.75 C10.6354167,15.75 10.3958333,15.6541667 10.2041667,15.4625 L8.2875,13.5458333 C7.90416667,13.1625 7.90416667,12.5875 8.2875,12.2041667 C8.67083333,11.8208333 9.29375,11.8208333 9.62916667,12.2041667 L10.875,13.45 L14.0375,10.2875 C14.4208333,9.90416667 14.9958333,9.90416667 15.3791667,10.2875 C15.7625,10.6708333 15.7625,11.2458333 15.3791667,11.6291667 L11.5458333,15.4625 C11.3541667,15.6541667 11.1145833,15.75 10.875,15.75 Z"' +
                //     'fill="#000000" />' +
                //     '<path d="M11,2 C11,1.44771525 11.4477153,1 12,1 C12.5522847,1 13,1.44771525 13,2 L14.5,2 C14.7761424,2 15,2.22385763 15,2.5 L15,3.5 C15,3.77614237 14.7761424,4 14.5,4 L9.5,4 C9.22385763,4 9,3.77614237 9,3.5 L9,2.5 C9,2.22385763 9.22385763,2 9.5,2 L11,2 Z"' +
                //     'fill="#000000" />' +
                //     '</g>' +
                //     '</svg> </div>' +
                //     '<div class="kt-iconbox__desc">' +
                //     '<h3 class="kt-iconbox__title"><a class="kt-link" href="' + courseReport + '">Course Report</a></h3>' +

                //     '</div>' +
                //     '<div class="kt-iconbox__content">Saved!</div>' +
                //     '</div >' +
                //     '</div >' +
                //     '</div >');

                // else {
                //     $('#courseName').append('<h3 class="kt-subheader__title">' + response.data.NAME + ' IS ALREADY SUBMITTED!</h3>');

                // }
            });
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });



});


