
import { getContactPageData } from '../lib/api'
import ContactForm from '../components/contact-form'
import BlockContent from '@sanity/block-content-to-react'
import styles from '../components/markdown-styles.module.css'

export default function Contact ({ contactPageData, preview }) {
  const {businessName, email, team, address, hours} = contactPageData[0]

  return (
    <>
      <h2 className='text-center p-14 text-2xl sm:text-4xl bg-blush text-ghostwhite'>
        Get in touch
      </h2>
      <div className='text-onyx py-10 flex flex-col lg:flex-row justify-between w-full lg:w-11/12 mx-auto items-center'>
        <section className='order-2 w-5/6 lg:w-1/2'>
          <ContactForm />
        </section>
        <section className='hidden lg:block lg:order-1 w-1/2'>
          <h2 className='text-3xl font-bold mb-10'>{businessName}</h2>
          <p className='my-3 font-bold'>☎︎ Telephone: <a className='hover:underline font-thin' href={`tel:${team[0].phone}`}>{team[0].phone}</a> or <a className='hover:underline font-thin' href={`tel:${team[1].phone}`}>{team[1].phone}</a></p>
          <p className='my-3 font-bold'>✉︎ Email: <a className='hover:underline font-thin' href={`mailto:${email}`}>{email}</a></p>
          <div>
            <h3 className='text-xl font-bold mt-10'>Operating hours:</h3>
            <BlockContent blocks={hours} projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID} dataset={process.env.NEXT_PUBLIC_SANITY_DATASET} className={styles.markdown} />
          </div>
        </section>
      </div>
    </>)
}

export async function getStaticProps({ preview  = false }) {
  const contactPageData = await getContactPageData(preview)
  return {
    props: { contactPageData, preview },
    revalidate: 1
  }
}
