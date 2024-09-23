import React from 'react';
import { useState } from 'react';
import DatePicker from '@n3/react-date-picker'
import '@n3/react-date-picker/dist/n3-date-picker.css'
import { Formik, Field } from 'formik';
import { addParticipant } from '../../helpers/helpers';
import { Wrapper, Button, Input, Label, Radio } from './Form.styled';
import toast from 'react-hot-toast';

const FormReg = ({ event_id, closeModal}) => {
  const [startDate, setStartDate] = useState(null);

  const handleSubmit = async (values, actions) => {
    try {
      const eventsData = await addParticipant({ event_id, ...values });
      toast.success('Успішно зареєстровано!');
      actions.resetForm();
      closeModal();
      return eventsData;
    } catch (error) {
      toast.error('Ви неправильно заповнили форму');
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
          if (!startDate) {
            errors.birth = 'Required';}
          return errors;
        }}
       
        onSubmit={(values, actions) => {
          handleSubmit({ ...values, birth: startDate }, actions); // Додаємо дату до значень форми
        }}
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
              value={values.fullname}
              id="fullname"
            />
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              id="email"
            />
            {errors.email && touched.email && errors.email}
            <Label htmlFor="birth">Date of birth</Label>
             <DatePicker
              value={startDate}
              onChange={(date) => setStartDate(date)} 
            />
            {errors.birth && touched.birth && <div>{errors.birth}</div>}


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
