import Breadcrumb from '../../Breadcrumb.tsx';
import {ICategoryCreate} from "./types.ts";
import * as Yup from "yup";
import {useFormik} from "formik";
import InputGroup from "../../../../common/InputGroup";
const CategoryCreatePage = () => {
    const init : ICategoryCreate = {
        name: "",
        image: null,
        description: ""
    };

    const validator = Yup.object().shape({
        name: Yup.string().required("Вкажіть назву"),
        description: Yup.string().required("Вкажіть опис"),
        image: Yup.mixed().required("Фото є обов'язковим"),
    });

    const onFormikSubmit = async (values: ICategoryCreate) => {

    }

    const formik = useFormik({
        initialValues: init,
        onSubmit: onFormikSubmit,
        validationSchema: validator
    });

    const {touched, handleChange, handleBlur, errors, values, handleSubmit} = formik;

    return (
        <>
            <Breadcrumb pageName="Додати категорію" />

            <div className="mx-auto ">
                <div className="">
                    {/* <!-- Input Fields --> */}
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">

                        <div className="flex flex-col gap-5.5 p-6.5">
                            <form onSubmit={handleSubmit}>

                                <InputGroup
                                    field={"name"}
                                    label={"Назва категорії"}
                                    type={"text"}
                                    placeholder={"Вкажіть назву"}
                                    value={values.name}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    touched={touched.name}
                                    error={errors.name} />
                            {/*<div>*/}
                            {/*    <label className="mb-3 block text-black dark:text-white">*/}
                            {/*        Default Input*/}
                            {/*    </label>*/}
                            {/*    <input*/}
                            {/*        type="text"*/}
                            {/*        placeholder="Default Input"*/}
                            {/*        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"*/}
                            {/*    />*/}
                            {/*</div>*/}

                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Active Input
                                </label>
                                <input
                                    type="text"
                                    placeholder="Active Input"
                                    className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
                                />
                            </div>

                            <div>
                                <label className="mb-3 block font-medium text-black dark:text-white">
                                    Disabled label
                                </label>
                                <input
                                    type="text"
                                    placeholder="Disabled label"
                                    disabled
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary dark:disabled:bg-black"
                                />
                            </div>
                            </form>
                        </div>


                    </div>
                </div>


            </div>
        </>
    );
};

export default CategoryCreatePage;