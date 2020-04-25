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
        url: 'https://qupe-backend.herokuapp.com/backend/fetch-courses-from-dept.php',
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
                    $select.append('<div id="courses-error" class="error invalid-feedback">Choose one.</div>');
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

    $.map(unindexed_array, function (n, i) {
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}
function getProgName(progId) {
    axios({
        method: 'post',
        url: 'https://qupe-backend.herokuapp.com/backend/get-progName.php',
        data: {
            prog_id: progId
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#user_prog').append(response.data.NAME);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
}

function getDeptName(deptId) {
    axios({
        method: 'post',
        url: 'https://qupe-backend.herokuapp.com/backend/get-deptName.php',
        data: {
            dept_id: deptId
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#user_dept').append(response.data.NAME);
            getProgName(response.data.PROGRAM_ID);


        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
}
$('#AddKnowledge').click(function () {

    let i = 2;
    $('#here').append('<tr><th>' + i + '</th>' +
        '<td><input name="b-Knowledge-CLO" type="text" class="form-control"></td>' +
        '<td><input name="b-Knowledge-PLO" type="text" class="form-control"></td></tr>');

});
$(document).ready(function () {
    axios({
        method: 'post',
        url: 'https://qupe-backend.herokuapp.com/backend/user-name.php'
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $.each(response.data, function (key, value) {
                $('#user_college').append(value.COLLEGE_NAME);
                $('#user_insti').append(value.INSTI_NAME);
                getDeptName(value.DEPT_ID);
            });
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

    var url_string = window.location.href
    var url = new URL(url_string);
    var csId = url.searchParams.get("id");
    axios({
        method: 'post',
        url: 'https://qupe-backend.herokuapp.com/backend/courseInfo-from-csID.php',
        data: {
            cs_id: csId
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#courseName').append(response.data.NAME);
            $('#courseCode').append(response.data.CODE);
            $('#courseHours').append(response.data.HOURS);

        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });



    $('#courseSpeci').submit(function (event) {
        event.preventDefault();
        var form = $('#courseSpeci');
        var values = getFormData(form);
        values.cs_id = csId;
        console.log(values);
        var btn = $(this);
        form.validate({
            rules: {
                values: { required: true }
            }
        });

        if (!form.valid()) {
            return;
        }
        btn.addClass('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light').attr('disabled', true);

        axios({
            method: 'post',
            url: 'https://qupe-backend.herokuapp.com/backend/fill-courseSpeci.php',
            data: values
        })
            .then(function (response) {
                //handle success
                //fill_tableB_knowledge(response.data.ID);
                showErrorMsg(form, 'success', 'Report successfully submitted!');

            })
            .catch(function (response) {
                //handle error
                console.log(response);
                showErrorMsg(form, 'danger', 'Something went wrong, please try later.');
            });


    });
    $('#print').click(function () {
        var sTable = document.getElementById('report').innerHTML;

        var style = "<style>";
        style = style + "table {width: 100%;font: 17px Calibri;}";
        style = style + "table, th, td {  border: solid 1px #DDD; border-collapse: collapse;";
        style = style + "padding: 2px 3px;text-align: center;}";
        style = style + "h5 { color: rgb(240, 82, 82);}";
        style = style + "tr { text-decoration: BOLD;}";

        style = style + "</style>";

        // CREATE A WINDOW OBJECT.
        var win = window.open('', '', 'height=700,width=700');

        win.document.write('<html><head>');
        win.document.write(style);          // ADD STYLE INSIDE THE HEAD TAG.
        win.document.write('</head>');
        win.document.write('<body>');
        win.document.write(sTable);         // THE TABLE CONTENTS INSIDE THE BODY TAG.
        win.document.write('</body></html>');

        win.document.close(); 	// CLOSE THE CURRENT WINDOW.

        win.print();    // PRINT THE CONTENTS.
    });

});
