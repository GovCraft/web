
import { useId } from 'react'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'


function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-slate-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-slate-950 ring-4 ring-transparent transition focus:border-slate-950 focus:outline-none focus:ring-slate-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-slate-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-slate-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-slate-950"
      >
        {label}
      </label>
    </div>
  )
}

const submitForm = async (formData) => {
  "use server";
  // Initialize an empty object to hold the transformed data
  const dataToSubmit = {};

  // Iterate over formData to populate dataToSubmit
  for (const [key, value] of formData) {
    // Ignore the action ID field
    if (key.startsWith('$ACTION_ID')) continue;
    dataToSubmit[key] = value;

    // Extract and add domain from email
    if (key === 'email') {
      const domain = value.split('@')[1];
      dataToSubmit['domain'] = domain;
    }
  }
  // Define the URL to post the data
  const url = 'https://govcraft.ai/api/submit';

  try {
    // Send the POST request
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSubmit),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Handle the response
    const responseData = await response.json();
    console.log('Success:', responseData);
    //clear the form and notify the user
    for (const [key, value] of formData) {
      formData.delete(key);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};


function ContactForm() {
  return (
    <FadeIn className="lg:order-last">
      <form action={submitForm}>
        <h2 className="font-display text-base font-semibold text-slate-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Organization"
            name="organization"
            autoComplete="organization"
          />
          <TextInput label="Contact Number" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="Project Overview" name="message" />

        </div>
        <Button type="submit" className="mt-10">
          Begin the dialogue
        </Button>
      </form>
    </FadeIn>
  )
}


function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-slate-950">
        Our offices
      </h2>
      <p className="mt-6 text-base text-slate-600">
        Prefer a face-to-face meeting? While digital is our domain, we value the power of personal connection. Here is our address for official and direct engagements.
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-slate-950">
          Direct Email Contacts
        </h2>
        <p className="mt-6 text-base text-slate-600">
          For targeted inquiries, please contact us at:
        </p>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['Talent Acquisition', 'careers@govcraft.ai'],
            ['Media Relations', 'press@govcraft.ai'],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-slate-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-slate-600 hover:text-slate-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>
    </FadeIn>
  )
}

export const metadata = {
  title: 'Contact Us',
  description: 'Join the innovation journey. Your mission is our next challenge.',
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Join the innovation journey. ">
        <p>Your mission is our next challenge.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
