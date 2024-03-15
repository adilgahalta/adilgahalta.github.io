// Untuk Clear form sesudah submit

window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")){
    form.reset();
}
}