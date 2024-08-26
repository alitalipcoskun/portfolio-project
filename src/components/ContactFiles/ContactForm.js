import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Input } from '@/shadcn_ui/input';
import { Textarea } from '@/shadcn_ui/textarea';
import { Button } from '@/shadcn_ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/shadcn_ui/card';

const ContactForm = () => {
    // Input form refs to check them
    const initialValues = {
        name: '',
        surname: '',
        email: '',
        topic: '',
        message: ''
    };
    // Validators to get information appropiately
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        surname: Yup.string().required('Surname is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        topic: Yup.string().required('Topic is required'),
        message: Yup.string().required('Message is required'),
    });
    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <Card className="w-full p-6">
            <CardHeader>
                <CardTitle>Contact Me</CardTitle>
            </CardHeader>
            <CardContent>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="space-y-4">
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="name">Name</label>
                                <Field name="name" as={Input} id="name" placeholder="Enter your name" required />
                                <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="surname">Surname</label>
                                <Field name="surname" as={Input} id="surname" placeholder="Enter your surname" required />
                                <ErrorMessage name="surname" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="email">Email</label>
                                <Field name="email" as={Input} id="email" type="email" placeholder="Enter your email" required />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="topic">Topic</label>
                                <Field name="topic" as={Input} id="topic" placeholder="Enter the topic" required />
                                <ErrorMessage name="topic" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="message">Message</label>
                                <Field name="message" as={Textarea} id="message" placeholder="Enter your message" rows={6} required />
                                <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
                            </div>
                            <Button type="submit" className="w-full max-w-40" disabled={isSubmitting}>Send</Button>
                        </Form>
                    )}
                </Formik>
            </CardContent>
        </Card>
    )
}

export default ContactForm