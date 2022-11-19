import DefaultLayout from '@/components/default/layout'
import React from 'react'
import useAxios from 'axios-hooks'

export default function BenzTable() {
    const [{ data, loading, error }, refetch] = useAxios(
        '/api/products/'
    )

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p> 

    return (
        <DefaultLayout>
            <div>
                <button onClick={refetch}>refetch</button>
                <table>
                    <thead>
                        <tr>
                            <th>ชื่อสินค้า</th>
                            <th>ราคา</th>
                            <th>รายละเอียด</th>
                            <th>ประเภท</th>
                            <th>รูปภาพ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.data.map((e, index) => (
                            <tr key={index}>
                                <td>{e.name}</td>
                                <td>{e.price}</td>
                                <td>{e.description}</td>
                                <td>{e.category}</td>
                                <td><img src={e.image}/></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </DefaultLayout>
    )
}
