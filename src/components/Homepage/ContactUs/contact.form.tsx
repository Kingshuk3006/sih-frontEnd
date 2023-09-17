'use client';
import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input
} from '../../../../lib/chakraui'; // Import individual Chakra UI components
import { Field, Form, Formik } from 'formik';

export default function ContactForm() {
  function validateName(value) {
    let error;
    if (!value) {
      error = 'Name is required';
    }
    return error;
  }

  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {props => (
        <Form>
          <Field name="name" validate={validateName}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.name && form.touched.name}
                mb={4}
                className=""
              >
                <div className="flex justify-between items-center">
                  <FormLabel className="text-center text-xl m-0 p-0">
                    Name
                  </FormLabel>
                  <Input
                    {...field}
                    id="name"
                    className=" w-[500px] bg-white border border-black hover:border-black"
                  />
                </div>

                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            className="bg-[#C726FF] text-white hover:bg-violet-800 w-44 h-12 rounded-full"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Schedule Consult
          </Button>
        </Form>
      )}
    </Formik>
  );
}
