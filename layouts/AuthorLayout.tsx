import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import { ReactNode } from 'react'
import Link from '@/components/Link'
import { AuthorFrontMatter } from 'types/AuthorFrontMatter'
import Experience from '@/components/Experience'
import experienceData from '@/data/experienceData'
import Education from '@/components/Education'
import educationData from '@/data/educationData'

interface Props {
  children: ReactNode
  frontMatter: AuthorFrontMatter
}

export default function AuthorLayout({ children, frontMatter }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO title={`Now - ${name}`} description={`Happenning Now - ${name}`} />
      <div className="mt-10 px-2 sm:px-0">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            what am I doing, like,{' '}
            <Link href="https://nownownow.com/about">
              <span className="company font-bold text-blue-500 hover:cursor-pointer">now</span>
            </Link>
            ?{' '}
          </h1>
          <div className="text-center text-2xl font-bold ">
            Last updated <h3 className="inline-block text-violet-500">August 21st, 2022</h3>
          </div>
        </div>
        <div className="items-start space-y-2  xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 xl:sticky xl:top-24">
            <div className="group relative text-center">
              <div className="animate-tilt absolute -inset-px animate-pulse rounded-2xl bg-gradient-to-r from-primary-500 via-[#3B82F6] to-[#9333EA] blur-md transition duration-1000 group-hover:-inset-1 group-hover:animate-none group-hover:opacity-100 group-hover:duration-1000"></div>
              <div className="relative h-full w-full rounded-2xl bg-white px-6 py-6 dark:bg-background-color sm:px-12">
                <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                  🏔🐏
                </h1>
                <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
                  emily chen
                </h3>
                <div className="text-gray-500 dark:text-gray-400">aspiring escape room master</div>
                <div className="text-gray-500 dark:text-gray-400">
                  currently at <b>school</b>
                </div>{' '}
              </div>
            </div>
          </div>
          <div className="prose prose-lg max-w-none pt-8 pb-8 dark:prose-dark sm:prose-xl xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
