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
        url: 'http://phpstack-399934-1259248.cloudwaysapps.com/backend/user-name.php'
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
        url: 'http://phpstack-399934-1259248.cloudwaysapps.com/backend/one-user.php',
        data: {
            user_id: userId
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);

            $('#editUser').append('</div></div><div class="form-group row"><label class="col-lg-4 col-form-label">First Name:</label><div class="col-lg-8"><input type="text" name="fName" class="form-control"  value="' + response.data.FIRST_NAME
                + '"></div></div><div class="form-group row"><label class="col-lg-4 col-form-label">Last Name:</label><div class="col-lg-8"><input type="text" name="lName" class="form-control" value="' + response.data.LAST_NAME
                + '"></div></div>');

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

        if (!form.valid()) {
            return;
        }

        btn.addClass('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light').attr('disabled', true);

        axios({
            method: 'post',
            url: 'http://phpstack-399934-1259248.cloudwaysapps.com/backend/edit-user.php',
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
                    url: 'http://phpstack-399934-1259248.cloudwaysapps.com/backend/delete-user.php',
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
