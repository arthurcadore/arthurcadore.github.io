import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/publications')({
  component: Publications,
})

function Publications() {
  const conferencePapers = [
    {
      title: 'Change Detection based on Bayes Theorem for Intensity Wavelength-Resolution SAR Difference Images',
      author: 'GABRIEL LUIZ ESPINDOLA PEDRO',
      coauthors: 'DIMAS IRION ALVES, DIEGO DA SILVA DE MEDEIROS, PAULO RICARDO BRANCO DA SILVA ; JOÃO V. R. NEGRI, ARTHUR C. M. BARCELLA',
      published:
        'XLIII Simpósio Brasileiro de Telecomunicações e Processamento de Sinais, 2025, Natal, RN. Anais do XLIII Simpósio Brasileiro de Telecomunicações e Processamento de Sinais, 2025.',
      url: 'http://dx.doi.org/10.14209/sbrt.2025.1571156659',
      keywords: "CARABAS II change detection bivariate Gamma distribution background statistics",
      doi: '10.14209/sbrt.2025.1571156659'
    }
  ]

  const theses = [
    {
      title: 'Simulação de transmissor e receptor PTT-A3 para aplicações no sistema de satélites ARGOS-3',
      author: 'ARTHUR C. M. BARCELLA',
      keywords: 'Satellite Communication; PTT-A3; ARGOS-3; Digital modulation',
      advisors: 'Prof. Dr. Roberto Wanderley da Nóbrega',
      coadvisors: 'Prof. Dr. Richard Demo Souza',
      date: '20-10-2025',
      description: 'Monografia (Graduação) - Instituto Federal de Santa Catarina, Engenharia de Telecomunicações, São José, SC',
      uri: 'https://repositorio.ifsc.edu.br/items/6e3e9c1a-ec90-41f3-9b72-e15dfced8a31',
    }
  ]

  const renderPaperCard = (paper: typeof conferencePapers[0]) => {
    return (
      <div
        key={paper.url}
        className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow p-6 w-full transition-colors duration-300"
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{paper.title}</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-1"><strong>Author:</strong> {paper.author}</p>
        <p className="text-gray-600 dark:text-gray-400 mb-2"><strong>Coauthors:</strong> {paper.coauthors}</p>
        <p className="text-gray-600 dark:text-gray-400 mb-2"><strong>Keywords:</strong> {paper.keywords}</p>
        <p className="text-gray-600 dark:text-gray-400 mb-2"><strong>DOI: </strong>{paper.doi}</p>
        <p className="text-gray-600 dark:text-gray-400 mb-2"><strong>In: </strong>{paper.published}</p>
        <a
          href={paper.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-4 py-2 rounded hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
        >
          Access Paper
        </a>
      </div>
    )
  }

  const renderThesisCard = (thesis: typeof theses[0]) => {
    return (
      <div
        key={thesis.advisors}
        className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow p-6 w-full transition-colors duration-300"
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{thesis.title}</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-1"><strong>Author:</strong> {thesis.author}</p>
        <p className="text-gray-600 dark:text-gray-400 mb-2"><strong>Advisor:</strong> {thesis.advisors}</p>
        <p className="text-gray-600 dark:text-gray-400 mb-2"><strong>Co-advisors:</strong> {thesis.coadvisors}</p>
        <p className="text-gray-600 dark:text-gray-400 mb-2"><strong>Keywords:</strong> {thesis.keywords}</p>
        <p className="text-gray-600 dark:text-gray-400 mb-2"><strong>Date:</strong> {thesis.date}</p>
        <p className="text-gray-600 dark:text-gray-400 mb-4"><strong>Description:</strong> {thesis.description}</p>
        <a
          href={thesis.uri}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-4 py-2 rounded hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
        >
          Access Thesis
        </a>
      </div>
    )
  }

  return (
    <div className="w-full min-h-screen font-serif bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
      <header className="bg-gray-100 dark:bg-gray-900 shadow-md py-6 w-full transition-colors duration-300">
        <div className="container mx-auto px-8">
          <h1 className="text-4xl font-light text-gray-800 dark:text-white">Publications</h1>
        </div>
      </header>

      <main className="container mx-auto px-8 py-12 w-full">
        <section className="mb-16 w-full">
          <h2 className="text-3xl font-light text-gray-800 dark:text-gray-100 mb-6">Conference Papers</h2>
          <div className="flex flex-col gap-8 w-full">
            {conferencePapers.map(renderPaperCard)}
          </div>
        </section>

        <section className="mb-16 w-full">
          <h2 className="text-3xl font-light text-gray-800 dark:text-gray-100 mb-6">Thesis</h2>
          <div className="flex flex-col gap-8 w-full">
            {theses.map(renderThesisCard)}
          </div>
        </section>
      </main>
    </div>
  )
}
