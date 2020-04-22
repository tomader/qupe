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
        url: 'https://qupe.herokuapp.com/backend/get-progName.php',
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
        url: 'https://qupe.herokuapp.com/backend/get-deptName.php',
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
        url: 'https://qupe.herokuapp.com/backend/userName-from-csID.php',
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
        url: 'https://qupe.herokuapp.com/backend/courseInfo-from-csID.php',
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
        url: 'https://qupe.herokuapp.com/backend/tableA.php',
        data: {
            cs_id: csID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            if (response.data.COURSE_TYPE1 == 'University')
                $('#courseType1').append('<input type="checkbox" value="University" name="courseType1"' +
                    'checked disabled>University<span></span>');
            else if (response.data.COURSE_TYPE1 != 'University')
                $('#courseType1').append('<input type="checkbox" value="University" name="courseType1"' +
                    'disabled>University<span></span>');

            if (response.data.COURSE_TYPE2 == 'College')
                $('#courseType2').append('<input type="checkbox" value="College" name="courseType2"' +
                    'checked disabled>College<span></span>');
            else if (response.data.COURSE_TYPE2 != 'College')
                $('#courseType2').append('<input type="checkbox" value="College" name="courseType2"' +
                    'disabled>College<span></span>');
            if (response.data.COURSE_TYPE3 == 'Department')
                $('#courseType3').append('<input type="checkbox" value="Department" name="courseType3"' +
                    'checked disabled>Department<span></span>');
            else if (response.data.COURSE_TYPE3 != 'Department')
                $('#courseType3').append('<input type="checkbox" value="Department" name="courseType3"' +
                    'disabled>Department<span></span>');
            if (response.data.COURSE_TYPE4 == 'Others')
                $('#courseType4').append('<input type="checkbox" value="Others" name="courseType4"' +
                    'checked disabled>Others<span></span>');
            else if (response.data.COURSE_TYPE4 != 'Others')
                $('#courseType4').append('<input type="checkbox" value="Others" name="courseType4"' +
                    ' disabled>Others<span></span>');
            if (response.data.COURSE_TYPE5 == 'Required')
                $('#courseType5').append('<input type="checkbox" value="Required" name="courseType5"' +
                    'checked disabled>Required<span></span>');
            else if (response.data.COURSE_TYPE5 != 'Required')
                $('#courseType5').append('<input type="checkbox" value="Required" name="courseType5"' +
                    ' disabled>Required<span></span>');
            if (response.data.COURSE_TYPE6 == 'Elective')
                $('#courseType6').append('<input type="checkbox" value="Elective" name="courseType6"' +
                    'checked disabled>Elective<span></span>');
            else if (response.data.COURSE_TYPE6 != 'Elective')
                $('#courseType6').append('<input type="checkbox" value="Elective" name="courseType6"' +
                    ' disabled>Elective<span></span>');

            $('#level').append(response.data.LEVEL);
            $('#pre-req').append(response.data.PRE_REQ);
            $('#co-req').append(response.data.CO_REQ);
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
            url: 'https://qupe.herokuapp.com/backend/tableA_Mode.php',
            data: {
                mode_id: modeId
            }
        })
            .then(function (response) {
                //handle success
                console.log(response);
                $('#a6-cHours1').append(response.data.CHOURS1);
                $('#a6-cHours2').append(response.data.CHOURS2);
                $('#a6-cHours3').append(response.data.CHOURS3);
                $('#a6-cHours4').append(response.data.CHOURS4);
                $('#a6-cHours5').append(response.data.CHOURS5);
                $('#a6-pers1').append(response.data.PERS1);
                $('#a6-pers2').append(response.data.PERS2);
                $('#a6-pers3').append(response.data.PERS3);
                $('#a6-pers4').append(response.data.PERS4);
                $('#a6-pers5').append(response.data.PERS5);
                $('#a6-other').append(response.data.OTHER);

            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }
    function getTableA_Actual(actualId) {
        axios({
            method: 'post',
            url: 'https://qupe.herokuapp.com/backend/tableA_actual.php',
            data: {
                actual_id: actualId
            }
        })
            .then(function (response) {
                //handle success
                console.log(response);
                $('#a7-cHours1').append(response.data.CHOURS1);
                $('#a7-cHours2').append(response.data.CHOURS2);
                $('#a7-cHours3').append(response.data.CHOURS3);
                $('#a7-cHours4').append(response.data.CHOURS4);
                $('#a7-other1').append(response.data.OTHER1);
                $('#a7-other2').append(response.data.OTHER2);
                $('#a7-OLHours1').append(response.data.OLHOURS1);
                $('#a7-OLHours2').append(response.data.OLHOURS2);
                $('#a7-OLHours3').append(response.data.OLHOURS3);
                $('#a7-OLHours4').append(response.data.OLHOURS4);
                $('#a7-OLHours5').append(response.data.OLHOURS5);
                $('#a7-cHours-total').append(response.data.CHOURS_TOTAL);
                $('#a7-OLHours-total').append(response.data.OLHOURS_TOTAL);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }
    axios({
        method: 'post',
        url: 'https://qupe.herokuapp.com/backend/tableB.php',
        data: {
            cs_id: csID
        }
    })
        .then(function (response) {
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
        url: 'https://qupe.herokuapp.com/backend/tableB_knowledge.php',
        data: {
            cs_id: csID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#b-Knowledge-CLO').append(response.data.CLO);
            $('#b-Knowledge-PLO').append(response.data.PLO);

        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    axios({
        method: 'post',
        url: 'https://qupe.herokuapp.com/backend/tableB_skills.php',
        data: {
            cs_id: csID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#b-Skills-CLO').append(response.data.CLO);
            $('#b-Skills-PLO').append(response.data.PLO);

        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    axios({
        method: 'post',
        url: 'https://qupe.herokuapp.com/backend/tableB_competence.php',
        data: {
            cs_id: csID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#b-Competence-CLO').append(response.data.CLO);
            $('#b-Competence-PLO').append(response.data.PLO);

        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    axios({
        method: 'post',
        url: 'https://qupe.herokuapp.com/backend/tableC.php',
        data: {
            cs_id: csID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#c-topics').append(response.data.TOPICS);
            $('#c-cHours').append(response.data.CHOURS);
            $('#c-total').append(response.data.TOTAL);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

    axios({
        method: 'post',
        url: 'https://qupe.herokuapp.com/backend/tableD_competence.php',
        data: {
            cs_id: csID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#d-Competence-CLO').append(response.data.CLO);
            $('#d-Competence-strat').append(response.data.STRAT);
            $('#d-Competence-asses').append(response.data.ASSES);

        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    axios({
        method: 'post',
        url: 'https://qupe.herokuapp.com/backend/tableD_Knowledge.php',
        data: {
            cs_id: csID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#d-Knowledge-CLO').append(response.data.CLO);
            $('#d-Knowledge-strat').append(response.data.STRAT);
            $('#d-Knowledge-asses').append(response.data.ASSES);

        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    axios({
        method: 'post',
        url: 'https://qupe.herokuapp.com/backend/tableD_Skills.php',
        data: {
            cs_id: csID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#d-Skills-CLO').append(response.data.CLO);
            $('#d-Skills-strat').append(response.data.STRAT);
            $('#d-Skills-asses').append(response.data.ASSES);

        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    axios({
        method: 'post',
        url: 'https://qupe.herokuapp.com/backend/tableD_Asses.php',
        data: {
            cs_id: csID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#d-ass-task').append(response.data.ASS_TASK);
            $('#d-week').append(response.data.WEEK);
            $('#d-pers').append(response.data.PERS + ' %');

        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    axios({
        method: 'post',
        url: 'https://qupe.herokuapp.com/backend/fieldE.php',
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
    axios({
        method: 'post',
        url: 'https://qupe.herokuapp.com/backend/tableF.php',
        data: {
            cs_id: csID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#f-LR1').append(response.data.LR1);
            $('#f-LR2').append(response.data.LR2);
            $('#f-LR3').append(response.data.LR3);
            $('#f-LR4').append(response.data.LR4);
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
        url: 'https://qupe.herokuapp.com/backend/tableG.php',
        data: {
            cs_id: csID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#g-g1').append(response.data.G1);
            $('#g-g2').append(response.data.G2);
            $('#g-g3').append(response.data.G3);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    axios({
        method: 'post',
        url: 'https://qupe.herokuapp.com/backend/tableH.php',
        data: {
            cs_id: csID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#h-h1').append(response.data.H1);
            $('#h-h2').append(response.data.H2);
            $('#h-h3').append(response.data.H3);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    $('#feedback').submit(function (event) {
        event.preventDefault();
        var form = $('#feedback');
        var values = getFormData(form);
        values.cs_id = csID;
        console.log(values);
        var btn = $(this);
        form.validate({
            rules: {
                // IsFeedback: {
                //     required: true
                // },
                feedback: {
                    required: true
                }

            }
        });

        if (!form.valid()) {
            //showErrorMsg(form, 'warning', 'You need to check the box AND write your feedback!');
            return;
        }
        btn.addClass('kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light').attr('disabled', true);

        axios({
            method: 'post',
            url: 'https://qupe.herokuapp.com/backend/cs-send-feedback.php',
            data: values
        })
            .then(function (response) {
                //handle success
                //fill_tableB_knowledge(response.data.ID);
                showErrorMsg(form, 'success', 'Feedback successfully sent!');

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
    $('#verify').click(function () {
        axios({
            method: 'post',
            url: 'https://qupe.herokuapp.com/backend/verify-cs.php',
            data: {
                cs_id: csID
            }
        })
            .then(function (response) {
                swal.fire({
                    type: 'success',
                    title: 'Report successfully verified.',
                    showConfirmButton: false,
                    timer: 1500
                });

                // //handle success
                // //fill_tableB_knowledge(response.data.ID);
                // showErrorMsg(form, 'success', 'Report successfully verified.');

            })
            .catch(function (response) {
                //handle error
                console.log(response);
                showErrorMsg(form, 'danger', 'Something went wrong, please try later.');
            });


    });

});
