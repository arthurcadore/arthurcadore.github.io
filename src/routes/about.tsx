import { createFileRoute } from '@tanstack/react-router'
import profilePic from '../assets/1-1.png'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="min-h-screen font-serif bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <main className="max-w-4xl mx-auto px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          <div className="md:w-1/3 flex flex-col items-center gap-6">
            <img
              src={profilePic}
              alt="Arthur Cadore M. Barcella"
              className="rounded-lg shadow-xl w-full max-w-sm mx-auto"
            />
            <div className="w-full border-t border-gray-200 dark:border-gray-800 my-2"></div>
            <div className="prose dark:prose-invert max-w-none text-justify space-y-4 pt-2">
              <img
                src="//ipv6.he.net/certification/create_badge.php?pass_name=ArthurBarcella&badge=2"
                alt="IPv6 Certification Badge"
                className="rounded-lg shadow-md w-full max-w-sm mx-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="md:w-2/3 space-y-6">
            <h1 className="text-4xl font-light border-b border-gray-200 dark:border-gray-800 pb-4">
              About Me
            </h1>

            <div className="prose dark:prose-invert max-w-none text-justify space-y-4">
              <p>
                My professional journey began at the Federal Institute of Santa Catarina (IFSC), where I developed a solid foundation in telecommunications. Currently, I am expanding my knowledge through a Master's degree at the Aeronautics Institute of Technology (ITA), focusing on advanced communication systems.
              </p>

              <p>
                In my current role at Intelbras, I bridge the gap between complex network hardware and user-friendly management software. I focus on developing tools for the configuration, maintenance, and monitoring of high-performance networking equipment.
              </p>

              <p>
                I thrive on solving technical challenges related to distributed infrastructure, CI/CD pipelines, and network automation. My experience spans multiple layers of the networking stack, from physical layer RF analysis to high-level application protocols and cloud integrations.
              </p>
            </div>
            <section className="mt-12">
              <h2 className="text-2xl font-light mb-6">Certifications & Courses</h2>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800 p-8 space-y-6">
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="border-b border-gray-100 dark:border-gray-800 pb-4">
                    <span className="font-semibold text-blue-600 dark:text-blue-400 inline-block min-w-[200px]">NDG Linux Essentials</span>
                    <span>CISCO (By NIC.br), 2023</span>
                  </li>
                  <li className="border-b border-gray-100 dark:border-gray-800 pb-4">
                    <span className="font-semibold text-blue-600 dark:text-blue-400 inline-block min-w-[200px]">NDG Linux Unhatched</span>
                    <span>CISCO (By NIC.br), 2023</span>
                  </li>
                  <li className="border-b border-gray-100 dark:border-gray-800 pb-4">
                    <span className="font-semibold text-blue-600 dark:text-blue-400 inline-block min-w-[200px]">HE IPv6 Verified</span>
                    <span>Hurricane Electric, 2022</span>
                  </li>
                  <li className="border-b border-gray-100 dark:border-gray-800 pb-4">
                    <span className="font-semibold text-blue-600 dark:text-blue-400 inline-block min-w-[200px]">IPv6 NIC.br</span>
                    <span>CETIC.br, 2022</span>
                  </li>
                  <li className="border-b border-gray-100 dark:border-gray-800 pb-4">
                    <span className="font-semibold text-blue-600 dark:text-blue-400 inline-block min-w-[200px]">CCNAv7: Bridging</span>
                    <span>CISCO (By NIC.br), 2021</span>
                  </li>
                  <li className="border-b border-gray-100 dark:border-gray-800 pb-4">
                    <span className="font-semibold text-blue-600 dark:text-blue-400 inline-block min-w-[200px]">Cybersecurity Essentials</span>
                    <span>CISCO (By NIC.br), 2021</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
