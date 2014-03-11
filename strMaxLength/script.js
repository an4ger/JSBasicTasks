function truncate(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength - 3) + '...';
    }
    else return str;
}
alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
alert(truncate("Всем привет!", 20));