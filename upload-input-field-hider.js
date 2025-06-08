document.addEventListener('DOMContentLoaded', function () {
  const fileField = document.getElementById('form-field-field_YOUR_FIELD_ID'); // e.g form-field-field_a51b627
  if (fileField) {
    fileField.style.display = 'none';
    // Also hide its parent wrapper (Elementor field container)
    const parent = fileField.closest('.elementor-field');
    if (parent) {
      parent.style.display = 'none';
    }
  }
});
