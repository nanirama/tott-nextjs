import Layout from "../components/layout"
import Link from "next/link";
import { ApolloClient, InMemoryCache } from '@apollo/client';

import Hero from "../components/Home/Hero"
import Features from "../components/Home/Features"
import Cta from "../components/Home/Cta"
import Faq from "../components/Home/Faq"
import AllInOneFinance from "../components/Home/AllInOneFinance"
import Newsletter from "../components/Home/Newsletter"
import Team from "../components/Home/TeamSection"
import Features1 from "../components/Elements/Features1";
import Features2 from "../components/Elements/Features2";
import Features3 from "../components/Elements/Features3";
import Features4 from "../components/Elements/Features4";
import Features5 from "../components/Elements/Features5";
import Features6 from "../components/Elements/Features6";
import Features7 from "../components/Elements/Features7";

import Pricing1 from "../components/Elements/pricing1"
import Pricing2 from "../components/Elements/pricing2"
import CtaSection1 from "../components/Elements/CtaSection1";
import CtaSection2 from "../components/Elements/CtaSection2";
import CtaSection3 from "../components/Elements/CtaSection3";
import Integration1 from "../components/Elements/integrations1"
import Integrations2 from "../components/Elements/integrations2"

import Stats from "../components/Elements/Stats";

import Testimonial1 from "../components/Elements/Testimonials1"
import Testimonial2 from "../components/Elements/Testimonials2"
import Testimonial3 from "../components/Elements/Testimonials3";


import Client1 from "../components/Elements/Client1"
import Client2 from "../components/Elements/Client2"

import Popup from "../components/popup"

import { HOME_DATA } from "../lib/graphql/queries";


export default function Home(props) {
  const { hero_section, cta_section, faq_section, all_in_one_finance, newsletter, seo } = props.pageData.data.attributes
  return (
    <Layout seo={seo}>
     {hero_section && <Hero data={hero_section} />}
      <Team />
      {cta_section && <Cta data={cta_section} />}
      <Features />
      
      {faq_section && <Faq data={faq_section} />}
      {all_in_one_finance && <AllInOneFinance data={all_in_one_finance} />}
      <Features1 />
      <Features2 />
      <Features3 />
      <Features4 />
      <Features5 />
      <Features6 />
      <Features7 />

      <Integration1 />
      <Integrations2 />


      <Stats />
      <Pricing1 />
      <Pricing2 />
      <CtaSection1 />
      <CtaSection2 />
      <CtaSection3 /> 

      <Testimonial1 />
      <Testimonial2 />
      <Testimonial3 />

      <Client2 />
      <Client1 />
      {newsletter && <Newsletter data={newsletter} />}

    </Layout>
  )
}

export const getStaticProps = async () => {

  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache()
  });

  const { data } = await client.query({ query: HOME_DATA });

  return {
    props: {
      pageData: data.home
    }
  }
}
