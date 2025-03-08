const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => {
    return new bootstrap.Tooltip(tooltipTriggerEl, {
        container: '.content_main',
        boundary: 'viewport',
    });
});
