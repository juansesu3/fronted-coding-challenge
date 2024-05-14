// Import Formik components
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
// Import React and other hooks
import React, { useMemo, useState } from 'react';
// Import validation schema
import validationSchema from '../../utils/yup/ValidationSchema';
// Import GraphQL query hook
import useFilmsQuery from '../../utils/graphql/query';
// Import FormData and Movie types
import { FormData } from '../../utils/interface/formData';
import { Movie } from '../../utils/interface/formData';

// Define MyForm component as a React function component
const MyForm: React.FC = () => {
    // GraphQL query hook to fetch movies data
    const { data, loading, error } = useFilmsQuery();

    // State to track if the form has been submitted
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Calculate initial form values
    const initialValues: FormData = useMemo(() => ({
        firstName: '',
        lastName: '',
        // Set the first movie as default if data is available
        favoriteMovie: data && data.allFilms.films.length > 0 ? data.allFilms.films[0].title : '',
    }), [data]); // Dependency on movies data

    // Function to handle form submission
    const handleSubmit = (values: FormData, { setSubmitting, resetForm }: FormikHelpers<FormData>) => {
        // Store form data in local storage
        localStorage.setItem('formData', JSON.stringify(values));
        // Set submission state to false and display thank you message
        setSubmitting(false);
        setIsSubmitted(true);
        // Reset the form
        resetForm();
    };

    // Handle GraphQL query error
    if (error) return (
        <div className='something-wrong'>
            <h3>Oops!</h3>
            <p>Something went wrong. Please try again later.</p>
        </div>
    );

    // Render the MyForm component
    return (
        <div className='form-container'>
            <h1>My form</h1>
            {isSubmitted ? (
                <div className='thank-you-message'>
                    <h1>Thank you for submitting the form!</h1>
                </div>
            ) : (
                <>
                    {/* Formik component to manage form state */}
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema} // Validation schema
                        onSubmit={handleSubmit} // Function to handle form submission
                    >
                        {({ isSubmitting, touched, errors }) => (
                            <Form className='form'> {/* Form */}
                                {/* Error handling for first name field */}
                                <ErrorMessage className='error-message' name="firstName" component="div" />
                                {/* Error handling for last name field */}
                                <ErrorMessage className='error-message' name="lastName" component="div" />
                                {/* Section for text input fields */}
                                <section className='input-text-section'>
                                    {/* First name field */}
                                    <div className='input-label-container'>
                                        <label className="form-label" htmlFor='first-name'>
                                            First name <span>*</span>
                                        </label>
                                        <Field
                                            name='firstName'
                                            type='text'
                                            id='first-name'
                                            className={`input-field ${touched.firstName && errors.firstName ? 'input-error' : ''}`}
                                        />
                                    </div>
                                    {/* Last name field */}
                                    <div className='input-label-container'>
                                        <label className="form-label" htmlFor='last-name'>
                                            Last name <span>*</span>
                                        </label>
                                        <Field
                                            name='lastName'
                                            type='text'
                                            id='last-name'
                                            className={`input-field ${touched.lastName && errors.lastName ? 'input-error' : ''}`}
                                        />
                                    </div>
                                </section>
                                {/* Section for selecting favorite movie */}
                                <section>
                                    <div className='label-select-container'>
                                        <label htmlFor='favorite'>Favorite Star Wars movie</label>
                                        {/* Movie selection field */}
                                        <Field as='select' name='favoriteMovie' className='select-field'>
                                            {/* Show loading message while movies are being fetched */}
                                            {loading ? (
                                                <option>Loading...</option>
                                            ) : (
                                                // Map fetched movies
                                                data.allFilms.films.map((movie: Movie, i: number) => (
                                                    // Movie option
                                                    <option key={i} value={movie.title}>
                                                        {movie.title}
                                                    </option>
                                                ))
                                            )}
                                        </Field>
                                    </div>
                                </section>
                                {/* Form submission button */}
                                <button type="submit" disabled={isSubmitting}>Submit</button>
                            </Form>
                        )}
                    </Formik>
                </>
            )}
        </div>
    );
};

// Export the MyForm component
export default MyForm;
