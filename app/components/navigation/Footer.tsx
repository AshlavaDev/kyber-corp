import CorpLogo from '@/app/UI/CorpLogo'
import { LuCopyright } from 'react-icons/lu'

//TODO: Mobile version

export default function Footer() {
  return (
    <footer className="bg-cyberyellow flex flex-col items-center justify-center gap-8 py-10 w-full text-deepblue">
      <h4 className="font-heading text-5xl font-semibold flex items-center">
        <CorpLogo />
        KC
      </h4>
      <p className="font-main text-4xl flex items-center"><LuCopyright /> 2023 Kyber Corporation </p>
      <p className='text-2xl'>Portfolio Project of <a href='https://www.ashleymorganwbdv.com/' target='_blank' className='text-[#62004b]'>Ashley Morgan</a></p>
    </footer>
  )
}
