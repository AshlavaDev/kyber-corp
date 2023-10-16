import Image from "next/image";

interface HomeCardsProps {
  image: string;
  alt: string;
  title: string;
  content: string;
  linkHref?: string;
}

//TODO: Add links

export default function HomeCard({
  image,
  alt,
  title,
  content,
}: HomeCardsProps) {
  return (
    <div className="purple-gradient hover:opacity-60 h-[400px] w-[300px] border border-cyberyellow shadow-yellowcard overflow-hidden">
      <Image src={image} alt={alt} width={300} height={200} />
      <div className="flex h-full w-full flex-col gap-2 p-2">
        <h3 className="text-center font-heading text-4xl font-semibold text-cyberyellow">
          {title}
        </h3>
        <p className="font-main text-lg text-cyberyellow">{content}</p>
      </div>
    </div>
  );
}
