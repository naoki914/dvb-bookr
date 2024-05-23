function openTabsWithDelay(urls, delay) {
    urls.forEach(function(url, index) {
        setTimeout(function() {
            window.open(url, '_blank');
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
    const time_no = '137;9%ED%9A%8C;1400;1450;1|138;10%ED%9A%8C;1500;1550;1|139;11%ED%9A%8C;1600;1650;1|140;12%ED%9A%8C;1700;1750;1';
    
    const encoded_time_no = encodeURIComponent(time_no);
    
    sundays.forEach(element => {
        urls.push(`https://www.e-junggu.or.kr/fmcs/314?facilities_type=C&center=JUNGGU03&part=02&base_date=${base_date}&action=write&place=7&comcd=JUNGGU03&part_cd=02&place_cd=7&time_no=${encoded_time_no}&rent_date=${element}`);
    });

    return urls;
}

openTabsWithDelay(getUrls(), 2000);