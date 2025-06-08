# Hide Elementor File Upload Field

A simple JavaScript solution to hide specific Elementor file upload fields by their field ID.

## Overview

This script allows you to hide Elementor form file upload fields by targeting their specific field ID. This is useful when you need to conditionally hide file upload fields or replace them with custom upload interfaces.

## Usage

### 1. Add HTML + JS Using WPCode Plugin

1. Go to: `WP Admin > WP Coder >  Add New > Select HTML Tab`
2. Write Title of Code Snippet above
3. Paste the full HTML + JS code from Below
4. Save and **Activate**
5. Copy the generated shortcode (example: `[wpcode id="123"]`)

---

### 2. Add the Shortcode to Elementor

1. Open your Elementor page with a form.
2. Add a **Shortcode** widget above the form.
3. Paste your copied WPCode shortcode:
```javascript
document.addEventListener('DOMContentLoaded', function () {
  const fileField = document.getElementById('form-field-field_YOUR_FIELD_ID');
  if (fileField) {
    fileField.style.display = 'none';
    // Also hide its parent wrapper (Elementor field container)
    const parent = fileField.closest('.elementor-field');
    if (parent) {
      parent.style.display = 'none';
    }
  }
});
```

### Step 3: Replace the Field ID

Replace `YOUR_FIELD_ID` in the code above with your actual field ID.

**Example:**
If your field ID is `field_a51b627`, the code should be:

```javascript
document.addEventListener('DOMContentLoaded', function () {
  const fileField = document.getElementById('form-field-field_a51b627');
  if (fileField) {
    fileField.style.display = 'none';
    const parent = fileField.closest('.elementor-field');
    if (parent) {
      parent.style.display = 'none';
    }
  }
});
```

## Hide Multiple Fields

To hide multiple file upload fields, you can extend the script:

```javascript
document.addEventListener('DOMContentLoaded', function () {
  const fieldIds = ['field_a51b627', 'field_b62c738', 'field_c73d849'];
  
  fieldIds.forEach(function(fieldId) {
    const fileField = document.getElementById('form-field-' + fieldId);
    if (fileField) {
      fileField.style.display = 'none';
      const parent = fileField.closest('.elementor-field');
      if (parent) {
        parent.style.display = 'none';
      }
    }
  });
});
```

## CSS Alternative

You can also hide the field using CSS:

```css
#form-field-field_YOUR_FIELD_ID,
.elementor-field:has(#form-field-field_YOUR_FIELD_ID) {
  display: none !important;
}
```

## Important Notes

- Replace `YOUR_FIELD_ID` with your actual Elementor field ID
- The script waits for the DOM to load before executing
- Both the input field and its parent container are hidden for complete removal
- Test the functionality after implementation
- The field will still be part of the form submission even when hidden

## Troubleshooting

**Field not hiding?**
- Double-check the field ID is correct
- Ensure the JavaScript is loading after the page content
- Check browser console for any JavaScript errors

**Still visible?**
- Some themes might have CSS specificity issues
- Try adding `!important` to the CSS display property
- Check if there are multiple elements with similar IDs

## License

This code is provided as-is for educational and practical use. Feel free to modify according to your needs.
