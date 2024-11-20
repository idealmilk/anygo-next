import Layout from '@/components/Layout'
import PageHeader from '@/components/PageHeader'
import StoriesList from '@/components/Stories'

const StoriesPage = () => {
  return (
    <Layout>
      <div>
        <PageHeader
          header="Explore Stories Tailored to You"
          subheader="Choose your level and favorite genre to dive into AI-crafted tales that make language learning fun and engaging."
        />
        <StoriesList />
      </div>
    </Layout>
  )
}

export default StoriesPage