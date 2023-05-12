import Image from './Image'
import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import Tag from '@/components/Tag'
import SocialIcon from '@/components/social-icons'

const PhotoCard = ({ title, url, slug }) => (
  <Link
    href={`/photos/${slug}`}
    key={slug}
    className="group relative w-full transform transition-all duration-500 hover:scale-[1.05] hover:duration-500 md:w-1/3"
  >
    <div
      className={`absolute -inset-0 rounded-xl bg-gradient-to-r blur-sm transition duration-1000 group-hover:-inset-1 group-hover:blur-md group-hover:duration-500`}
    ></div>
    <div className="relative inset-0 flex h-64 items-center justify-center overflow-hidden rounded-lg bg-cover bg-cover bg-center bg-center shadow-lg transition-opacity duration-300 ease-in-out">
      <Image src={url} layout="fill"></Image>
      <div className="absolute opacity-0 hover:opacity-100">
        <span className="company mb-2 flex items-center justify-center text-3xl font-bold text-white hover:cursor-pointer">
          {title}
        </span>
      </div>
    </div>
  </Link>
)

export default PhotoCard
