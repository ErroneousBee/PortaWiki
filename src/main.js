function onload() {
    console.trace();
    read_file_into("content/logo.html", document.getElementById("logo"));
    read_file_into("content/mast.txt", document.getElementById("mast"));
    read_file_into("content/sidenav.md", document.getElementById("sidenav"));
    read_file_into("content/test.txt", document.getElementById("content"));
}

function read_file_into(file, element) {

    fetch(file)
        .then(response => response.text())
        .then(text => {
            element.innerHTML = text;
        });


}