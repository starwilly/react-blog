import PropTypes from 'prop-types';
import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  title: yup
    .string()
    .required()
    .min(5, 'Post Title is too short'),
  text: yup.string(),
});

const innerForm = props => {
  /* eslint-disable-next-line react/prop-types */
  const { errors, touched, isSubmitting, isValid } = props;
  return (
    <Form>
      <p>
        <label htmlFor="title">
          Post Title:
          <Field name="title" type="text" />
        </label>
      </p>
      {touched.title && errors.title && <p>{errors.title}</p>}
      <p>
        <label htmlFor="text">
          Content:
          <Field name="text" component="textarea" />
        </label>
      </p>
      <p>
        <button type="submit" disabled={!isValid || isSubmitting}>
          Submit
        </button>
      </p>
    </Form>
  );
};

function CreatePostForm({ onSubmit }) {
  return (
    <Formik
      onSubmit={onSubmit}
      action=""
      initialValues={{ title: '', text: '' }}
      validationSchema={schema}
      render={innerForm}
    />
  );
}

CreatePostForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CreatePostForm;
