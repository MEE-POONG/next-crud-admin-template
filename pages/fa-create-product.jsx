import DefaultLayout from "@/components/default/layout";
import { useState } from "react";
import useAxios from "axios-hooks";
import Router, { useRouter } from "next/router";

export default function PloyCreateProduct() {
    const router = useRouter();

    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const [image, setImage] = useState();
    const [category, setCategory] = useState();

    const [{ data: createProductData, loading: createLoading, error: createError },
        executePost
    ] = useAxios(
        {
            url: '/api/products',
            method: 'POST'
        }, { manual: true })

    if (createLoading) {
        return <div>Loading....</div>
    }
    if (createError) {
        return <div>Error!!</div>
    }

    return (
        <DefaultLayout>
            {JSON.stringify(createProductData)}
            <form onSubmit={(event) => {
                event.preventDefault();

                executePost({
                    data: {
                        name,
                        price,
                        description,
                        image,
                        category,
                        updatedAt: new Date().toISOString(),
                    }
                }).then(() => {
                    setName("");
                    setPrice("");
                    setDescription("");
                    setImage("");
                    setCategory("");
                    router.push("/ploy-table")
                })

            }}>
                <div>
                    <label>ชื่อสินค้า</label>
                    <input type="text" onChange={(event) => setName(event.target.value)} value={name} />
                </div>
                <div>
                    <label>ราคา</label>
                    <input type="number" onChange={(event) => setPrice(event.target.value)} value={price} />
                </div>
                <div>
                    <label>รายละเอียด</label>
                    <input type="text" onChange={(event) => setDescription(event.target.value)} value={description} />
                </div>
                <div>
                    <label>รูป</label>
                    <input type="text" onChange={(event) => setImage(event.target.value)} value={image} />
                </div>
                <div>
                    <label>ประเภท</label>
                    <input type="text" onChange={(event) => setCategory(event.target.value)} value={category} />
                </div>

                <button type="submit">บันทึกสินค้า</button>
            </form>
        </DefaultLayout>
    )
}