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
        url: 'https://gp2.herokuapp.com/backend/user-name.php'
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $.each(response.data, function (key, value) {
                $('#editUser').append('</div></div><div class="form-group row"><label class="col-lg-4 col-form-label">First Name:</label><div class="col-lg-8"><input type="text" name="email" class="form-control"  value="' + value.EMAIL
                    + '"></div></div><div class="form-group row"><label class="col-lg-4 col-form-label">Last Name:</label><div class="col-lg-8"><input type="password" name="password" class="form-control" value="' + value.PASSWORD
                    + '"></div></div>');
            });
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });


    $('#edit-user').submit(function (event) {
        event.preventDefault();
        var form = $('#edit-user');
        var values = getFormData(form);
        console.log(values);
        var btn = $(this);
        form.validate({
            rules: {

                email: {
                    required: true
                },
                password: {
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
            url: 'https://gp2.herokuapp.com/backend/settings.php',
            data: values
        })
            .then(function (response) {
                //handle success
                console.log(response);
                showErrorMsg(form, 'success', 'Changes saved successfully.');

            })
            .catch(function (response) {
                //handle error
                console.log(response);
                showErrorMsg(form, 'danger', 'Someone is already using this email.');
            });


    });

});
