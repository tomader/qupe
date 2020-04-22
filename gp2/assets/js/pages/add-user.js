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
        url: 'https://gp2.herokuapp.com/backend/fetch-courses-from-dept.php',
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
                    $select.append('<label class="kt-checkbox courses-label"><input class="courses" type = "checkbox" name="courses[]" value="' + value.ID + '" >' + value.NAME + '<span ></span></label >');
                    $select.append('<div id="courses-error" class="error invalid-feedback">You have to choose one at least.</div>');
                }

                else
                    $select.append('<label class="kt-checkbox courses-label"><input class="courses" type = "checkbox" name="courses[]" value="' + value.ID + '" >' + value.NAME + '<span ></span></label >');
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
        if (value['name'] == 'courses[]')
            coursesArray.push(value['value']);
    });
    $.map(unindexed_array, function (n, i) {
        if (n['name'] == 'courses[]')
            indexed_array[n['name']] = coursesArray;

        else
            indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}
$(document).ready(function () {
    axios({
        method: 'post',
        url: 'https://gp2.herokuapp.com/backend/user-name.php'
    })
        .then(function (response) {
            $('#user-name').append(response.data.FIRST_NAME);
            //handle success
            // if (response.data.ROLE == 1)
            //     $('#user-name').append(response.data.FIRST_NAME);
            // else
            //     window.location.href = "https://tomader.github.io/qupe/gp2/error-page.html";



        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

    $('.courses').on('click', function () {
        console.log(this.checked);
        if (this.checked) {
            // do something when checked
        }
    });
    axios({
        method: 'post',
        url: 'https://gp2.herokuapp.com/backend/fetch_dept.php'
    })
        .then(function (response) {
            //handle success
            let $select = $('#dept_id');
            console.log(response);
            $.each(response.data, function (key, value) {
                $select.append('<option value=' + value.ID + '>' + value.NAME + '</option>');
            });
            $('#dept_id').promise().done(function () {
                getCoursesFromDept($('#dept_id')[0].value);
            });


        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    $('#dept_id').on('change', function () {
        $('.courses-label').remove();
        //$('#courses-error').remove();
        getCoursesFromDept(this.value);
    });


    $('#add_faculty').submit(function (event) {
        event.preventDefault();
        var form = $('#add_faculty');
        var values = getFormData(form);
        console.log(values);
        var btn = $(this);
        let isCoursesRequired = !values['courses[]'] || values['courses[]'].length == 0;
        form.validate({
            rules: {
                email: {
                    required: true,
                    email: true
                },
                fName: {
                    required: true
                },
                lName: {
                    required: true
                },
                pw: {
                    required: true
                },
                dept: {
                    required: true
                },
                college: {
                    required: true
                },
                insti: {
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
            url: 'https://gp2.herokuapp.com/backend/add-faculty.php',
            data: values
        })
            .then(function (response) {
                //handle success
                console.log(response);
                showErrorMsg(form, 'success', 'User successfully added!');

            })
            .catch(function (response) {
                //handle error
                console.log(response);
                showErrorMsg(form, 'danger', 'Someone is already using this email.');
            });


    });

});
