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
function getProgName(progId) {
    axios({
        method: 'post',
        url: 'https://gpqupe.000webhostapp.com/backend/get-progName.php',
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
        url: 'https://gpqupe.000webhostapp.com/backend/get-deptName.php',
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
var url_string = window.location.href
var url = new URL(url_string);
var csID = url.searchParams.get("id");
$(document).ready(function () {
    axios({
        method: 'post',
        url: 'https://gpqupe.000webhostapp.com/backend/userName-from-csID.php',
        data: {
            cs_id: csID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#userName').append(response.data.FIRST_NAME + ' ' + response.data.LAST_NAME);
            $('#user_college').append(response.data.COLLEGE_NAME);
            $('#user_insti').append(response.data.INSTI_NAME);
            getDeptName(response.data.DEPT_ID);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });


    axios({
        method: 'post',
        url: 'https://gpqupe.000webhostapp.com/backend/courseInfo-from-csID.php',
        data: {
            cs_id: csID
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
    axios({
        method: 'post',
        url: 'https://gpqupe.000webhostapp.com/backend/fetch-feedbackText-from-csID.php',
        data: {
            cs_id: csID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#feedback').append(response.data.FEEDBACK);

        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    axios({
        method: 'post',
        url: 'https://gpqupe.000webhostapp.com/backend/fieldE.php',
        data: {
            cs_id: csID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#fb').append(response.data.FEEDBACK);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    let a_id, mode_id, actual_id = 0;
    axios({
        method: 'post',
        url: 'https://gpqupe.000webhostapp.com/backend/tableA.php',
        data: {
            cs_id: csID
        }
    })
        .then(function (response) {
            a_id = response.data.ID;
            mode_id = response.data.MODE_ID;
            actual_id = response.data.ACTUAL_ID;

            console.log(response);
            if (response.data.COURSE_TYPE1 == 'University')
                $('#courseType1').append('<input type="checkbox" value="University" name="courseType1"' +
                    'checked >University<span></span>');
            else if (response.data.COURSE_TYPE1 != 'University')
                $('#courseType1').append('<input type="checkbox" value="University" name="courseType1"' +
                    '>University<span></span>');

            if (response.data.COURSE_TYPE2 == 'College')
                $('#courseType2').append('<input type="checkbox" value="College" name="courseType2"' +
                    'checked >College<span></span>');
            else if (response.data.COURSE_TYPE2 != 'College')
                $('#courseType2').append('<input type="checkbox" value="College" name="courseType2"' +
                    '>College<span></span>');
            if (response.data.COURSE_TYPE3 == 'Department')
                $('#courseType3').append('<input type="checkbox" value="Department" name="courseType3"' +
                    'checked >Department<span></span>');
            else if (response.data.COURSE_TYPE3 != 'Department')
                $('#courseType3').append('<input type="checkbox" value="Department" name="courseType3"' +
                    '>Department<span></span>');
            if (response.data.COURSE_TYPE4 == 'Others')
                $('#courseType4').append('<input type="checkbox" value="Others" name="courseType4"' +
                    'checked >Others<span></span>');
            else if (response.data.COURSE_TYPE4 != 'Others')
                $('#courseType4').append('<input type="checkbox" value="Others" name="courseType4"' +
                    ' >Others<span></span>');
            if (response.data.COURSE_TYPE5 == 'Required')
                $('#courseType5').append('<input type="checkbox" value="Required" name="courseType5"' +
                    'checked >Required<span></span>');
            else if (response.data.COURSE_TYPE5 != 'Required')
                $('#courseType5').append('<input type="checkbox" value="Required" name="courseType5"' +
                    ' >Required<span></span>');
            if (response.data.COURSE_TYPE6 == 'Elective')
                $('#courseType6').append('<input type="checkbox" value="Elective" name="courseType6"' +
                    'checked >Elective<span></span>');
            else if (response.data.COURSE_TYPE6 != 'Elective')
                $('#courseType6').append('<input type="checkbox" value="Elective" name="courseType6"' +
                    ' >Elective<span></span>');

            $('#level').append('<input name="level" type="text" value="' + response.data.LEVEL + '" class="form-control">');
            $('#pre-req').append('<textarea name="pre-req" class="form-control" rows="3">' + response.data.PRE_REQ + '</textarea>');
            $('#co-req').append('<textarea name="co-req"  class="form-control" rows="3">' + response.data.CO_REQ + '</textarea>');
            getTableA_Mode(response.data.MODE_ID);
            getTableA_Actual(response.data.ACTUAL_ID);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    function getTableA_Mode(modeId) {
        axios({
            method: 'post',
            url: 'https://gpqupe.000webhostapp.com/backend/tableA_Mode.php',
            data: {
                mode_id: modeId
            }
        })
            .then(function (response) {
                //handle success
                console.log(response);
                $('#a6-cHours1').append('<input name="a6-cHours1" type="number" value="' + response.data.CHOURS1 + '" class="form-control">');
                $('#a6-cHours2').append('<input name="a6-cHours2" type="number" value="' + response.data.CHOURS2 + '" class="form-control">');
                $('#a6-cHours3').append('<input name="a6-cHours3" type="number" value="' + response.data.CHOURS3 + '" class="form-control">');
                $('#a6-cHours4').append('<input name="a6-cHours4" type="number" value="' + response.data.CHOURS4 + '" class="form-control">');
                $('#a6-cHours5').append('<input name="a6-cHours5" type="number" value="' + response.data.CHOURS5 + '" class="form-control">');
                $('#a6-pers1').append('<input name="a6-pers1" type="number" value="' + response.data.PERS1 + '" class="form-control">');
                $('#a6-pers2').append('<input name="a6-pers2" type="number" value="' + response.data.PERS2 + '" class="form-control">');
                $('#a6-pers3').append('<input name="a6-pers3" type="number" value="' + response.data.PERS3 + '" class="form-control">');
                $('#a6-pers4').append('<input name="a6-pers4" type="number" value="' + response.data.PERS4 + '" class="form-control">');
                $('#a6-pers5').append('<input name="a6-pers5" type="number" value="' + response.data.PERS5 + '" class="form-control">');
                $('#a6-other').append('<input name="a6-other" type="text" value="' + response.data.OTHER + '" class="form-control">');

            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }
    function getTableA_Actual(actualId) {
        axios({
            method: 'post',
            url: 'https://gpqupe.000webhostapp.com/backend/tableA_actual.php',
            data: {
                actual_id: actualId
            }
        })
            .then(function (response) {
                //handle success
                console.log(response);
                $('#a7-cHours1').append('<input name="a7-cHours1" type="number" value="' + response.data.CHOURS1 + '" class="form-control">');
                $('#a7-cHours2').append('<input name="a7-cHours2" type="number" value="' + response.data.CHOURS2 + '" class="form-control">');
                $('#a7-cHours3').append('<input name="a7-cHours3" type="number" value="' + response.data.CHOURS3 + '" class="form-control">');
                $('#a7-cHours4').append('<input name="a7-cHours4" type="number" value="' + response.data.CHOURS4 + '" class="form-control">');
                $('#a7-other1').append('<input name="a7-other1" type="text" value="' + response.data.OTHER1 + '" class="form-control">');
                $('#a7-other2').append('<input name="a7-other2" type="text" value="' + response.data.OTHER2 + '" class="form-control">');
                $('#a7-OLHours1').append('<input name="a7-OLHours1" type="number" value="' + response.data.OLHOURS1 + '" class="form-control">');
                $('#a7-OLHours2').append('<input name="a7-OLHours2" type="number" value="' + response.data.OLHOURS2 + '" class="form-control">');
                $('#a7-OLHours3').append('<input name="a7-OLHours3" type="number" value="' + response.data.OLHOURS3 + '" class="form-control">');
                $('#a7-OLHours4').append('<input name="a7-OLHours4" type="number" value="' + response.data.OLHOURS4 + '" class="form-control">');
                $('#a7-OLHours5').append('<input name="a7-OLHours5" type="number" value="' + response.data.OLHOURS5 + '" class="form-control">');
                $('#a7-cHours-total').append('<input name="a7-cHours-total" type="number" value="' + response.data.CHOURS_TOTAL + '" class="form-control">');
                $('#a7-OLHours-total').append('<input name="a7-OLHours-total" type="number" value="' + response.data.OLHOURS_TOTAL + '" class="form-control">');
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }
    let b_id = 0;
    axios({
        method: 'post',
        url: 'https://gpqupe.000webhostapp.com/backend/tableB.php',
        data: {
            cs_id: csID
        }
    })
        .then(function (response) {
            b_id = response.data.ID;
            //handle success
            console.log(response);
            $('#course-desc').append(response.data.COURSE_DESC);
            $('#course-obj').append(response.data.COURSE_OBJ);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

    axios({
        method: 'post',
        url: 'https://gpqupe.000webhostapp.com/backend/tableB_knowledge.php',
        data: {
            cs_id: csID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#b-Knowledge-CLO').append('<input name="b-Knowledge-CLO" type="text" value="' + response.data.CLO + '" class="form-control">');
            $('#b-Knowledge-PLO').append('<input name="b-Knowledge-PLO" type="text" value="' + response.data.PLO + '" class="form-control">');
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    axios({
        method: 'post',
        url: 'https://gpqupe.000webhostapp.com/backend/tableB_skills.php',
        data: {
            cs_id: csID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#b-Skills-CLO').append('<input name="b-Skills-CLO" type="text" value="' + response.data.CLO + '" class="form-control">');
            $('#b-Skills-PLO').append('<input name="b-Skills-PLO" type="text" value="' + response.data.PLO + '" class="form-control">');

        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    axios({
        method: 'post',
        url: 'https://gpqupe.000webhostapp.com/backend/tableB_competence.php',
        data: {
            cs_id: csID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#b-Competence-CLO').append('<input name="b-Competence-CLO" type="text" value="' + response.data.CLO + '" class="form-control">');
            $('#b-Competence-PLO').append('<input name="b-Competence-PLO" type="text" value="' + response.data.PLO + '" class="form-control">');

        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    let c_id, total_id = 0;
    axios({
        method: 'post',
        url: 'https://gpqupe.000webhostapp.com/backend/tableC.php',
        data: {
            cs_id: csID
        }
    })
        .then(function (response) {
            c_id = response.data.ID;
            total_id = response.data.TOTAL_ID;
            //handle success
            console.log(response);
            $('#c-topics').append('<input name="c-topics" type="text" value="' + response.data.TOPICS + '" class="form-control">');
            $('#c-cHours').append('<input name="c-cHours" type="number" value="' + response.data.CHOURS + '" class="form-control">');
            $('#c-total').append('<input name="c-total" type="number" value="' + response.data.TOTAL + '" class="form-control">');
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    axios({
        method: 'post',
        url: 'https://gpqupe.000webhostapp.com/backend/tableD_competence.php',
        data: {
            cs_id: csID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#d-Competence-CLO').append('<input name="d-Competence-CLO" type="text" value="' + response.data.CLO + '" class="form-control">');
            $('#d-Competence-strat').append('<input name="d-Competence-strat" type="text" value="' + response.data.STRAT + '" class="form-control">');
            $('#d-Competence-asses').append('<input name="d-Competence-asses" type="text" value="' + response.data.ASSES + '" class="form-control">');
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    axios({
        method: 'post',
        url: 'https://gpqupe.000webhostapp.com/backend/tableD_Knowledge.php',
        data: {
            cs_id: csID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#d-Knowledge-CLO').append('<input name="d-Knowledge-CLO" type="text" value="' + response.data.CLO + '" class="form-control">');
            $('#d-Knowledge-strat').append('<input name="d-Knowledge-strat" type="text" value="' + response.data.STRAT + '" class="form-control">');
            $('#d-Knowledge-asses').append('<input name="d-Knowledge-asses" type="text" value="' + response.data.ASSES + '" class="form-control">');
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    axios({
        method: 'post',
        url: 'https://gpqupe.000webhostapp.com/backend/tableD_Skills.php',
        data: {
            cs_id: csID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#d-Skills-CLO').append('<input name="d-Skills-CLO" type="text" value="' + response.data.CLO + '" class="form-control">');
            $('#d-Skills-strat').append('<input name="d-Skills-strat" type="text" value="' + response.data.STRAT + '" class="form-control">');
            $('#d-Skills-asses').append('<input name="d-Skills-asses" type="text" value="' + response.data.ASSES + '" class="form-control">');
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    axios({
        method: 'post',
        url: 'https://gpqupe.000webhostapp.com/backend/tableD_Asses.php',
        data: {
            cs_id: csID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#d-ass-task').append('<input name="d-ass-task" type="text" value="' + response.data.ASS_TASK + '" class="form-control">');
            $('#d-week').append('<input name="d-week" type="number" value="' + response.data.WEEK + '" class="form-control">');
            $('#d-pers').append('<input name="d-pers" type="number" value="' + response.data.PERS + '" class="form-control">');
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    axios({
        method: 'post',
        url: 'https://gpqupe.000webhostapp.com/backend/fieldE.php',
        data: {
            cs_id: csID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#e-text').append(response.data.E);


        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    let f_id = 0;
    axios({
        method: 'post',
        url: 'https://gpqupe.000webhostapp.com/backend/tableF.php',
        data: {
            cs_id: csID
        }
    })
        .then(function (response) {
            f_id = response.data.ID;
            //handle success
            console.log(response);
            $('#f-LR1').append('<input name="f-LR1" type="text" value="' + response.data.LR1 + '" class="form-control">');
            $('#f-LR2').append('<input name="f-LR2" type="text" value="' + response.data.LR2 + '" class="form-control">');
            $('#f-LR3').append('<input name="f-LR3" type="text" value="' + response.data.LR3 + '" class="form-control">');
            $('#f-LR4').append('<input name="f-LR4" type="text" value="' + response.data.LR4 + '" class="form-control">');
            $('#f-FR1').append(response.data.FR1);
            $('#f-FR2').append(response.data.FR2);
            $('#f-FR3').append(response.data.FR3);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    axios({
        method: 'post',
        url: 'https://gpqupe.000webhostapp.com/backend/tableG.php',
        data: {
            cs_id: csID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#g-g1').append('<input name="g-g1" type="text" value="' + response.data.G1 + '" class="form-control">');
            $('#g-g2').append('<input name="g-g2" type="text" value="' + response.data.G2 + '" class="form-control">');
            $('#g-g3').append('<input name="g-g3" type="text" value="' + response.data.G3 + '" class="form-control">');
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    let h_id = 0;

    axios({
        method: 'post',
        url: 'https://gpqupe.000webhostapp.com/backend/tableH.php',
        data: {
            cs_id: csID
        }
    })
        .then(function (response) {
            h_id = response.data.ID;

            //handle success
            console.log(response);
            $('#h-h1').append('<input name="h-h1" type="text" value="' + response.data.H1 + '" class="form-control">');
            $('#h-h2').append('<input name="h-h2" type="number" value="' + response.data.H2 + '" class="form-control">');
            $('#h-h3').append('<input name="h-h3" type="date" value="' + response.data.H3 + '" class="form-control">');
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    $('#courseSpeci').submit(function (event) {
        event.preventDefault();
        var form = $('#courseSpeci');
        var values = getFormData(form);
        values.cs_id = csID;
        values.a_id = a_id;
        values.mode_id = mode_id;
        values.actual_id = actual_id;
        values.b_id = b_id;
        values.c_id = c_id;
        values.total_id = total_id;
        values.f_id = f_id;
        values.h_id = h_id;

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
            url: 'https://gpqupe.000webhostapp.com/backend/edit-courseSpeci.php',
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
