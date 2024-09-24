import React from 'react';
import { useState } from 'react';
import DatePicker from '@n3/react-date-picker';
import '@n3/react-date-picker/dist/n3-date-picker.css';
import { Formik } from 'formik';
import { addParticipant } from '../../helpers/helpers';
import {
  Wrapper,
  Button,
  Input,
  Label,
  Radio,
  ButtonClose,
  Svg,
  RadioLabel,
  FieldFormic,
  TextRadio,
  ErrorMessage,
} from './Form.styled';
import toast from 'react-hot-toast';
import sprite from '../../assets/sprite.svg';

const FormReg = ({ event_id, closeModal }) => {
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
      <ButtonClose onClick={closeModal}>
        <Svg width="20" height="20">
          <use xlinkHref={sprite + '#icon-close'}></use>
        </Svg>
      </ButtonClose>
      <Formik
        initialValues={{ fullname: '', email: '', birth: '', source: '' }}
        validate={values => {
          const errors = {};

          if (!values.fullname) {
            errors.fullname = 'Required';
          } else if (values.fullname.length < 3) {
            errors.fullname = 'Full Name must be at least 3 characters long';
          }

          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address. Example: exam@com.ua';
          }
          if (!startDate) {
            errors.birth = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, actions) => {
          handleSubmit({ ...values, birth: startDate }, actions);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
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
            {errors.fullname && touched.fullname && (
              <ErrorMessage>{errors.fullname}</ErrorMessage>
            )}

            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              id="email"
            />

            {errors.email && touched.email && (
              <ErrorMessage>{errors.email}</ErrorMessage> //
            )}

            <Label htmlFor="birth">Date of birth</Label>
            <DatePicker
              value={startDate}
              onChange={date => setStartDate(date)}
            />

            {errors.birth && touched.birth && (
              <ErrorMessage>{errors.birth}</ErrorMessage>
            )}

            <TextRadio id="source">
              Where did you hear about this event?
            </TextRadio>
            <Radio role="group" aria-labelledby="source">
              <RadioLabel>
                <FieldFormic type="radio" name="source" value=" Social media" />
                Social media
              </RadioLabel>
              <RadioLabel>
                <FieldFormic type="radio" name="source" value="Friends" />
                Friends
              </RadioLabel>
              <RadioLabel>
                <FieldFormic type="radio" name="source" value="Found myself" />
                Found myself
              </RadioLabel>
            </Radio>

            <Button type="submit">Submit</Button>
          </form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default FormReg;
