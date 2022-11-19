import useAxios from 'axios-hooks'
import DefaultLayout from "@/components/default/layout";

export default function PrimTable(){
    const [{ data, loading, error }, refetch] = useAxios(
        '/api/products'
      )
    
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error!</p>
    
        return(
            <DefaultLayout>
            <div>
      {/* <button onClick={refetch}>refetch</button>
      <pre>{JSON.stringify(data, null, 2)}</pre> */}


      <center>
        <table>
          <thead>
            <tr >
            <th>  รูปสินค้า </th>
            <th>  ชื่อสินค้า </th>
            <th>  ราคาสินค้า </th>
            <th>  รายละเอียด </th>
            <th>  ประเภท </th>
            </tr>

            </thead>

          {data.data.map((e, index) => (
            // <div key={index}>
          
              <tr >
                <td> <img src={e.image} width="60px" height="60px"></img> </td>
                <td> {e.name}  </td>
                <td> {e.price}  </td>
                <td> {e.description}  </td>
                <td> {e.category} </td>
              </tr>
         
          ))}
        </table>
      </center>

    </div>
            </DefaultLayout>
        )
}