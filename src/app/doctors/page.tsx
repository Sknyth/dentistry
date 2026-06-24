import DoctorS1 from '../components/DoctorS1'
import DoctorS2 from '../components/DoctorS2'

export default function page() {
  return (
    <main className="min-h-screen px-4 py-12 md:p-20 flex flex-col gap-8">
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-2xl md:text-3xl text-[#8900F2] font-bold">Echipa</h1>
      </div>

      <section className="gap-8 flex flex-col max-w-6xl mx-auto bg-[#8900F2] p-6 md:p-20 rounded-2xl shadow-lg w-full">
        <DoctorS1 name="Dr. Eliza Reed" desc="Medic Dentist – Estetică și Protetică Dentară" image="/doctor1.png" />
        <DoctorS2 name="Dr. Adrian Dumitrescu" desc="Medic Primar Chirurgie Orală și Implantologie" image="/doctor2.png" />
        <DoctorS1 name="Dr. Elena Radu" desc="Medic Dentist – Ortodonție și Pediatrică" image="/doctor4.png" />
        <DoctorS2 name="Dr. Mihaela Costin" desc="Medic Dentist – Specializată în Profilaxie și Estetică Dentară" image="/doctor5.png" />
      </section>
    </main>
  )
}