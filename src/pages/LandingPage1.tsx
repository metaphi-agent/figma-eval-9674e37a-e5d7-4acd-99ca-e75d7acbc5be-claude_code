import { Header } from '../components/blocks/Header';
import { HeroSection } from '../components/blocks/HeroSection';
import { FeatureSection } from '../components/blocks/FeatureSection';
import { ServicesSection } from '../components/blocks/ServicesSection';
import { TestimonialsSection } from '../components/blocks/TestimonialsSection';
import { CaseStudySection } from '../components/blocks/CaseStudySection';
import { CTASection } from '../components/blocks/CTASection';
import { Footer } from '../components/blocks/Footer';

export default function LandingPage1() {
  return (
    <div className="min-h-screen bg-white">
      <Header logoText="soller" />

      <main>
        {/* Hero Section */}
        <HeroSection
          title="Get the Sun to Power Your Home"
          subtitle="Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque."
          testimonial={{
            quote: "Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.",
            author: "Rwanda Melflor",
            role: "zerowaste.com",
          }}
          image="./assets/images/hero-people-solar.png"
        />

        {/* Pick the Sun Section */}
        <FeatureSection
          caption="No more waste"
          title="Pick the Sun"
          description="Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin."
          alignment="center"
          showAppMockup={true}
        />

        {/* Personalized Services */}
        <ServicesSection
          caption="Services"
          title="Personalized services"
          description="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
          imagePosition="left"
          services={[
            {
              icon: 'truck',
              title: 'Et mauris',
              description: 'Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.',
            },
            {
              icon: 'trending',
              title: 'Eget sit',
              description: 'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.',
            },
            {
              icon: 'settings',
              title: 'Imperdiet pellentesque',
              description: 'Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra urna, risper pulvinar tristique tellus.',
            },
            {
              icon: 'target',
              title: 'Non libero',
              description: 'Congue mauris sem vel, urna viverra. Urna, nibh leo auctor giam porttitor risus sit tellus.',
            },
          ]}
        />

        {/* Powerful Features */}
        <ServicesSection
          caption="System features"
          title="Powerful features"
          description="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
          imagePosition="right"
          services={[
            {
              icon: 'zap',
              title: 'Erat sit',
              description: 'Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in.',
            },
            {
              icon: 'award',
              title: 'Ullamcorper arcu',
              description: 'Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus auctor habitant duis dictum.',
            },
            {
              icon: 'settings',
              title: 'Et pellentesque',
              description: 'Mi vitae, massa eu molestie massa euismod volutpat condimentum. Blandit molestie ullamcorper hendrerit purus lorem vulputate.',
            },
            {
              icon: 'target',
              title: 'Amet egestas',
              description: 'Elementum, libero, lacus, vel ullamcorper at velit id. Maleseuada velit et, ullamcorper malesuada amet, felis.',
            },
          ]}
        />

        {/* Testimonials */}
        <TestimonialsSection
          caption="Join other Sun harvesters"
          title="Make something awesome"
          description="Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo."
          backgroundColor="purple"
          showCTA={true}
          testimonials={[
            {
              quote: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
              author: "Jane Cooper",
              role: "10KWh",
            },
            {
              quote: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
              author: "Ralph Edwards",
              role: "32KWh",
            },
            {
              quote: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis nisl viverra aliquam. Blandit purus leo condimentum dolor.",
              author: "Courtney Henry",
              role: "6KWh",
            },
            {
              quote: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magna habitant amet, in. Pretium amet laifend tellus ornare. Maecenas nibh suscipit viverra. Massa nisi pretium magna.",
              author: "Cameron Williamson",
              role: "12KWh",
            },
          ]}
        />

        {/* Case Studies */}
        <CaseStudySection
          caption="Case studies"
          title="Check how our systems have helped others"
          description="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
          linkText="Find Case Studies"
          linkHref="#case-studies"
        />

        {/* Final CTA */}
        <CTASection
          caption="Get the Sun to power your home"
          title="All the power that you need for your house is now available"
          subtitle="Egestas fringilla aliquam leo."
          backgroundColor="purple"
        />
      </main>

      <Footer logoText="soller" />
    </div>
  );
}
