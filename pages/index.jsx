import DefaultLayout from '@/components/default/layout'
import useAxios from 'axios-hooks'

export default function App() {
  const [{ data, loading, error }, refetch] = useAxios(
    'http://localhost:3000/api/products'
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <DefaultLayout>
      <button onClick={refetch}>refetch</button>

      <center> Title products lists</center>
      <center>
        {data.data.map((e, index) => (
          <div key={index}>
            <img src={e.image} width="100px" height="100px" />
            <div> name: {e.name}</div>
            <div> price: {e.price}</div>
            <div> description: {e.description}</div>
            <div> category: {e.category}</div>
          </div>
        ))}
      </center>
    </DefaultLayout>
  )
}