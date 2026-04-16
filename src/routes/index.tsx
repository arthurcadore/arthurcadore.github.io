import { createFileRoute } from '@tanstack/react-router'
import { Github, Mail, Linkedin, BookUser } from 'lucide-react'
import profilePic from '../assets/1-1.png'
import intelbrasLogo from '../assets/intelbras.png'
import flinLogo from '../assets/flin.png'
import itaLogo from '../assets/ita.png'
import ifscLogo from '../assets/ifsc.svg'


export const Route = createFileRoute('/')({
  component: Index,
})

export function Index() {
  return (
    <div className="overflow-x-hidden font-serif bg-white dark:bg-black transition-colors duration-300">
      <main>
        <section className="bg-gray-100 dark:bg-gray-900 pt-16 pb-8 transition-colors duration-300">
          <div className="max-w-5xl mx-auto px-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
              <div className="md:w-3/5 space-y-4 text-center md:text-left">
                <h1 className="text-4xl font-light text-gray-900 dark:text-white">
                  Arthur Cadore M. Barcella
                </h1>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  Telecommunications Engineer
                </h2>
                <div className="text-gray-600 dark:text-gray-400">
                  <p className="font-bold">IFSC, São José</p>
                  <p>São José, SC, Brazil - 88103-310</p>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 text-gray-900 dark:text-gray-100">
                  <Mail size={20} />
                  <a
                    href="mailto:arthurbarcella.ifsc@gmail.com"
                    className="hover:underline"
                  >
                    arthurbarcella.ifsc@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 text-gray-900 dark:text-gray-100">
                  <Mail size={20} />
                  <a
                    href="mailto:arthurbarcella.ita@gmail.com"
                    className="hover:underline"
                  >
                    arthurbarcella.ita@gmail.com
                  </a>
                </div>
                <p className="pt-8 text-gray-700 dark:text-gray-300 text-justify">
                  I am a Telecommunications Engineer who graduated from IFSC in 2025 and am currently pursuing a Master's degree at ITA (Aeronautics Institute of Technology). I work as a Product Development Analyst in the networking equipment department, focusing on management software for the configuration, maintenance, and monitoring of infrastructure devices such as switches and access points (APs).
                </p>
              </div>

              <div className="md:w-2/5 flex flex-col items-center gap-4">
                <img
                  src={profilePic}
                  alt="Arthur Cadore M. Barcella"
                  className="rounded-lg shadow-md w-full"
                />
                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href="https://www.linkedin.com/in/arthur-cadore/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-gray-200 dark:border-gray-700 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://github.com/arthurcadore/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-gray-200 dark:border-gray-700 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="http://lattes.cnpq.br/2107432747219920"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-gray-200 dark:border-gray-700 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <BookUser size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 dark:bg-gray-900 pb-8 transition-colors duration-300">
          <div className="max-w-5xl mx-auto px-8">
            <p className="text-gray-700 dark:text-gray-300 text-justify leading-relaxed">
              My areas of interest include distributed infrastructure with Kubernetes, service deployment through CI/CD pipelines, communication between cloud platforms and embedded devices, and automated testing of networking equipment using Ansible and Python. I am also drawn to theoretical topics such as RF analysis in communication systems and wireless coverage planning.
              <br /><br />
              I have hands-on experience in infrastructure analysis and troubleshooting across multiple network layers, including Layer 2 protocols (STP, LACP, LLDP, RRPP, DLDP, etc.), Layer 3 protocols (OSPF, BGP, etc.), and application-layer protocols (RADIUS, TACACS+, NetFlow, SNMP, Syslog, VoIP, DHCP, DNS, SMTP, etc.). I also have experience configuring and validating MPLS links and MPLS-based services such as L2 VPN, L3 VPN, and EVPN.
            </p>
          </div>
        </section>


        <div className="max-w-5xl mx-auto px-8 py-16">
          <section className="grid md:grid-cols-2 gap-x-12 gap-y-8 text-gray-700 dark:text-gray-300">
            {/* Headers */}
            <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-1">
              Academic Background
            </h2>
            <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-1 hidden md:block">
              Professional Background
            </h2>

            {/* Row 1 */}
            <div className="flex items-start gap-4">
              <img src={itaLogo} className="w-16 h-16 object-contain rounded-lg" />
              <div>
                <p className="font-semibold">
                  Master's Degree in Telecommunications (EEC-T), Aeronautics Institute of Technology (ITA)
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">2026 - Present</p>
              </div>
            </div>
            <div className="space-y-6 md:space-y-0">
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-6 md:hidden">
                Professional Background
              </h2>
              <div className="flex items-start gap-4">
                <img src={intelbrasLogo} className="w-16 h-16 object-contain rounded-lg" />
                <div>
                  <p className="font-semibold">
                    Product Development Analyst - Business Networks, Intelbras
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">2024 - Present</p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex items-start gap-4">
              <img src={ifscLogo} className="w-16 h-16 object-contain rounded-lg" />
              <div>
                <p className="font-semibold">
                  Bachelor's Degree in Telecommunications Engineering, Federal Institute of Santa Catarina (IFSC)
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">2020 - 2025</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img src={intelbrasLogo} className="w-16 h-16 object-contain rounded-lg" />
              <div>
                <p className="font-semibold">
                  Network Training Analyst - Technical Support, Intelbras
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">2021 - 2024</p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex items-start gap-4">
              <img src={ifscLogo} className="w-16 h-16 object-contain rounded-lg" />
              <div>
                <p className="font-semibold">
                  Technical Degree in Telecommunications – Federal Institute of Santa Catarina (IFSC)
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">2017 - 2020</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img src={intelbrasLogo} className="w-16 h-16 object-contain rounded-lg" />
              <div>
                <p className="font-semibold">
                  Network and Infrastructure Analyst - Technical Support, Intelbras
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">2020 - 2021</p>
              </div>
            </div>

            {/* Row 4 */}
            <div className="hidden md:block"></div>
            <div className="flex items-start gap-4">
              <img src={flinLogo} className="w-16 h-16 object-contain rounded-lg" />
              <div>
                <p className="font-semibold">
                  Passive Fiber Optic Projects Intern, Flin (ISP)
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">2017 - 2020</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}