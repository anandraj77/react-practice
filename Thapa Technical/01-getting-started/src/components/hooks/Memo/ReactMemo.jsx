import { useMemo, useState } from "react"
import { Counts } from "./MemoCount"

// This is useMemo example, use memo() for memo example
// export const ReactMemo = memo(()) <-- like this
export const ReactMemo = () => {
    const [count, setCount] = useState(0)

    const myBioData = useMemo(() => {
        return {
            name: "Anand",
            age: 30,
        }
    }, [])

    return (
        <>
            <div className="p-4, font-display tracking-wider flex flex-col justify-end items-center">
                <h1>{count}</h1>
                <button className="btn bg-cyan-500 py-1 px-3"
                    onClick={() => setCount((prev) => prev + 1)}
                >
                    Increment
                </button>
            </div>
            <Counts bioData={myBioData} />
        </>
    )
}

