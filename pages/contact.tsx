import ContactComponent from '../components/Contact';
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Metadata from "@components/MetaData";
import pageMeta from "@content/pageMeta";

const Contact = () => {
    return (
      <>
        <Metadata
          title={pageMeta.projects.title}
          description={pageMeta.projects.description}
          previewImage={pageMeta.projects.image}
          keywords={pageMeta.projects.keywords}
        />
        <section className='justify-center mx-auto my-11 mb-10 max-w-7xl relative p-4 mt-20'>
            <ContactComponent />
        </section>
      </>
    )
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {  
    return {
      props: {
        ...(await serverSideTranslations(locale || 'fr', ["common"])),
      },
      revalidate: 60 * 60 * 24 , // everyday
    };
}

export default Contact;