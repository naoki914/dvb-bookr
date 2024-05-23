function autofillAndSubmit() {
    var member = document.querySelector('#mem_nm');
    var team = document.querySelector('#team_nm');
    var team_yn1 = document.querySelector('#team_yn1');
    var users = document.querySelector('#users');
    var mobile = document.querySelector('#mobile_tel');
    var phone = document.querySelector('#tel');
    
    var type_cd1 = document.querySelector('#type_cd1');
    var title = document.querySelector('#title');
    var purpose = document.querySelector('#purpose');
    var agree_checkbox = document.querySelector('#agree_use1');

    var apply_button = document.querySelector('#writeBtn');

    if (member) member.value = 'MemberName';
    if (team) team.value = 'TeamName';
    if (team_yn1) team_yn1.checked = true;
    if (users) users.value = '18';
    if (mobile) mobile.value = '010-1234-5678';
    if (phone) phone.value = '';
    if (type_cd1) type_cd1.checked = true;
    if (title) title.value = 'EventName';
    if (purpose) purpose.value = 'PurposeOfUse';
    if (agree_checkbox) agree_checkbox.checked = true;
}
autofillAndSubmit();

// if (apply_button) submitButton.click();
