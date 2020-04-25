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

function getCoursesFromDept(dept_id) {
    axios({
        method: 'post',
        url: 'https://unadaptable-odors.000webhostapp.com/backend/fetch-courses-from-dept.php',
        data: {
            dept: dept_id
        }
    })
        .then(function (response) {
            //handle success

            let $select = $('#cb_courses');
            console.log(response);
            $.each(response.data, function (key, value) {
                var isLastElement = key == response.data.length - 1;

                if (isLastElement) {
                    $select.append('<label class="kt-checkbox courses-label"><input class="courses" type = "checkbox" name="courses" value="' + value.ID + '" >' + value.NAME + '<span ></span></label >');
                    $select.append('<div id="courses-error" class="error invalid-feedback">You have to choose one at least.</div>');
                }

                else
                    $select.append('<label class="kt-checkbox courses-label"><input class="courses" type = "checkbox" name="courses" value="' + value.ID + '" >' + value.NAME + '<span ></span></label >');
            });
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

}

function getCoursesFromUser(user_id) {
    axios({
        method: 'post',
        url: 'https://unadaptable-odors.000webhostapp.com/backend/courses-from-userId.php',
        data: {
            user: user_id
        }
    })
        .then(function (response) {
            //handle success

            let $select = $('#user_courses');
            console.log(response);
            $.each(response.data, function (key, value) {
                $select.append('<span class="kt-badge kt-badge--inline kt-badge--warning">' + value.NAME + '</span> ');
            });
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
}

function getFormData($form) {
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};
    let coursesArray = [];
    $.each(unindexed_array, function (index, value) {
        if (value['name'] == 'courses')
            coursesArray.push(value['value']);
    });
    $.map(unindexed_array, function (n, i) {
        if (n['name'] == 'courses')
            indexed_array[n['name']] = coursesArray;

        else
            indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}
$(document).ready(function () {
    axios({
        method: 'post',
        url: 'https://unadaptable-odors.000webhostapp.com/backend/user-name.php'
    })
        .then(function (response) {
            //handle success
            let $select = $('#user-name');
            console.log(response);
            $.each(response.data, function (key, value) {
                $select.append(value.FIRST_NAME);

            });



        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

    var url_string = window.location.href
    var url = new URL(url_string);
    var userId = url.searchParams.get("id");

    axios({
        method: 'post',
        url: 'https://unadaptable-odors.000webhostapp.com/backend/one-user.php',
        data: {
            user_id: userId
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            if (response.data.ROLE == 4) {
                $('#editUser').append('<div class="form-group row"><label class="col-lg-4 col-form-label">First Name:</label><div class="col-lg-8"><input type="text" name="fName" class="form-control"  value="' + response.data.FIRST_NAME
                    + '"></div></div><div class="form-group row"><label class="col-lg-4 col-form-label">Last Name:</label><div class="col-lg-8"><input type="text" name="lName" class="form-control" value="' + response.data.LAST_NAME
                    + '"></div></div><div class="form-group row"><label class="col-lg-4 col-form-label">Registed courses:</label><div class="col-lg-8"><div class="kt-checkbox-list" id="user_courses"></div></div></div>' +
                    '<div class="form-group row"><label class="col-lg-4 col-form-label">New courses:</label><div class="col-lg-8"><div class="kt-checkbox-list" id="cb_courses"></div></div></div>');
                getCoursesFromUser(response.data.ID);
                getCoursesFromDept(response.data.DEPT_ID);
            }
            else {
                $('#editUser').append('</div></div><div class="form-group row"><label class="col-lg-4 col-form-label">First Name:</label><div class="col-lg-8"><input type="text" name="fName" class="form-control"  value="' + response.data.FIRST_NAME
                    + '"></div></div><div class="form-group row"><label class="col-lg-4 col-form-label">Last Name:</label><div class="col-lg-8"><input type="text" name="lName" class="form-control" value="' + response.data.LAST_NAME
                    + '"></div></div>');
            }
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });


    $('#edit-user').submit(function (event) {
        event.preventDefault();
        var form = $('#edit-user');
        var values = getFormData(form);
        values.user_id = userId;
        console.log(values);
        var btn = $(this);
        let isCoursesRequired = !values['courses'] || values['courses'].length == 0;
        form.validate({
            rules: {

                fName: {
                    required: true
                },
                lName: {
                    required: true
                }
            }
        });
        if (isCoursesRequired) {
            $('#courses-error').addClass('d-inline');
            return;
        }

        if (!form.valid()) {
            return;
        }

        btn.addClass('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light').attr('disabled', true);

        axios({
            method: 'post',
            url: 'https://unadaptable-odors.000webhostapp.com/backend/edit-user.php',
            data: values
        })
            .then(function (response) {
                //handle success
                console.log(response);
                showErrorMsg(form, 'success', 'User successfully updated!');

            })
            .catch(function (response) {
                //handle error
                console.log(response);
                showErrorMsg(form, 'danger', 'Something went wrong. Please try again later');
            });


    });

    $('#delete_user').click(function () {

        swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete user.'
        }).then(function (result) {
            if (result.value) {
                axios({
                    method: 'post',
                    url: 'https://unadaptable-odors.000webhostapp.com/backend/delete-user.php',
                    data: {
                        user_id: userId
                    }
                }).then(function (response) {
                    console.log(response);
                    swal.fire(
                        'Deleted!',
                        'User has been deleted.',
                        'success'
                    )
                });

            }

        });
    });
    $('#cancel').click(function () {
        window.location.href = "https://tomader.github.io/qupe/gp2/admin/adminIndex.html";
    });

});
