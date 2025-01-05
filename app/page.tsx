import client from '@/tina/__generated__/client'
import HomePage from '../components/HomePage'

export default async function Page() {
  const res = await client.queries.page({relativePath:'homepage.json'})
  const data = res.data
  const query = res.query
  const variables = res.variables
  return <HomePage data={data} query={query} variables={variables} />
}

