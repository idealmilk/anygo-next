import Layout from '@/components/Layout'
import StoriesList from '@/components/Stories'

const StoriesPage = () => {
  return (
    <Layout>
      <div>
        <h1>Stories</h1>
        <StoriesList />
      </div>
    </Layout>
  )
}

export default StoriesPage