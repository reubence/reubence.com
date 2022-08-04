import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import Link from 'next/link'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="mt-6 divide-y divide-gray-200 px-2 dark:divide-gray-700 sm:px-0">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            stuff I spent a lot of time on!
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            A collection of projects I've worked on.
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            You can also visit my{' '}
            <Link href="https://github.com/emsesc" passHref>
              <span className="company font-bold text-primary-500 hover:cursor-pointer">
                GitHub &rarr;
              </span>
            </Link>{' '}
            for a complete showcase of my code!
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                demo={d.demo}
                tags={d.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
