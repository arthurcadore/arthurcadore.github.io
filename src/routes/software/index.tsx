import { createFileRoute } from '@tanstack/react-router'
import argos_main from '../../assets/argos-main.jpeg'
import radar_utils from '../../assets/radarutils.png'
export const Route = createFileRoute('/software/')({
  component: Software,
})

function Software() {
  const redes = [
    {
      title: 'ARGOS-3 Simulator',
      imageUrl: argos_main,
      path: 'https://arthurcadore.github.io/argos3',
    },
    {
      title: 'Radar Utils Library',
      imageUrl: radar_utils,
      path: 'https://arthurcadore.github.io/radarutils',
    },
  ]

  const renderCard = (item: {
    title: string
    imageUrl: string
    path: string
  }) => (
    <a
      href={item.path}
      target="_blank"
      rel="noopener noreferrer"
      key={item.title}
      className="block relative rounded-lg overflow-hidden h-64 bg-gray-900 group hover:shadow-xl transition-shadow duration-300"
    >
      <div className="m-[1px] h-56 overflow-hidden rounded-md">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-900 bg-opacity-90">
        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
      </div>
    </a>
  )


  return (
    <div className="font-serif bg-gray-100 dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <div className="bg-gray-100 dark:bg-gray-900 shadow-md transition-colors duration-300">
        <div className="container mx-auto px-8 py-6">
          <h1 className="text-4xl font-light text-gray-800 dark:text-white">Software</h1>
        </div>
      </div>
      <div className="container mx-auto px-8 py-12">
        <main>
          <section className="mb-16">
            <h2 className="text-3xl font-light text-gray-900 dark:text-gray-100 mb-8">
              My Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {redes.map(renderCard)}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
} 