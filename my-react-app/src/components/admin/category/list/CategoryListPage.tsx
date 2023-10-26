import Breadcrumb from "../../Breadcrumb.tsx";
import {ICategoryItem} from "./types.ts";
import {useEffect, useState} from "react";
import http_common from "../../../../http_common.ts";
import Http_common from "../../../../http_common.ts";
import {RiEdit2Fill} from "react-icons/ri";
import {MdDeleteForever} from "react-icons/md";

const CategoryListPage = () => {

    const [list, setList] = useState<ICategoryItem[]>([]);

    useEffect(() => {
        http_common.get<ICategoryItem[]>("/api/categories")
            .then(resp => {
                setList(resp.data);
            })
    }, []);

    const result = list.map(item => (
        <div key={item.id} className="grid grid-cols-2 border-b border-stroke dark:border-strokedark sm:grid-cols-4">
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <div className="flex-shrink-0">
                    <img src={Http_common.getUri()+"/uploading/150_"+item.image} alt="Brand"/>
                </div>
                {/*<p className="hidden text-black dark:text-white sm:block">Google</p>*/}
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{item.name}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{item.description}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
                <a href="#" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    {<RiEdit2Fill/>}
                </a>
                <a href="#" className="ml-2 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                    {<MdDeleteForever/>}
                </a>
            </div>
        </div>
    ));

    return (
        <>
            <Breadcrumb pageName="Список категорій"/>

            <div
                className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">


                <div className="flex flex-col">
                    <div className="grid grid-cols-2 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
                        <div className="p-2.5 xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">
                                Фото
                            </h5>
                        </div>
                        <div className="p-2.5 text-center xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">
                                Назва
                            </h5>
                        </div>
                        <div className="p-2.5 text-center xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">
                                Опис
                            </h5>
                        </div>

                        <div className="p-2.5 text-center xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">
                                Операції
                            </h5>
                        </div>

                    </div>

                    {result}
                </div>
            </div>
        </>
    );
}

export default CategoryListPage;