function openTabsWithDelay(urls, delay) {

    jscript = `
    (function () {
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
        if (member) member.value = '김승윤';
        if (team) team.value = 'DVB';
        if (team_yn1) team_yn1.checked = true;
        if (users) users.value = '18';
        if (mobile) mobile.value = '010-2293-2050';
        if (phone) phone.value = '';
        if (type_cd1) type_cd1.checked = true;
        if (title) title.value = '배구';
        if (purpose) purpose.value = '배구';
        if (agree_checkbox) agree_checkbox.checked = true;
    })();
    `;
    urls.forEach(function(url, index) {
        setTimeout(function() {
            var newTab = window.open(url, '_blank');
            newTab.addEventListener('load', function() {
                newTab.eval(jscript);
            });
            newTab.eval('window.alert = function() {};');
        }, index * delay);
    });
}

function getSundaysForComingMonth() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const firstDayNextMonth = new Date(year, month + 1, 1);
    const lastDayNextMonth = new Date(year, month + 2, 0);
    const sundays = [];

    let date = new Date(firstDayNextMonth);
    date.setDate(date.getDate() + (7 - date.getDay()) % 7);

    while (date <= lastDayNextMonth) {
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        sundays.push(`${yyyy}${mm}${dd}`);
        date.setDate(date.getDate() + 7);
    }
    return sundays;
}

function getUrls() {
    const urls = [];
    const sundays = getSundaysForComingMonth();
    const after = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1);
    const base_date = `${after.getFullYear()}${String(after.getMonth() + 1).padStart(2, '0')}01`;
    const time_no = '141;9%ED%9A%8C;1400;1450;1|142;10%ED%9A%8C;1500;1550;1|143;11%ED%9A%8C;1600;1650;1|144;12%ED%9A%8C;1700;1750;1';
    
    const encoded_time_no = encodeURIComponent(time_no);
    
    sundays.forEach(element => {
        urls.push(`https://www.e-junggu.or.kr/fmcs/314?facilities_type=C&center=JUNGGU03&part=02&base_date=${base_date}&action=write&place=7&comcd=JUNGGU03&part_cd=02&place_cd=7&time_no=${encoded_time_no}&rent_date=${element}`);
    });

    return urls;
}

openTabsWithDelay(getUrls(), 2000);