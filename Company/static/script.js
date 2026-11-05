function edit(id) {
    const row = document.getElementById(id);
    const viewElements = row.querySelectorAll(".view_mode");
    const editElements = row.querySelectorAll(".edit_mode");

    viewElements.forEach(element => element.style.display = 'none');
    editElements.forEach(element => element.style.display = 'inline-block');
}