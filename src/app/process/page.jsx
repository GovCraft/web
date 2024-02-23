import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, UnpunctuatedListItem as ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-slate-300 before:content-['/_'] after:text-slate-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-slate-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-slate-600">
        <p>
          Our first step is a deep dive into understanding the unique{' '}
          <strong className="font-semibold text-slate-950">needs</strong>, challenges, and goals of each government entity we partner with. This phase is about building a foundation of trust and insight, enabling us to tailor our solutions to your specific objectives.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-slate-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Stakeholder interviews">
          ensure all voices are heard. This process fosters an environment of inclusivity and collaboration, crucial for identifying the full spectrum of needs and expectations within your organization.
        </ListItem>
        <ListItem title="Operational analysis">
          achieves a comprehensive understanding of current processes.  It lays the groundwork for pinpointing efficiencies and areas ripe for innovation, ensuring that our solutions are both impactful and seamlessly integrated.
        </ListItem>
        <ListItem title="Data-driven insights">
          informs our strategy. By harnessing the power of your data, we are able to make informed decisions that are tailored to your specific challenges and opportunities, ensuring outcomes that are both effective and strategically aligned.
        </ListItem>
        <ListItem title="Security and compliance assessments">
          safeguards your operations. This critical step ensures that every solution adheres to the highest standards of security and regulatory compliance, protecting your organization against vulnerabilities and ensuring trustworthiness in every initiative.
        </ListItem>
      </List>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-slate-600">
        <p>
          With a solid understanding in place, we develop a customized roadmap for implementing technology solutions that align with your strategic goals. This roadmap is both ambitious and realistic, designed to navigate the complexities of government operations with precision.
        </p>
        <p>
          <h3 className="mt-12 font-display text-base font-semibold text-slate-950">
            Communication and milestones
          </h3>
          <List className="mt-8">
            <ListItem title="A dedicated GovCraft liaison">
              ensures continuous, clear communication. This personalized point of contact bridges the gap between GovCraft&apos;s solutions and your organization&apos;s needs, facilitating a smooth and transparent collaboration process from start to finish.
            </ListItem>
            <ListItem title="Regular updates">
              and transparent progress reports keep all stakeholders informed. These updates provide a real-time view into the development process, ensuring that everyone involved is aligned with the project&apos;s progress and any adjustments needed along the way.
            </ListItem>
            <ListItem title="Agile development practices">
              allow for flexibility and responsiveness. By adopting an agile approach, we&apos;re able to adapt quickly to changes and feedback, ensuring that the solutions we develop are not only effective but also truly aligned with your evolving needs and goals.
            </ListItem>
          </List>

        </p>
      </div>

      {/* <Blockquote
        author={{ name: 'Debra Fiscal', role: 'CEO of Unseal' }}
        className="mt-12"
      >
        Studio were so regular with their progress updates we almost began to
        think they were automated!
      </Blockquote> */}
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-slate-600">
        <p>
          Our delivery phase is marked by meticulous attention to detail, ensuring that every solution not only meets but <strong className="font-semibold text-slate-950">exceeds expectations</strong>. We prioritize functionality, security, and scalability, delivering on our promise of transformative solutions that are ready for immediate and future challenges.

        </p>
        <p>
          <h3 className="mt-12 font-display text-base font-semibold text-slate-950">
            Key Deliverables Include
          </h3>
          <List className="mt-8">
            <ListItem title="Comprehensive testing">
              to guarantee reliability and performance. Our extensive testing protocols cover all aspects of the solution to ensure that it not only meets but exceeds the stringent requirements of government operations, delivering unparalleled reliability and superior performance.
            </ListItem>
            <ListItem title="Scalable infrastructure">
              designed for government operations. Our solutions are built on infrastructure that can grow and adapt to your needs over time, ensuring that as your operations expand or evolve, your technological capabilities can scale accordingly without compromise.
            </ListItem>
            <ListItem title="Ongoing support">
              to ensure smooth operation and adaptation. Beyond the initial launch, our team remains committed to your success, providing the expertise and assistance needed to navigate any challenges that arise and to embrace opportunities for further innovation and improvement.
            </ListItem>
          </List>

        </p>
      </div>

    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-slate-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-slate-100 stroke-slate-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Aligned with our partners"
      >
        <p>
          Our process is underpinned by a commitment to values that matter most to our government partners
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Precise">
            We understand the importance of accuracy and detail in government work. Precision guides every solution we craft, ensuring outcomes that are not just effective but exact.
          </GridListItem>
          <GridListItem title="Efficient">
            Our goal is to maximize resource use for optimal outcomes. Efficiency drives our approach, delivering impactful results with streamlined processes.
          </GridListItem>
          <GridListItem title="Adaptable">
            We tailor our solutions to meet the unique needs of each partner. Flexibility in our methods allows us to address your specific challenges and goals.
          </GridListItem>
          <GridListItem title="Transparent">
            Open communication and clear processes are central to our approach. Transparency builds trust, fostering a collaborative and productive partnership.
          </GridListItem>
          <GridListItem title="Committed">
            We are dedicated to our partners&apos; long-term success and to the communities they serve. Our commitment ensures enduring support and guidance.
          </GridListItem>
          <GridListItem title="Innovative">
            The technological landscape is always evolving and so are we. Our pursuit of innovation ensures your solutions are at the forefront of technology.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'We prioritize transparency and efficiency in transforming government operations through advanced technology.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          We prioritize transparency and efficiency in transforming government operations through advanced technology. Here’s a clear view into our structured approach, designed to deliver tailored, high-impact solutions to our public sector partners.        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
