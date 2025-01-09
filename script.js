const SOCIALS = new Map([
    ['youtube', 'https://www.youtube.com/@cattyngmd'],
    ['github', 'https://github.com/cattyngmd'],
    ['telegram', 'https://cattyn.t.me/']
])

const WAVE_PATTERN = "⋆⭒˚."
const WAVE_LEN = 33;

const BIRTHDAY = 1159905600000;

let offset = 0;

const main = () => {
    $('bio').innerText = $('bio').innerText.replace("%age%", yearPassed(BIRTHDAY))

    setInterval(() => {
        let localoffset = 0
        let str = '';
        for (let i = 0; i < WAVE_LEN; i++) {
            if (i == Math.floor(WAVE_LEN / 2)) {
                str += '$';
                localoffset += 'cattyn'.length;
                continue
            }
            str += WAVE_PATTERN[(i + offset + localoffset) % WAVE_PATTERN.length]
        }

        let split = str.split("$");
        $('prefix').innerHTML = split[0];
        $('suffix').innerHTML = split[1];
        offset++
    }, 150);
}

const onSocialClick = (e) => {
    let clicked = e.target.innerText;
    let url = SOCIALS.get(clicked);
    window.location.href = url;
}

const yearPassed = (day) => {
    let ageDifMs = Date.now() - day;
    let ageDate = new Date(ageDifMs);
    return ageDate.getUTCFullYear() - 1970; 
}

const $ = (id) => {
    return document.getElementById(id)
}

document.addEventListener('DOMContentLoaded', main)