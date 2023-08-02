function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1]
    );
}

function UpdateQueryString(key, value, url) {
    if (!url) url = window.location.href;
    var re = new RegExp("([?|&])" + key + "=.*?(&|#|$)(.*)", "gi");

    if (re.test(url)) {
        if (typeof value !== 'undefined' && value !== null)
            return url.replace(re, '$1' + key + "=" + value + '$2$3');
        else {
            return url.replace(re, '$1$3').replace(/(&|\?)$/, '');
        }
    }
    else {
        if (typeof value !== 'undefined' && value !== null) {
            var separator = url.indexOf('?') !== -1 ? '&' : '?',
                hash = url.split('#');
            url = hash[0] + separator + key + '=' + value;
            if (hash[1]) url += '#' + hash[1];
            return url;
        }
        else
            return url;
    }
}
function init() {
    var button = document.getElementById("cipLangBtn");
    if (button.addEventListener) {
        button.addEventListener("click", function () {
            var param = getURLParameter("lang");

            if (param === "null") {
                param = "en";
            } else if (param == "en") {
                param = "ru";
            }
            else
                param = "en";

            document.location.href = UpdateQueryString("lang", param, document.location.href);
        }, false);
    } else if (button.attachEvent) {
        button.attachEvent("onclick", function () {
            var param = getURLParameter("lang");

            if (param === "null") {
                param = "en";
            } else if (param == "en") {
                param = "ru";
            }
            else
                param = "en";

            document.location.href = UpdateQueryString("lang", param, document.location.href);
        });
    }
};
if (window.addEventListener) {
    window.addEventListener("load", init, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", init);
} else {
    document.addEventListener("load", init, false);
}

