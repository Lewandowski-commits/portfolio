import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
          As a Analytics/BI Engineer with a background in translation, I bring a unique set of skills and experience to the fields of data engineering and visualisation.

          My background in translation has given me a strong attention to detail and the ability to effectively communicate complex information to a wide range of audiences, and allowed me to become a liaison between technical and non-technical stakeholders, while also exhibiting strong technical skills that I pick up quickly.
        </p>
      </div>

      <Skills />

      <Experience />
    </div>
  )
}
