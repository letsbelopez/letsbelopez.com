import Link from 'next/link'
import Layout from '../components/layout'
import HomeHero from '../components/home-hero'
import ContactForm from '../components/contact-form'
import HomeItemDark from '../components/home-item-dark'
import HomeItem from '../components/home-item'
import HomeItemCol from '../components/home-item-col'

const Index = () => (
  <Layout title="David Lopez">
    <HomeHero />
    <HomeItemDark />
    <HomeItem />
    <HomeItemCol />
    <ContactForm />
  </Layout>
)

export default Index