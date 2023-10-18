import Image from "next/image";
import Link from "next/link";

interface HomeCardsProps {
  image: string;
  alt: string;
  title: string;
  content: string;
  linkHref: string;
}

export default function HomeCard({
  image,
  alt,
  title,
  content,
  linkHref,
}: HomeCardsProps) {
  return (
    <Link className="purple-gradient h-[400px] w-[300px] overflow-hidden border border-cyberyellow shadow-yellowcard hover:opacity-60" href={linkHref}>
      <Image src={image} alt={alt} width={300} height={200} />
      <div className="flex h-full w-full flex-col gap-2 p-2">
        <h3 className="text-center font-heading text-4xl font-semibold text-cyberyellow">
          {title}
        </h3>
        <p className="font-main text-lg text-cyberyellow">{content}</p>
      </div>
    </Link>
  );
}
