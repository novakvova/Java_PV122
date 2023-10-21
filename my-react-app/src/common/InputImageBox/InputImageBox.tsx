import {FC, InputHTMLAttributes} from "react";

interface InputImageBoxProps extends InputHTMLAttributes<HTMLInputElement> {
    field: string;
    image: File|null,
    touched?: boolean;
    error?: string;
}
const InputImageBox: FC<InputImageBoxProps> = ({
                                             field,
                                             image,
                                             error,
                                             touched,
                                             onChange
                                         }) => {

    const isError = error && touched;
    return (
        <>
            <div className="mb-6 items-center justify-center w-full">
                <label
                    htmlFor={field}
                    className={`flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ${
                        error && touched
                            ? "border-red-500 dark:border-red-400 bg-red-50"
                            : "dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    }`}
                >
                    {image ? (
                        <img
                            src={URL.createObjectURL(image)}
                            alt="Selected"
                            className="p-1 object-fill rounded-lg cursor-pointer"
                            style={{ maxWidth: "100%", maxHeight: "100%" }}
                        />
                    ) : (
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 16"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">Click to upload</span> or
                                drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                SVG, PNG, JPG
                            </p>
                        </div>
                    )}
                </label>
                <input
                    id={field}
                    type="file"
                    className="hidden"
                    name={field}
                    accept="image/*"
                    onChange={onChange}
                />
                {isError && (
                    <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                        {error}
                    </div>
                )}
            </div>
        </>
    )
}

export default InputImageBox;