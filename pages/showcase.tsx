import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import Link from 'next/link'
import HackerEffectText from '@/components/showcase/HackerEffectText'
import MagicalHoverEffect from '@/components/showcase/MagicalHoverEffect'
import Head from 'next/head'
import InfiniteScrollHead from '@/components/showcase/InfiniteScrollHead'
import SparkleButton from '@/components/showcase/SparkleButton'
import MorphingText from '@/components/showcase/MorphingText'
import AuroraText from '@/components/showcase/AuroraText'

export default function Showcase() {
  return (
    <>
      <PageSEO title={`Showcase - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="mt-6 divide-y divide-gray-200 px-2 dark:divide-gray-700 sm:px-0">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Showcase
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            A collection of some cool code snippets
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            PS : I'm still designing this page, please visit my{' '}
            <Link href="https://github.com/reubence" passHref>
              <span className="company font-bold text-primary-500 hover:cursor-pointer">
                GitHub
              </span>
            </Link>{' '}
            for better understanding of my work or skills.
          </p>
        </div>
        <div className="container py-12">
          <div className="flex flex-col gap-y-10">
            {/* {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))} */}
            <HackerEffectText />
            <MagicalHoverEffect />
            <InfiniteScrollHead />
            <SparkleButton />
            <AuroraText />
          </div>
        </div>
      </div>
    </>
  )
}
