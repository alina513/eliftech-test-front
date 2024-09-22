import React from 'react';
import { Formik, Field } from 'formik';
import { addParticipant } from '../../helpers/helpers';
import { Wrapper, Button, Input, Label, Radio } from './Form.styled';
import toast from 'react-hot-toast';

const FormReg = ({ event_id }) => {
  const handleSubmit = async (values, actions) => {
    try {
      const eventsData = await addParticipant({ event_id, ...values });
      toast.success('Успішно зареєстровано!');
      actions.resetForm();
      return eventsData;
    } catch (error) {
      toast.error('Будь ласка, спробуйте завантажити сторінку ще раз');
    }
  };

  return (
    <Wrapper>
      <Formik
        initialValues={{ fullname: '', email: '', birth: '', source: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Label htmlFor="fullname">Full Name</Label>
            <Input
              name="fullname"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.fullname}
              id="fullname"
            />
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              id="email"
            />
            {errors.email && touched.email && errors.email}
            <Label htmlFor="birth">Date of birth</Label>
            <Input
              name="birth"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.birth}
              id="birth"
            />

            <div id="source">Where did you hear about this event?</div>
            <Radio role="group" aria-labelledby="source">
              <label>
                <Field type="radio" name="source" value=" Social media" />
                Social media
              </label>
              <label>
                <Field type="radio" name="source" value="Friends" />
                Friends
              </label>
              <label>
                <Field type="radio" name="source" value="Found myself" />
                Found myself
              </label>
            </Radio>

            <Button type="submit">Submit</Button>
          </form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default FormReg;
