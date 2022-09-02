import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import logo from '@/images/logos/logo.jpeg'
import Image from 'next/image'
import React from "react";
import {useState} from "react";
import emailjs from 'emailjs-com';


export default function Register() {

  const [RegisterEmail, setRegisterEmail] = useState("");

  const Register2 = async (e) => {
    e.preventDefault();
    emailjs.sendForm('service_kz0bztq', 'template_zyawwjf', '#myForm','6DGhmfV1mS5Eri3h1')
    .then(function(response) {
       alert("Thanks for contacting us, we will contact you soon by mail")
    }, function(error) {
       alert('FAILED...', error);
    });
};

  return (
    <>
      <Head>
        <title>Join Us</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          {/* <Link href="/" aria-label="Home">
            <Image
              className="h-14 w-14 object-cover"
              src={logo}
              alt=""
              width={56}
              height={56}
            />
          </Link> */}
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-200">Join Us</h2>
            {/* <p className="mt-2 text-sm text-gray-700">
              Already registered?{' '}
              <Link
                href="/login"
                className="font-medium text-blue-600 hover:underline"
              >
                Sign in
              </Link>{' '}
              to your account.
            </p> */}
          </div>
        </div>
        <form
        id='myForm'
          action="#"
          className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2"
          onSubmit={Register2}
        >
          <TextField
          
            label="First name"
            id="first_name"
            name="first_name"
            type="text"
            autoComplete="given-name"
            required
          />
          <TextField
            label="Last name"
            id="last_name"
            name="last_name"
            type="text"
            autoComplete="family-name"
            required
          />
          <TextField
            className="col-span-full"
            label="Email address"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
             
            onChange={
              (e) => {
                  setRegisterEmail(e.target.value);
              }
          }

          />
          <TextField
            className="col-span-full"
            label="message"
            id="password"
            name="message"
            type="text"
            autoComplete="new-password"
            required
          />
          {/* <SelectField
            className="col-span-full"
            label="How did you hear about us?"
            id="referral_source"
            name="referral_source"
          >
            <option>Social Media</option>
            <option>Friends</option>
            <option>News</option>
            <option>College</option>
          </SelectField> */}
          <div className="col-span-full">
            <Button
              type="submit"
              variant="solid"
              color="blue"
              className="w-full"
              onClick={Register2}
            >
              <span>
                Submit <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  )
}
