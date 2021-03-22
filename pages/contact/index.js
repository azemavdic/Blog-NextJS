import ContactForm from "../../components/contact/ContactForm"
import Head from 'next/head'
import { Fragment } from "react"

const ContactPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Kontakt</title>
                <meta name="description" content="Kontaktirajte nas"/>
            </Head>
            <ContactForm />
        </Fragment>
    );
}

export default ContactPage
