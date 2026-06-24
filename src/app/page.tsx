import { Hospital, Hourglass, Mail, MapPin, Phone, ShieldCheck, Users } from 'lucide-react'
import Image from 'next/image'
import Carousel from './components/Carousel'
import InfoBox from './components/InfoBox'

export default function Home() {
  return (
    <main>
      <section
        className="w-full h-[700px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <div className="relative z-10 max-w-2xl px-16 py-32">
          <h1 className="text-4xl font-bold text-[#8900F2] mb-4">
            Zâmbetul tău merită cea mai bună îngrijire!
          </h1>
          <p className="text-gray-800 text-lg mb-8">
            Clinica noastră este un spațiu modern, dedicat excelenței în medicina dentară, având o echipă de medici specialiști pasionați și tehnologie de ultimă generație. Ne asigurăm că fiecare vizită este complet fără durere, sigură și confortabilă pentru tine și familia ta.
          </p>
          <button className="bg-[#8900F2] hover:bg-[#7000cc] text-white text-xl font-semibold px-12 py-5 rounded-2xl transition-colors cursor-pointer">
            Vezi mai mult...
          </button>
        </div>
      </section>

      <section id="echipa" className="py-16 flex flex-col gap-16 md:flex-row mx-auto max-w-6xl px-4">
        <div className="text-white bg-[#8900F2] p-16 rounded-2xl w-1/2 flex flex-col justify-center gap-5">
          <h1 className="text-4xl font-bold">Echipa care are grijă de zâmbetul tău!</h1>
          <p className="text-lg mt-4">
            Echipa noastră de medici specialiști este dedicată să ofere cele mai bune tratamente dentare, combinând experiența cu tehnologia de ultimă generație. Fiecare pacient este tratat cu atenție și profesionalism, asigurându-ne că fiecare vizită este o experiență pozitivă și confortabilă.
          </p>
          <button className="mt-8 bg-white text-[#8900F2] font-semibold text-lg px-8 py-4 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer">
            Fă cunoștință cu medicii noștri
          </button>
        </div>
        <div className="w-1/2 relative min-h-[700px]">
          <Image
            src="/person1.png"
            alt="Team"
            fill
            className="rounded-2xl object-cover"
          />
        </div>
      </section>

      <section id="servicii" className="bg-[#8900F2] py-16 px-4">
        <Carousel />
      </section>

      <section id="avantaje" className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-2 gap-8">
        <InfoBox title="Pacienți" value={10000} suffix="+"><Users className="w-12 h-12" strokeWidth={1.5} /></InfoBox>
        <InfoBox title="Medici specialiști" value={10} suffix="+"><Hospital className="w-12 h-12" strokeWidth={1.5} /></InfoBox>
        <InfoBox title="Ani de excelență" value={14}><Hourglass className="w-12 h-12" strokeWidth={1.5} /></InfoBox>
        <InfoBox title="Rată de succes sau intervenții fără durere" value={100} suffix="%"><ShieldCheck className="w-12 h-12" strokeWidth={1.5} /></InfoBox>
      </section>

      <section id="map" className="map py-16 px-4 bg-[#8900F2] mx-auto">
        <div className="p-16 rounded-2xl bg-white max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-6 justify-center">
            <div className="text-[#8900F2] items-center gap-2 flex">
              <MapPin width={20} height={20} />
              <a className="text-xl font-semibold" href="https://www.google.com/maps/place/Chi%C8%99in%C4%83u,+Moldova/@46.9998691,28.8581765,12z/data=!4m15!1m8!3m7!1s0x40c97c3628b769a1:0x37d1d6305749dd3c!2zQ2hpyJlpbsSDdSwgTW9sZG92YQ!3b1!8m2!3d47.0104529!4d28.8638102!16zL20vMGZuNzc!3m5!1s0x40c97c3628b769a1:0x37d1d6305749dd3c!8m2!3d47.0104529!4d28.8638102!16zL20vMGZuNzc?entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D">
                Chișinău, Moldova
              </a>
            </div>

            <hr className="border-[#8900F2] border-t-2" />

            <div className="text-[#8900F2] items-center gap-2 flex">
              <Phone width={20} height={20} />
              <a href="tel:+37369123456" className="text-xl font-semibold">
                +373 69 123 456
              </a>
            </div>

            <hr className="border-[#8900F2] border-t-2" />

            <div className="text-[#8900F2] items-center gap-2 flex">
              <Mail width={20} height={20} />
              <a href="" className="text-xl font-semibold">
                Dentistry@gmail.com
              </a>
            </div>
          </div>

          <div className="w-full h-[400px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2720.187091168775!2d28.86381021560313!3d47.01045287917586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c3628b769a1%3A0x37d1d6305749dd3c!2sChi%C8%99in%C4%83u%2C%20Moldova!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section id="consultatie" className="bg-[#8900F2] py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-white text-3xl font-bold mb-4">Programează o consultație</h2>
            <p className="text-white text-lg mb-8">
              Completează formularul de mai jos și echipa noastră te va contacta pentru a stabili o programare convenabilă.
            </p>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Nume" className="p-4 rounded-lg bg-white" />
              <input type="email" placeholder="Email" className="p-4 rounded-lg bg-white" />
              <input type="tel" placeholder="Telefon" className="p-4 rounded-lg bg-white" />
              <textarea placeholder="Mesaj" className="p-4 rounded-lg bg-white" rows={4}></textarea>
              <button type="submit" className="bg-white text-[#8900F2] font-semibold text-lg px-8 py-4 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer">
                Trimite
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}