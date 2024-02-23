import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
// import { Testimonial } from '@/components/Testimonial'
import logoTarget from '@/images/clients/target/Target_Corporation-Logo.wine.svg'
import logoCO from '@/images/clients/state-of-colorado/Seal_of_Colorado.svg'
import logoMicrosoft from '@/images/clients/microsoft/Microsoft-Logo.wine.svg'
import logoJCI from '@/images/clients/jci/johnson-controls-logo-1.svg'
import logoEbay from '@/images/clients/ebay/EBay-Logo.wine.svg'
import logoDisney from '@/images/clients/disney/The_Walt_Disney_Company-Logo.wine.svg'
import logoComcast from '@/images/clients/comcast/Comcast-Logo.wine.svg'
import logoBestBuy from '@/images/clients/best-buy/Best_Buy-Logo.wine.svg'
import logoAccenture from '@/images/clients/accenture/Accenture-Logo.svg'
import logoTelstra from '@/images/clients/telstra/Telstra-Logo.wine.svg'
import logoToyota from '@/images/clients/toyota/Toyota_Canada_Inc.-Logo.wine.svg'
import logoTurkcell from '@/images/clients/turkcell/Turkcell-Logo.wine.svg'
import logoWW from '@/images/clients/weight-watchers/Weightwatchers-logo.svg'
import logoAmazon from '@/images/clients/amazon/Amazon-Logo.wine.svg'
import logoAWS from '@/images/clients/aws/Amazon_Web_Services-Logo.wine.svg'
import logoUnilever from '@/images/clients/unilever/Unilever-Logo.wine.svg'
import imageLaptop from '@/images/laptop.jpg'
// imAmazon { loadCmazon } from '@/lib/mdx'Amazon_(company)-Logo.wine

const clients = [
  ['AWS', logoAWS],
  ['Amazon', logoAmazon],
  ['Microsoft', logoMicrosoft],
  ['State of Colorado', logoCO],
  ['Accenture', logoAccenture],
  ['The Walt Disney Company', logoDisney],
  ['Toyota', logoToyota],
  ['Unilever', logoUnilever],
  ['BestBuy', logoBestBuy],
  ['Comcast', logoComcast],
  ['EBay', logoEbay],
  ['JCI', logoJCI],
  ['Target', logoTarget],
  ['Telstra', logoTelstra],
  ['Turkcell', logoTurkcell],
  ['Weight Watchers', logoWW],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-slate-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with dozens of amazing organizations
          </h2>
          <div className="h-px flex-auto bg-slate-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Elevating government services through expertise"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Our vision is to redefine public service through technology, making government operations more efficient, secure, and accessible to everyone.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-slate-950/5 transition hover:bg-slate-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-slate-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-slate-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-slate-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-slate-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We empower your transition into the digital era with bespoke AI and cloud solutions"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        We facilitate your digital transformation with tailor-made AI and cloud solutions, elevating public sector capabilities. 
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Digital Transformation">
            Transforming government services with digital solutions that engage citizens and streamline processes.
            </ListItem>
            <ListItem title="Intelligent Applications">
            Developing advanced applications that leverage AI to improve decision-making and service delivery.
            </ListItem>
            <ListItem title="Data Analytics and Security">
            Enhancing data analysis and security protocols to protect sensitive information and improve service outcomes.
            </ListItem>
            <ListItem title="Innovative Cloud Infrastructure">
            Building and managing robust cloud environments that ensure scalability, reliability, and security for all government operations.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'Cloud-native AI specialists for federal, state, and local government.',
}

export default async function Home() {
  // let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-slate-950 [text-wrap:balance] sm:text-7xl">
            Cloud-native AI specialists for federal, state, and local government
          </h1>
          <p className="mt-6 text-xl text-slate-600">
            At GovCraft, we harness our deep private sector experience to bring state-of-the-art AI and cloud innovations to federal, state, and local governments. Our mission is to transform government operations with unparalleled efficiency and security enhancements.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      {/* <CaseStudies caseStudies={caseStudies} /> */}

      {/* <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'CivicTrust', logo: logoPhobiaDark }}
      >
        GovCraft not only revolutionized our digital services but also embedded a culture of innovation within our team. Their strategic approach to AI and cloud solutions has markedly improved our service delivery.
      </Testimonial> */}

      <Services />

      <ContactSection />
    </>
  )
}
