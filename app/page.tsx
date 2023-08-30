import Image from 'next/image'
import { Navbar } from './utils/navbar'
import { Hero } from './components/hero'
import { Featsec } from './components/features'
import { ProductComp } from './components/productcom'
import { ContactComp } from './components/contact'
import { FooterComp } from './components/footer'


export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Featsec></Featsec>
    <ProductComp></ProductComp>
    <ProductComp></ProductComp>
    <ContactComp></ContactComp>
    <FooterComp></FooterComp>
    </>
  )
}
