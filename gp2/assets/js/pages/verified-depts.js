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
let numberOfAll = 0
function getNumberOfAllUsers(dept_id) {
    axios({
        method: 'post',
        url: 'https://gpqupe.000webhostapp.com/backend/fetch-numberOf-all-users-from-dept.php',
        data: {
            dept: dept_id
        }
    })
        .then(function (response) {
            //handle success
            console.log(response);
            numberOfAll = response.data.length;
            $('#numberOfAll').append('out of ' + response.data.length);


        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
}
let numberOfUsers = 0;
function getNumberOfUsers(dept_id) {
    axios({
        method: 'post',
        url: 'https://gpqupe.000webhostapp.com/backend/asshole.php',
        data: {
            dept: dept_id
        }
    })
        .then(function (response) {
            let count = 0;
            $.each(response.data, function (key, value) {
                count = count + checkCS(value.CS_ID);
            });
            console.log(count);

            $('#numberOfUsers').append(count);
            numberOfUsers = count;
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
}
function checkCS(cs_id) {
    let status = 0;
    axios({
        method: 'post',
        url: 'https://gpqupe.000webhostapp.com/backend/fieldE.php',
        data: {
            cs_id: cs_id
        }
    })
        .then(function (response) {
            status = response.data.STATUS;
            if (status == 5)
                status = 1;

            else
                status = 0;
            return status;

        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
}

function getPercent() {
    return numberOfAll / numberOfUsers * 100;

}



$(document).ready(function () {
    axios({
        method: 'post',
        url: 'https://gpqupe.000webhostapp.com/backend/fetch_dept.php'
    })
        .then(function (response) {
            //handle success
            let $select = $('#depts');
            $.each(response.data, function (key, value) {
                axios({
                    method: 'post',
                    url: 'https://gpqupe.000webhostapp.com/backend/fetch-numberOf-all-users-from-dept.php',
                    data: {
                        dept: value.ID
                    }
                })
                    .then(function (response1) {
                        //handle success
                        console.log(response1);
                        axios({
                            method: 'post',
                            url: 'https://gpqupe.000webhostapp.com/backend/asshole.php',
                            data: {
                                dept: value.ID
                            }
                        })
                            .then(function (response2) {
                                console.log(response2);

                                axios({
                                    method: 'post',
                                    url: 'https://gpqupe.000webhostapp.com/backend/asshole.php',
                                    data: {
                                        dept: value.ID
                                    }
                                })
                                    .then(function (response3) {
                                        console.log(response3);

                                        let numberOfUsersWithVerifiedReports = response3.data.length + response2.data.length;
                                        var currentUrl = 'https://gpqupe.000webhostapp.com/gp2/TheHead/verified-users.html';
                                        var url = new URL(currentUrl);
                                        url.searchParams.set("id", value.ID); // setting your param
                                        var newUrl = url.href;
                                        $select.append('<div class="col-md-12 col-lg-6 col-xl-3">' +
                                            '<div class="kt-widget24">' +
                                            '<div class="kt-widget24__details">' +
                                            '<div class="kt-widget24__info">' +
                                            '<a href="' + newUrl + '"><h4 class="kt-widget24__title">' +
                                            value.NAME + '</h4></a><span class="kt-widget24__desc" >out of ' + response1.data.length +
                                            '</span></div><span class="kt-widget24__stats kt-font-brand" >' + numberOfUsersWithVerifiedReports + '</span></div>' +
                                            '<div class="progress progress--sm" id="percent1"></div>' +
                                            '<div class="kt-widget24__action">' +
                                            '<span class="kt-widget24__change">Verified</span><span class="kt-widget24__number" id="percent2">' +
                                            ' %</span></div></div></div >');
                                    })
                                    .catch(function (response3) {
                                        //handle error
                                        console.log(response3);
                                    });
                            })
                            .catch(function (response2) {
                                //handle error
                                console.log(response2);
                            });


                    })
                    .catch(function (response1) {
                        //handle error
                        console.log(response1);
                    });
                //getPercent(value.ID);
            });

        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

});
