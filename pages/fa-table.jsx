import DefaultLayout from "@/components/default/layout";
import useAxios from "axios-hooks";


export default function FaTable() {
    const [{ data, loading, error }, refetch] = useAxios(

        '/api/products/'
      )
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>
    return (
        <DefaultLayout>
            <div style={{}}>
                <button onClick={refetch}>refetch</button>

              
                <div>
                    <table style={{ width: "100%", backgroundColor: "#e7e9eb" }}>
                        <tr style={{ backgroundColor: " rgb(143 152 157 / 38%)", fontSize: "30px", }}>
                            <th>ชื่อสินค้า</th>
                            <th>ราคา</th>
                            <th>รายละเอีย</th>
                            <th>รูป</th>
                            <th>ประเภท</th>

                        </tr>
                        {data.data.map((e, index) => (
                            <tr key={index} style={{ textAlign: "center", color: "black" }}>

                                <td> {e.name}</td>
                                <td> {e.price}</td>
                                <td> {e.description} </td>
                                <td> <img src={e.image} style={{ width: "100px" }} /></td>
                                <td> {e.category}</td>

                            </tr>
                        ))}

                    </table>
                </div>
            </div>
        </DefaultLayout>
    )
}