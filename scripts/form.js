$(document).ready(function () {
    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
    $("#form").on("submit", function (e) {
        e.preventDefault();
        let message = "";
        $(this).serializeArray().forEach(function (data) {
            message += data.name + ": " + data.value + "\n";
        });
        alert("Formulář jste odeslali s těmito daty:\n\n" + message);
    });
});
