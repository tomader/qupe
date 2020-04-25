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
        url: 'https://qupe.000webhostapp.com/backend/user-name.php'
    })
        .then(function (response) {
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

    axios({
        method: 'post',
        url: 'https://qupe.000webhostapp.com/backend/fetch_dept.php'
    })
        .then(function (response) {
            //handle success
            let $select = $('#dept_id');
            console.log(response);
            $.each(response.data, function (key, value) {
                $select.append('<option value=' + value.ID + '>' + value.NAME + '</option>');
            });
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });


    $('#addCourse').submit(function (event) {
        event.preventDefault();
        var form = $('#addCourse');
        var values = getFormData(form);
        console.log(values);
        var btn = $(this);
        form.validate({
            rules: {
                cName: {
                    required: true
                },
                cc: {
                    required: true
                },
                hours: {
                    required: true
                },

                dept: {
                    required: true
                }
            }
        });

        if (!form.valid()) {
            return;
        }

        btn.addClass('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light').attr('disabled', true);

        axios({
            method: 'post',
            url: 'https://qupe.000webhostapp.com/backend/add-course.php',
            data: values
        })
            .then(function (response) {
                //handle success
                console.log(response);
                showErrorMsg(form, 'success', 'Course added successfully!');

            })
            .catch(function (response) {
                //handle error
                console.log(response);
                showErrorMsg(form, 'danger', 'Course already exists.');
            });


    });
});