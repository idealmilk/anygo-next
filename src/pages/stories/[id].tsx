import { useRouter } from 'next/router'

import Layout from '@/components/Layout'
 
const StoryPage = () => {
  const router = useRouter()

  const { id } = router.query

  return (
    <Layout>
      <h1>
        Story ID: {id}
      </h1>
    </Layout>
  )
}

export default StoryPage