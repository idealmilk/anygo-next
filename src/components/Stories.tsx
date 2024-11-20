import Link from 'next/link'
import { Stories } from '@/data/stories'

const StoriesList = () => {
  return (
    <div className="mx-auto mt-20 grid w-10/12 max-w-screen-xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Stories.map((story, index) => (
        <Link href={`/stories/${story.id.toString()}`} key={index}>
          <div
            className="flex flex-col items-center rounded-lg bg-white p-4 shadow-md"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={story.coverImage}
              alt={story.title}
              className="h-40 w-full rounded-t-md object-cover"
            />
            <div className="mt-4 text-center">
              <h2 className="text-lg font-bold text-gray-800">{story.title}</h2>
              <p className="mt-2 text-sm text-gray-600">{story.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default StoriesList
