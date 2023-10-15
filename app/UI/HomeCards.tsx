import Image from "next/image"

interface HomeCardsProps {
  image: string
  alt: string
  title: string
  content: string
}

//TODO: Add hover effects and link


export default function HomeCards({ image, alt, title, content }: HomeCardsProps) {
  return (
    <div className="w-[300px] h-[400px] border border-cyberyellow shadow-yellowcard purple-gradient">
      <Image src={image} alt={alt} width={300} height={200} />
      <div className="flex flex-col h-full w-full gap-2 p-2">
        <h3 className="text-cyberyellow text-4xl font-heading font-semibold text-center">{title}</h3>
        <p className="text-cyberyellow text-lg font-main">{content}</p>
      </div>
    </div>
  )
}
