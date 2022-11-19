import useAxios from 'axios-hooks'
import DefaultLayout from "@/components/default/layout";

export default function PloyTable() {
    const [{ data, loading, error }, refetch] = useAxios(
        '/api/products'
      )
    
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error!</p>

    return (
        <DefaultLayout>
           <div>
                <button onClick={refetch}>refetch</button>
                {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

                    <center> <h2>ระบบจัดการสินค้า</h2> </center>
                    <br/>
                    <center>
                    <table>
                    <thead>
                    <tr>
                            <th> ภาพประกอบ </th>
                            <th> ชื่อสินค้า</th>
                            <th> ราคา</th>
                            <th> คำอธิบาย</th>
                            <th> ประเภท</th>
                            <th> จัดการ</th>
                            </tr>
                    </thead>
                        {data.data.map((e, index) => (
                        // < key={index}>
                            <tr>
                            <td> <img src={e.image} width="100px" height="100px"/> </td>
                            <td> {e.name} </td>
                            <td> {e.price} </td>
                            <td> {e.description} </td>
                            <td> {e.category} </td>
                            <td> <button className="btn1">แก้ไข</button> 
                                <button className="btn1">ลบ</button> </td>
                            </tr>
                        
                        ))}
                        </table>
                </center>
            </div>
            
        </DefaultLayout>
    )

}