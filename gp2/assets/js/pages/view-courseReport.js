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
var url_string = window.location.href
var url = new URL(url_string);
var crID = url.searchParams.get("id");
$(document).ready(function () {
    axios({
        method: 'post',
        url: 'https://qupe-backend.herokuapp.com/backend/userName-from-crID.php',
        data: {
            cr_id: crID
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
        url: 'https://qupe-backend.herokuapp.com/backend/courseInfo-from-crID.php',
        data: {
            cr_id: crID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#courseName').append(response.data.NAME);
            $('#courseCode').append(response.data.CODE);

        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

    axios({
        method: 'post',
        url: 'https://qupe-backend.herokuapp.com/backend/cr-tableA.php',
        data: {
            cr_id: crID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#a-intructor').append(response.data.INSTRUCTOR);
            $('#a-location').append(response.data.LOCATION);
            $('#a-NumOfSections').append(response.data.NUM);
            $('#a-starting').append(response.data.START);
            $('#a-completing').append(response.data.COMPLET);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

    axios({
        method: 'post',
        url: 'https://qupe-backend.herokuapp.com/backend/cr-tableB1.php',
        data: {
            cr_id: crID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#b1-lecture-planned').append(response.data.PLANNED1);
            $('#b1-lab-planned').append(response.data.PLANNED2);
            $('#b1-tutorial-planned').append(response.data.PLANNED3);
            $('#b1-other-planned').append(response.data.PLANNED4);
            $('#b1-lecture-actual').append(response.data.ACTUAL1);
            $('#b1-lab-actual').append(response.data.ACTUAL2);
            $('#b1-tutorial-actual').append(response.data.ACTUAL3);
            $('#b1-other-actual').append(response.data.ACTUAL4);
            $('#b1-total1').append(response.data.TOTAL1);
            $('#b1-total2').append(response.data.TOTAL2);
            $('#b-other').append(response.data.OTHER);
            $('#b2-Topics').append(response.data.TOPICS);
            $('#b2-Reason').append(response.data.REASON);
            $('#b2-Extent').append(response.data.EXTENT);
            $('#b2-Action').append(response.data.ACTION);

        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    axios({
        method: 'post',
        url: 'https://qupe-backend.herokuapp.com/backend/cr-tableB2.php',
        data: {
            cr_id: crID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#b3-Planned').append(response.data.PLANNED);
            $('#b3-Implemented').append(response.data.IMPLEMENTED1);
            $('#b3-Diff').append(response.data.DIFF1);
            $('#b3-Action').append(response.data.ACTION1);
            $('#b4-Activities').append(response.data.ACTIVITIES);
            $('#b4-Implemented').append(response.data.IMPLEMENTED2);
            $('#b4-Diff').append(response.data.DIFF2);
            $('#b4-Action').append(response.data.ACTION2);
            $('#b5-Method').append(response.data.METHOD);
            $('#b5-Conclusions').append(response.data.CONC);
            $('#b5-Recommend').append(response.data.RECOMMEND);

        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    axios({
        method: 'post',
        url: 'https://qupe-backend.herokuapp.com/backend/cr-tableC1.php',
        data: {
            cr_id: crID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#c1-aa').append(response.data.AA);
            $('#c1-a').append(response.data.A);
            $('#c1-bb').append(response.data.BB);
            $('#c1-b').append(response.data.B);
            $('#c1-cc').append(response.data.CC);
            $('#c1-c').append(response.data.C);
            $('#c1-dd').append(response.data.DD);
            $('#c1-d').append(response.data.D);
            $('#c1-f').append(response.data.F);
            $('#c1-Denied').append(response.data.DENIAL);
            $('#c1-Progress').append(response.data.PROGRESS);
            $('#c1-Misaeng').append(response.data.MISAENG);
            $('#c1-Pass').append(response.data.PASS);
            $('#c1-Fails').append(response.data.FAIL);
            $('#c1-Withdrawn').append(response.data.WITHDRAWN);
            $('#c1-Comment').append(response.data.COMMENTS);
            $('#c1-Recommend').append(response.data.RECOMMEND);


        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    axios({
        method: 'post',
        url: 'https://qupe-backend.herokuapp.com/backend/cr-tableC2.php',
        data: {
            cr_id: crID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#c2-aa').append(response.data.AA);
            $('#c2-a').append(response.data.A);
            $('#c2-bb').append(response.data.BB);
            $('#c2-b').append(response.data.B);
            $('#c2-cc').append(response.data.CC);
            $('#c2-c').append(response.data.C);
            $('#c2-dd').append(response.data.DD);
            $('#c2-d').append(response.data.D);
            $('#c2-f').append(response.data.F);
            $('#c2-Denied').append(response.data.DENIAL);
            $('#c2-Progress').append(response.data.PROGRESS);
            $('#c2-Misaeng').append(response.data.MISAENG);
            $('#c2-Pass').append(response.data.PASS);
            $('#c2-Fails').append(response.data.FAIL);
            $('#c2-Withdrawn').append(response.data.WITHDRAWN);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    axios({
        method: 'post',
        url: 'https://qupe-backend.herokuapp.com/backend/cr-tableD.php',
        data: {
            cr_id: crID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#d-Knowledge1').append(response.data.KNOWLEDGE1);
            $('#d-Knowledge2').append(response.data.KNOWLEDGE2);
            $('#d-Knowledge3').append(response.data.KNOWLEDGE3);
            $('#d-Knowledge4').append(response.data.KNOWLEDGE4);
            $('#d-Knowledge5').append(response.data.KNOWLEDGE5);
            $('#d-Knowledge6').append(response.data.KNOWLEDGE6);
            $('#d-Skills1').append(response.data.SKILLS1);
            $('#d-Skills2').append(response.data.SKILLS2);
            $('#d-Skills3').append(response.data.SKILLS3);
            $('#d-Skills4').append(response.data.SKILLS4);
            $('#d-Skills5').append(response.data.SKILLS5);
            $('#d-Skills6').append(response.data.SKILLS6);
            $('#d-Competence1').append(response.data.COMPETENCE1);
            $('#d-Competence2').append(response.data.COMPETENCE2);
            $('#d-Competence3').append(response.data.COMPETENCE3);
            $('#d-Competence4').append(response.data.COMPETENCE4);
            $('#d-Competence5').append(response.data.COMPETENCE5);
            $('#d-Competence6').append(response.data.COMPETENCE6);
            $('#d-Recommend').append(response.data.RECOMMEND);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    axios({
        method: 'post',
        url: 'https://qupe-backend.herokuapp.com/backend/cr-tableE1.php',
        data: {
            cr_id: crID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#e1-Date').append(response.data.DATE);
            $('#e1-Num').append(response.data.NUM);
            $('#e1-Perc').append(response.data.PREC);
            $('#e1-Result').append(response.data.RESULT);
            $('#e1-Student1').append(response.data.STUDENT1);
            $('#e1-Student2').append(response.data.STUDENT2);
            $('#e1-Student3').append(response.data.STUDENT3);
            $('#e1-Course1').append(response.data.COURSE1);
            $('#e1-Course2').append(response.data.COURSE2);
            $('#e1-Course3').append(response.data.COURSE3);

        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    axios({
        method: 'post',
        url: 'https://qupe-backend.herokuapp.com/backend/cr-tableE2.php',
        data: {
            cr_id: crID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#e2-Method').append(response.data.METHOD);
            $('#e2-Date').append(response.data.DATE);
            $('#e2-Student1').append(response.data.STUDENT1);
            $('#e2-Student2').append(response.data.STUDENT2);
            $('#e2-Student3').append(response.data.STUDENT3);
            $('#e2-Course1').append(response.data.COURSE1);
            $('#e2-Course2').append(response.data.COURSE2);
            $('#e2-Course3').append(response.data.COURSE3);
            $('#e2-Recommend').append(response.data.RECOMMEND);

        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    axios({
        method: 'post',
        url: 'https://qupe-backend.herokuapp.com/backend/cr-tableF.php',
        data: {
            cr_id: crID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#f-Admin1').append(response.data.ADMIN1);
            $('#f-Admin2').append(response.data.ADMIN2);
            $('#f-Admin3').append(response.data.ADMIN3);
            $('#f-Learning1').append(response.data.LEARN1);
            $('#f-Learning2').append(response.data.LEARN2);
            $('#f-Learning3').append(response.data.LEARN3);
            $('#f-Facilities1').append(response.data.FACI1);
            $('#f-Facilities2').append(response.data.FACI2);
            $('#f-Facilities3').append(response.data.FACI3);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    axios({
        method: 'post',
        url: 'https://qupe-backend.herokuapp.com/backend/cr-tableG.php',
        data: {
            cr_id: crID
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            $('#g-a1').append(response.data.A1);
            $('#g-a2').append(response.data.A2);
            $('#g-a3').append(response.data.A3);
            $('#g-a4').append(response.data.A4);
            $('#g-b1').append(response.data.B1);
            $('#g-b2').append(response.data.B2);
            $('#g-b3').append(response.data.B3);
            $('#g-b4').append(response.data.B4);
            $('#g-c1').append(response.data.C1);
            $('#g-c2').append(response.data.C2);
            $('#g-c3').append(response.data.C3);
            $('#g-c4').append(response.data.C4);
            $('#g-c5').append(response.data.C5);
            $('#g-c6').append(response.data.C6);

        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    $('#feedback').submit(function (event) {
        event.preventDefault();
        var form = $('#feedback');
        var values = getFormData(form);
        values.cr_id = crID;
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
            url: 'https://qupe-backend.herokuapp.com/backend/cr-send-feedback.php',
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
            url: 'https://qupe-backend.herokuapp.com/backend/verify-cr.php',
            data: {
                cr_id: crID
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
