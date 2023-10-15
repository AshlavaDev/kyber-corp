import HomeCards from '@/app/UI/HomeCards'

const services = [
  {
    image: '',
    alt: '',
    title: 'Cleaning',
    content: 'Here at Kyber Corporation, we help you clean up the messes in your life. We specialize in cleaning for other corporations and for VIPs.',
  },
  {
    image: '',
    alt: '',
    title: 'Security',
    content: 'Our elite clientele are afforded all the skills and resources of Kyber Corporation. Join the many who have chosen us to protect their interests against whatever the world and the bad people in it throw at you. '
  },
  {
    image: '',
    alt: '',
    title: 'PR',
    content: 'Engage our wonderful team of PR reps to market your company or yourselves. Make sure that the public knows just how great you really are.'
  }
]

export default function ServicesHome() {
  return (
    <section className='min-h-screen bg-deepblue flex flex-col gap-16 items-center justify-center'>
      <h2 className='text-cyberyellow text-5xl font-heading font-semibold'>What we can offer you!</h2>
      <div className='flex gap-20'>
        {services.map((service, index) => (
          <HomeCards key={index} image={service.image} alt={service.alt} title={service.title} content={service.content} />
        ))}
      </div>
    </section>
  )
}
