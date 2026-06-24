import CarouselGalery from '../components/CarouselGalery'

export default function page() {
	return (
		<main className="min-h-screen">
			<section className="p-16 flex flex-col gap-8 max-w-6xl mx-auto">
				<h1 className="text-3xl text-[#8900F2] font-bold">Bun venit la Dentistry – Zâmbetul tău, priorititatea noastră!</h1>
				<div className="p-8 mt-4 bg-[#8900F2] rounded-2xl shadow-lg">
					<p className="mt-4 text-lg text-white">
						La Dentistry, credem că un zâmbet sănătos are puterea de a schimba vieți. De aceea, am creat mai mult decât o clinică dentară – am construit un spațiu primitor, modern și complet digitalizat, unde sănătatea ta orală este pe mâini sigure.
						Echipa noastră de medici specialiști combină experiența medicală cu tehnologia de ultimă generație pentru a-ți oferi tratamente personalizate, complet lipsite de durere. Indiferent dacă ai nevoie de o simplă igienizare, de estetică dentară sau de intervenții complexe de chirurgie și implantologie, la noi găsești soluții eficiente, adaptate nevoilor și stilului tău de viață.
						De ce să alegi Dentistry?
						Tehnologie de vârf: Diagnostic precis și tratamente rapide datorită aparaturii de ultimă oră.
						Confort absolut: Ne asigurăm că fiecare vizită este o experiență relaxantă și fără stres.
						Echipă dedicată: Medici pasionați, pregătiți să îți asculte dorințele și să îți ofere cele mai bune recomandări.
						Zâmbește cu încredere în fiecare zi! Te așteptăm la Dentistry pentru a începe împreună călătoria către un zâmbet perfect și sănătos.
					</p>
				</div>
			</section>
			<section className="p-16 flex flex-col gap-8 bg-[#8900F2] shadow-lg">
				<CarouselGalery />
			</section>
		</main>
	)
}
