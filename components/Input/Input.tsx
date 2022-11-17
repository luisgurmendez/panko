import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    containerClassName?: string;
    leading?: React.ReactNode;
    animateOnFocus?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ containerClassName, leading, animateOnFocus = false, ...rest }, ref) => {

    return (
        <div className={`min-w-[180px] relative mx-auto text-gray-600 lg:block ${containerClassName}`}>
            <div className={`w-full border-2 border-gray-300 bg-white h-10 pl-2 pr-2 rounded-lg text-sm flex flex-row items-center ${animateOnFocus ? 'w-0 min-w-[180px] focus-within:w-[320px] transition-[width] duration-300' : ''}`}>
                {leading && leading}
                <input
                    {...rest}
                    ref={ref}
                    className="w-full h-full pl-1 text-sm focus:outline-none flex flex-row items-center"
                />
            </div>
        </div>
    )
})

interface TextAreaProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    containerClassName?: string;
    rows?: number;
}

export const TextArea = ({ containerClassName, ...rest }: TextAreaProps) => {

    return (
        <div className={`min-w-[180px] relative mx-auto text-gray-600 lg:block ${containerClassName}`}>
            <div className="w-full border-2 border-gray-300 bg-white pl-2 pr-2 rounded-lg text-sm flex flex-row items-center">
                <textarea
                    {...rest}
                    className="w-full h-full pl-1 pt-2 text-sm focus:outline-none flex flex-row items-center"
                ></textarea>
            </div>
        </div>
    )
}

