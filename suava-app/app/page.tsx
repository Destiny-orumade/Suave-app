
import NavBar from "@/components/NavBar"
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      
      <NavBar />
      <HeroSection />
      <InfoSection />
      <TeamSection />
      <Footer />
    </main>
  )
}
