import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { ComponentProps, useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'
import { PostFrontMatter } from 'types/PostFrontMatter'

const gradients = {
  '0': ' from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]',
  '1': ' from-[#D8B4FE] to-[#818CF8]',
  '2': ' to-[#6EE7B7] from-[#6EE7F9]',
  '3': ' from-pink-500 via-red-500 to-yellow-500',
  '4': ' from-yellow-100 via-yellow-300 to-yellow-500',
  '5': ' from-indigo-200 via-red-200 to-yellow-100',
  '6': ' from-green-200 via-green-400 to-purple-700',
  '7': ' from-red-200 to-red-600',
  '8': ' from-green-300 via-yellow-300 to-pink-300',
  '9': ' from-pink-400 to-pink-600',
  '10': ' from-sky-400 via-rose-400 to-lime-400',
}

interface Props {
  posts: PostFrontMatter[]
  title: string
  initialDisplayPosts?: PostFrontMatter[]
  pagination?: ComponentProps<typeof Pagination>
}

export default function BlogListLayout({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: Props) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="mt-6 divide-y px-2 sm:px-0">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <ul className="grid grid-cols-1 gap-10 py-8 dark:border-gray-700 md:grid-cols-3">
          {!filteredBlogPosts.length && 'No posts found.'}
          {displayPosts.map((frontMatter, index) => {
            const { slug, date, title, summary, tags, readTime } = frontMatter
            return (
              <Link
                href={`/blog/${slug}`}
                key={slug}
                className="group transform transition-all duration-500 hover:scale-[1.05] hover:duration-500"
              >
                <div
                  className={
                    `absolute -inset-[2.4px] rounded-2xl bg-gray-100 transition duration-1000 group-hover:bg-gradient-to-r group-hover:blur-md group-hover:duration-500 dark:bg-gray-800` +
                    gradients[index]
                  }
                ></div>
                <article className="relative h-full w-full rounded-xl">
                  <div className="flex h-full w-full flex-col justify-between rounded-xl bg-white p-5 dark:bg-background-color">
                    <div className="flex flex-col justify-between space-y-5 md:flex-row xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-xl font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                            {title}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <h3 className="pt-4">{summary}</h3>
                    <div className="flex flex-wrap pt-2">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                    <div className="mt-5 flex">
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
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
