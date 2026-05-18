import { TrustStrip } from "@/components/TrustStrip";
import {
  Header,
  Hero,
  DashboardPreview,
  Positioning,
  Features,
  HowItWorks,
  UseCases,
  Roadmap,
  CTA,
  Footer,
} from "@/components/landing";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <TrustStrip />
        </div>

        <Hero />
        <DashboardPreview />
        <Positioning />
        <Features />
        <HowItWorks />
        <UseCases />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
