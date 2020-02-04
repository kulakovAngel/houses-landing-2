import React from "react";

import Layout from "./../components/layout";
import Image from "./../components/image";

const ContactsPage = () => (
    <Layout seo={{
        title: 'Contacts',
        description: 'Contacts',
        keywords: 'Houses, sale, Hrodno',
    }}>
        <h1>© Houses for sale</h1>
        <p>Hrodno, Belarus</p>
        <p>+375 25 7300310</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
        </div>
  </Layout>
);
export default ContactsPage;
