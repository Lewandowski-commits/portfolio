import Links from '@/components/links'

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">Michał Lewandowski</h1>
      <p className="mt-2 text-lg sm:text-xl">Data Engineer</p>
      <div className="mt-8 text-base sm:text-lg">
        <p>Hi, my name is Michał Lewandowski, Data Engineer based in Poznań, Poland.</p>

        <br />

      </div>

      <Links />
    </div>
  )
}
