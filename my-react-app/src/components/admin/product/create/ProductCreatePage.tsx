import Breadcrumb from '../../Breadcrumb.tsx';
import {IProductCreate} from "./types.ts";
import * as Yup from "yup";
import {useFormik} from "formik";
import {ChangeEvent, lazy, useEffect, useState} from "react";

const InputGroup = lazy(() => import( "../../../../common/InputGroup"));

import InputImageBox from "../../../../common/InputImageBox";
import http_common from "../../../../http_common.ts";
import {ITokenResponse} from "../../../../pages/Authentication/SignIn/types.ts";
import {useNavigate} from "react-router-dom";
import {ICategoryItem} from "../../category/list/types.ts";
import SelectGroup from "../../../../common/SelectGroup";

const ProductCreatePage = () => {

    const [categories, setCategories] = useState<ICategoryItem[]>([]);

    useEffect(() => {
        http_common.get<ICategoryItem[]>("/api/categories").then(resp=> {
            setCategories(resp.data);
        });
    }, []);

    const navigate = useNavigate();

    const init : IProductCreate = {
        name: "",
        categoryId: null,
        images: [],
        description: ""
    };

    const validator = Yup.object().shape({
        name: Yup.string().required("Вкажіть назву"),
        description: Yup.string().required("Вкажіть опис"),
        categoryId: Yup.number()
            .required("Категорія є обов'язковой")
            .test("category-required", "Категорія є обов'язковой", function (value) {
                if(value !== -1) {
                    return true;
                } else {
                    return false;
                }
            }),
        image: Yup.array()
            .required("Фото є обов'язковим")
            .min(1, "Має бути мінімум 1 фотка"),
    });

    const onFormikSubmit = async (values: IProductCreate) => {
        try {
            await http_common.post<ITokenResponse>("/api/categories", values,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });
            navigate("../categories/list");
        } catch(ex) {
            console.log("Error", ex);
        }

    }

    const formik = useFormik({
        initialValues: init,
        onSubmit: onFormikSubmit,
        validationSchema: validator
    });



    const {touched, handleChange, handleBlur, errors, values, setFieldValue, handleSubmit} = formik;

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {

        const file =
            e.currentTarget.files && e.currentTarget.files[0];

        if (file) {
            setFieldValue("image", file);
        }
        e.target.value = "";
    }

    return (
        <>
            <Breadcrumb pageName="Додати товар" />

            <div className="mx-auto ">
                <div className="">
                    {/* <!-- Input Fields --> */}
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">

                        <div className="flex flex-col gap-5.5 p-6.5">
                            <form onSubmit={handleSubmit}>

                                <InputGroup
                                    field={"name"}
                                    label={"Назва"}
                                    type={"text"}
                                    placeholder={"Вкажіть назву"}
                                    value={values.name}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    touched={touched.name}
                                    error={errors.name} />

                                <InputGroup
                                    field={"description"}
                                    label={"Опис"}
                                    type={"text"}
                                    placeholder={"Вкажіть опис"}
                                    value={values.description}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    touched={touched.description}
                                    error={errors.description} />

                                <SelectGroup
                                    label="Категорія"
                                    field="categoryId"
                                    handleChange={handleChange}
                                    error={errors.categoryId}
                                    touched={touched.categoryId}
                                    handleBlur={handleBlur}
                                    options={categories}
                                    optionKey="id"
                                    optionLabel="name"
                                />

                                <button
                                    type="submit"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                >
                                    Додати
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCreatePage;