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
    let deadlineDate = 0;
    let deadlineTime = 0;

    axios({
        method: 'post',
        url: 'https://qupe-backend.herokuapp.com/backend/fetch-deadline.php',
        data: {
            course_id: courseId
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            deadlineDate = response.data.DATE;
            deadlineTime = response.data.TIME;

        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

    axios({
        method: 'post',
        url: 'https://qupe-backend.herokuapp.com/backend/submitted-cs.php',
        data: {
            course_id: courseId
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            let $select = $('#reports');
            $.each(response.data, function (key, value) {

                axios({
                    method: 'post',
                    url: 'https://qupe-backend.herokuapp.com/backend/userName-from-csID.php',
                    data: {
                        cs_id: value.ID
                    }
                })
                    .then(function (response) {
                        //handle success
                        console.log(response);
                        var currentUrl = 'https://qupe-backend.herokuapp.com/gp2/qualityMember/CourseSpeci.html';
                        var url = new URL(currentUrl);
                        url.searchParams.set("id", value.ID);
                        var courseSpeci = url.href;
                        console.log(deadlineDate);
                        if (time <= deadlineTime && value.DATE <= deadlineDate) {
                            $select.append('<div class="col-lg-6"><div id="icon-color" class="kt-portlet kt-iconbox kt-iconbox--wave col-8">' +
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
                                '</svg> </div>' +
                                '<div class="kt-iconbox__desc" ><span class="mb-4 kt-badge kt-badge--inline kt-badge--info">Submitted at ' + value.TIME.substring(0, 5) + ' on ' + value.DATE + '</span>' +
                                '<h5 class="mb-5">Course Specification</h5>' +

                                '<h3 class="kt-iconbox__title"><a class="kt-link" href="' + courseSpeci + '">By: ' + response.data.FIRST_NAME + ' ' + response.data.LAST_NAME + '</a></h3>' +

                                '</div>' +
                                '</div >' +
                                '</div >' +
                                '</div ></div>');


                            // else {
                            //     $('#courseName').append('<h3 class="kt-subheader__title">' + response.data.NAME + ' IS ALREADY SUBMITTED!</h3>');

                            // }
                        }
                        else {
                            $select.append('<div class="col-lg-6"><div id="icon-color" class="kt-portlet kt-iconbox kt-iconbox--wave col-8">' +
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
                                '</svg> </div>' +
                                '<div class="kt-iconbox__desc" ><span class="mb-4 kt-badge kt-badge--inline kt-badge--danger">Late submission at ' + time.substring(0, 5) + ' on ' + value.DATE + '</span>' +
                                '<h5 class="mb-5">Course Specification</h5>' +

                                '<h3 class="kt-iconbox__title"><a class="kt-link" href="' + courseSpeci + '" >By: ' + response.data.FIRST_NAME + ' ' + response.data.LAST_NAME + '</a></h3>' +

                                '</div>' +
                                '</div >' +
                                '</div >' +
                                '</div ></div>');
                        }
                        //$('#userName').append();
                    })
                    .catch(function (response) {
                        //handle error
                        console.log(response);
                    });

            });

        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

    axios({
        method: 'post',
        url: 'https://qupe-backend.herokuapp.com/backend/submitted-cr.php',
        data: {
            course_id: courseId
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            let $select = $('#reports');
            $.each(response.data, function (key, value) {
                let time = value.TIME;
                axios({
                    method: 'post',
                    url: 'https://qupe-backend.herokuapp.com/backend/userName-from-crID.php',
                    data: {
                        cr_id: value.ID
                    }
                })
                    .then(function (response) {
                        //handle success
                        var currentUrl = 'https://qupe-backend.herokuapp.com/gp2/qualityMember/CourseReport.html';
                        var url = new URL(currentUrl);
                        url.searchParams.set("id", value.ID);
                        var courseReport = url.href;
                        if (time <= deadlineTime && value.DATE <= deadlineDate) {
                            $select.append('<div class="col-lg-6"><div id="icon-color" class="kt-portlet kt-iconbox kt-iconbox--wave col-8">' +
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
                                '</svg> </div>' +
                                '<div class="kt-iconbox__desc" ><span class="mb-4 kt-badge kt-badge--inline kt-badge--info">Submitted at ' + time.substring(0, 5) + ' on ' + value.DATE + '</span>' +
                                '<h5 class="mb-5">Course Report</h5>' +

                                '<h3 class="kt-iconbox__title"><a class="kt-link" href="' + courseReport + '" >By: ' + response.data.FIRST_NAME + ' ' + response.data.LAST_NAME + '</a></h3>' +

                                '</div>' +
                                '</div >' +
                                '</div >' +
                                '</div ></div>');

                            // else {
                            //     $('#courseName').append('<h3 class="kt-subheader__title">' + response.data.NAME + ' IS ALREADY SUBMITTED!</h3>');

                            // }
                        }
                        else {
                            $select.append('<div class="col-lg-6"><div id="icon-color" class="kt-portlet kt-iconbox kt-iconbox--wave col-8">' +
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
                                '</svg> </div>' +
                                '<div class="kt-iconbox__desc" ><span class="mb-4 kt-badge kt-badge--inline kt-badge--danger">Late submission at ' + time.substring(0, 5) + ' on ' + value.DATE + '</span>' +
                                '<h5 class="mb-5">Course Report</h5>' +

                                '<h3 class="kt-iconbox__title"><a class="kt-link" href="' + courseReport + '"  >By: ' + response.data.FIRST_NAME + ' ' + response.data.LAST_NAME + '</a></h3>' +

                                '</div>' +
                                '</div >' +
                                '</div >' +
                                '</div ></div>');
                        }
                    })
                    .catch(function (response) {
                        //handle error
                        console.log(response);
                    });

            });
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });



});


