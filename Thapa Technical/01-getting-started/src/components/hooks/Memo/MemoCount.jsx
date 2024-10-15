import { memo, useRef } from "react";


// eslint-disable-next-line react/display-name
export const Counts = memo(() => {
    const renderedCount = useRef(0)
    console.log(renderedCount.current);

    return (
        <div className="mt-3 font-display text-center">
            <p className="">
                Nothing changed here but Ive now rendered:
                <span className="text-red-600">{renderedCount.current++} times</span>
            </p>
        </div>
    )
})

// or use this
// export default memo(Counts);