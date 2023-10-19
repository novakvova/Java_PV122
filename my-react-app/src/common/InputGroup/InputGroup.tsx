import {FC, InputHTMLAttributes} from "react";
import * as classNames from "classnames";

interface InputGroupProps extends InputHTMLAttributes<HTMLInputElement> {
    field: string;
    label: string;
    type?: "text"|"email"|"password"|"number";
    placeholder?: string;
    touched?: boolean;
    error?: string;
}
const InputGroup: FC<InputGroupProps> = ({
                                             field,
                                             label,
                                             type="text",
                                             placeholder,
                                             error,
                                             touched,
                                             onChange,
                                             onBlur,
                                             value
                                         }) => {

    const isError = error && touched;
    return (
        <>
            <div className="mb-4">
                <label className={classNames("mb-2.5 block font-medium",
                    {"text-black dark:text-white": !isError},
                    {"text-red-700 dark:dark:text-red-500": isError}
                )}
                       htmlFor={field}
                >
                    {label}
                </label>
                <div className="relative">
                    <input
                        id={field}
                        name={field}
                        type={type}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder={placeholder}
                        className={classNames("w-full rounded-lg border bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:bg-form-input",
                            {"border-stroke dark:border-form-strokedark ": !isError},
                            {"border-red-500 text-red-900 placeholder-red-700 dark:border-r-form-strokedark ": isError })}
                    />
                </div>
                {isError &&
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">{error}</p>
                }

            </div>
        </>
    )
}

export default InputGroup;