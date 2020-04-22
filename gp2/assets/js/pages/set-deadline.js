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
        url: 'https://gp2.herokuapp.com/backend/fetch-deadline.php'
    })
        .then(function (response) {
            $('#set-deadline').append('On the day: <input type="date" class="form-control" name="date" value="' + response.data.DATE + '"></br>' +
                'at time: <input type="time" class="form-control" name="time" value="' + response.data.TIME + '">');

        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    $('#deadline').submit(function (event) {
        event.preventDefault();
        var form = $('#deadline');
        var values = getFormData(form);
        console.log(values);
        var btn = $(this);
        form.validate({
            rules: {
                date: {
                    required: true
                },
                time: {
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
            url: 'https://gp2.herokuapp.com/backend/set-deadline.php',
            data: values
        })
            .then(function (response) {
                //handle success
                console.log(response);
                showErrorMsg(form, 'success', 'Deadline has been set.');

            })
            .catch(function (response) {
                //handle error
                console.log(response);
                showErrorMsg(form, 'danger', 'Something went wrong, please try again later.');
            });


    });
});