import Image from 'next/image'
import logoBbc from '@/images/bbc.svg'
import logoCbs from '@/images/cbs.svg'
import logoCnn from '@/images/cnn.svg'
import logoFastCompany from '@/images/fast-company.svg'
import logoForbes from '@/images/forbes.svg'
import logoHuffpost from '@/images/huffpost.svg'
import logoTechcrunch from '@/images/techcrunch.svg'
import logoWired from '@/images/wired.svg'

const ExtraLogos = () => {
  const logos = [
    { id: 2001, title: 'Forbes', logo: logoForbes },
    { id: 2002, title: 'TechCrunch', logo: logoTechcrunch },
    { id: 2003, title: 'Wired', logo: logoWired },
    { id: 2004, title: 'CNN', logo: logoCnn },
    { id: 2005, title: 'BBC', logo: logoBbc },
    { id: 2006, title: 'CBS', logo: logoCbs },
    { id: 2007, title: 'Fast Company', logo: logoFastCompany },
    { id: 2008, title: 'HuffPost', logo: logoHuffpost },
  ]
  return (
    <div className='relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6'>
      <p className='text-center text-sm font-semibold text-gray-900 lg:text-left'>
        As featured in
      </p>
      <ul className='mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start'>
        {logos.map(({ title, id, logo }) => (
          <li key={id}>
            <Image src={logo} alt={title} className='h-8' unoptimized />
          </li>
        ))}
      </ul>
    </div>
  )
}
export default ExtraLogos
