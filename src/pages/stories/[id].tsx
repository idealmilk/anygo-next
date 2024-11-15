import { useRouter } from 'next/router'
import { Stories } from '@/data/stories'
import Layout from '@/components/Layout'

const StoryPage = () => {
  const router = useRouter()

  const story = Stories.find((story) => story.id.toString() === router.query.id)

  if (!story) {
    return (
      <Layout>
        <div className="flex min-h-screen flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-gray-800">Story Not Found</h1>
          <p className="mt-2 text-gray-600">The story you're looking for doesn't exist.</p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center">
          <img
            src={story.coverImage}
            alt={story.title}
            className="h-64 w-full max-w-3xl rounded-lg object-cover shadow-md"
          />
          <h1 className="mt-6 text-3xl font-bold text-gray-800">{story.title}</h1>
          <p className="mt-4 text-sm text-gray-600">
            Published on {story.datePublished.toLocaleDateString()} | Level: {story.level} | Language: {story.language}
          </p>
        </div>
        <div className="mt-8 text-lg leading-relaxed text-gray-700">
          <p>{story.body}</p>
        </div>
      </div>
    </Layout>
  )
}

export default StoryPage
