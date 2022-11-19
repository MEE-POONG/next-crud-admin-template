import DefaultLayout from "@/components/default/layout";
import useAxios from "axios-hooks";


export default function MindTable() {
    const [{ data, loading, error }, refetch] = useAxios(
        '/api/products'
      )
    
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error!</p>
    return (
        
        <DefaultLayout>

<div>

<section class="navbar"> <div class="logo">
  <h1>IT product</h1>
</div>
  <ul>
    <li> <a href="/">products</a></li>
  </ul></section>
<div class="outer-wrapper">

  <h1>Title products lists</h1>
  <div class="table-wrapper">


    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>price</th>
          <th>description</th>
          <th>category</th>
          <th>image</th>
          <th>manage</th>
        </tr>

        {data.data.map((e) => (

          <tr>
            <td>{e.name}</td>
            <td>{e.price}</td>
            <td>{e.description}</td>
            <td>{e.category}</td>
            <td><img src={e.image} width="100px" height="100px"></img></td>
            <td><button>แก้ไข</button> <button>ลบ</button></td>
          </tr>

        ))}
      </thead>

    </table>
  </div>
</div>
</div>


        </DefaultLayout>

        
    )
}