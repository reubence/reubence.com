import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostFrontMatter } from 'types/PostFrontMatter'
import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 3

export const getStaticProps: GetStaticProps<{ posts: PostFrontMatter[] }> = async () => {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

const gradients = {
  '0': ' from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]',
  '1': ' from-[#D8B4FE] to-[#818CF8]',
  '2': ' to-[#6EE7B7] from-[#6EE7F9]',
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide divide-gray-200 px-2 dark:divide-gray-700 sm:px-0">
        <div className="grid grid-cols-1 space-y-10 py-4 sm:space-y-5 sm:py-14 xl:grid-cols-5">
          <div className="col-span-3 justify-center space-y-5 align-middle">
            <span className="relative inset-y-4 ml-24 inline-block px-1 before:absolute before:-inset-1 before:block before:-skew-y-6 before:rounded-lg before:bg-primary-600 before:bg-opacity-20 sm:inset-y-7 sm:ml-40">
              <span className="relative inline-block -rotate-6 text-primary-500">
                <Link
                  href="https://twitter.com/reubence_"
                  className="font-arrow2 text-sm font-bold text-primary-500 transition hover:underline hover:underline-offset-8 sm:text-xl"
                >
                  @reubence
                </Link>
              </span>
            </span>
            <h1 className="pt-2 text-4xl font-bold leading-9 tracking-tight text-background-color dark:text-gray-100 sm:text-5xl sm:leading-10 md:text-6xl md:leading-snug">
              Reuben
              <span className="relative inset-y-8 ml-2 inline-block -rotate-12 font-arrow text-primary-500 sm:inset-y-14">
                ^
              </span>
              Rapose
            </h1>
            <p className="text-black dark:text-white sm:pr-6 sm:text-lg sm:leading-8">
              Welcome to my Digital Garden – I am a Data Scientist by training and Full-Stack
              Developer by passion who loves building for the web & mobile. Also sometimes for the
              toaster.{' '}
              {/* In my
              free time, I like developing{' '}
              <Link
                href="/projects"
                className="text-black underline decoration-primary-500 underline-offset-4 hover:cursor-pointer hover:text-primary-500 dark:text-white hover:dark:text-primary-500"
              >
                <a>side projects</a>
              </Link>{' '}
              and{' '}
              <Link href="/blog">
                <a className="text-black underline decoration-primary-500 underline-offset-4 hover:cursor-pointer hover:text-primary-500 dark:text-white hover:dark:text-primary-500">
                  blogging
                </a>
              </Link>{' '}
              about my journey as an Entrepreneur. */}
              Have a good read! <span className="waving-hand text-2xl">👋🏻</span>
            </p>
            <p className="leading-7 text-gray-500 underline underline-offset-4 sm:pr-6 sm:text-lg">
              <Link
                href="/about"
                className="hover:cursor-pointer hover:text-primary-500 dark:text-gray-500 hover:dark:text-primary-500"
              >
                <a>Read the rest of my bio &rarr;</a>
              </Link>
            </p>
          </div>
          {siteMetadata.newsletter.provider !== '' && (
            <div className="col-span-2 flex xl:items-center xl:justify-center xl:pl-6">
              <NewsletterForm />
            </div>
          )}
        </div>

        <h1 className="my-4 mt-16 pb-2 text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          Recent Posts{' '}
        </h1>
        <ul className="flex flex-col gap-10 dark:border-gray-700 md:flex-row">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter, index) => {
            const { slug, date, title, summary, tags, readTime } = frontMatter
            return (
              <Link
                href={`/blog/${slug}`}
                key={slug}
                className="group relative w-full transform transition-all duration-500 hover:scale-[1.05] hover:duration-500 md:w-1/3"
              >
                <div
                  className={
                    `absolute -inset-0 rounded-xl bg-gradient-to-r blur-sm transition duration-1000 group-hover:-inset-1 group-hover:blur-md group-hover:duration-500` +
                    gradients[index]
                  }
                ></div>
                <article className="relative h-full rounded-xl bg-background-color">
                  <div className="flex h-full flex-col justify-between rounded-xl bg-white p-5 dark:bg-background-color">
                    <div className="flex flex-col justify-between space-y-5 md:flex-row xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-xl font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                            {title}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="mt-10 flex">
                      <div className="capsize flex items-center text-gray-800 dark:text-gray-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          ></path>
                        </svg>
                        {readTime}
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            )
          })}
        </ul>
        {posts.length > MAX_DISPLAY && (
          <div className="mt-6 flex justify-end text-base font-medium leading-6">
            <Link
              href="/blog"
              className="text-background-color hover:text-primary-600 dark:text-white dark:hover:text-primary-400"
              aria-label="all posts"
            >
              All Posts &rarr;
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
