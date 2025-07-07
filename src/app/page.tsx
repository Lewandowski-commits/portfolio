import Links from '@/components/links'

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">Michał Lewandowski</h1>
      <p className="mt-2 text-lg sm:text-xl">Azure Data Engineer</p>
      <div className="mt-8 text-base sm:text-lg">
        <p>
          Hi, my name is Michał Lewandowski, an experienced Azure Data Engineer based in Poznań, Poland.
          I specialize in designing, developing, and optimizing robust data solutions on the Microsoft Azure platform.
          With a strong background in data warehousing, ETL/ELT processes, and cloud-native data services,
          I help organizations transform raw data into actionable insights.
        </p>

        <br />

      </div>

      <Links />
    </div>
  )
}
