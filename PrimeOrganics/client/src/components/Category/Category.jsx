import "./Category.scss";

import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Product from "../Products/Products"


const Category = () => {
    const { id } = useParams();

    const { data } = useFetch(
        `/api/Products?populate=*&[filters][categories][id]=${id}`
        );
    return <div className="category-main-content">
        <div className="layout">
            <div className="category-title">
                {data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}
            </div>
            <Product innerPage={true} products={data}/>
        </div>
    </div>;
};

export default Category;
