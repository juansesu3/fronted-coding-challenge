// Import Yup library for schema validation
import * as Yup from 'yup';

// Regular expression to validate names that can contain letters and spaces
const nameRegex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/;

// Definition of validation schema using Yup
const validationSchema = Yup.object().shape({
  // Validation for the first name field
  firstName: Yup.string()
    .matches(nameRegex, 'First name should only contain letters.') // Check if the name contains only letters
    .required('You need to enter a first name.'), // Requires entering a first name

  // Validation for the last name field
  lastName: Yup.string()
    .matches(nameRegex, 'Last name should only contain letters.') // Check if the last name contains only letters
    .required('You need to enter a last name.'), // Requires entering a last name
});

// Export the validation schema for use in other files
export default validationSchema;
