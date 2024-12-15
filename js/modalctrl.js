< !--Include Bootstrap JS-- >
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@53.3.5/dist/js/bootstrap.bundle.min.js"></script>

function triggerModal() {
    const myModalEl = document.getElementById('exampleModal');
    const modal = new bootstrap.Modal(myModalEl);
    modal.toggle();


}