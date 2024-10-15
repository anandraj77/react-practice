import { useId } from "react"

export const UseId = () => {

    // This way, we'll need to create id again and again for multiple inputs

    // const userId = useId()
    // const emailId = useId()
    // const passwordId = useId()

    // return (
    //     <form>
    //         <div>
    //             <label htmlFor={userId}>Username:</label>
    //             <input id={userId} type="text" name="name" />
    //         </div>
    //         <div>
    //             <label htmlFor={emailId}>Email:</label>
    //             <input id={emailId} type="email" name="email" />
    //         </div>
    //         <div>
    //             <label htmlFor={passwordId}>Password:</label>
    //             <input id={passwordId} type="password" name="password" />
    //         </div>
    //         <button type="submit">Submit</button>
    //     </form>
    // )


    // Better approach

    const id = useId()

    return (
        <form>
            <div>
                <label htmlFor={id + "userId"}>Username:</label>
                <input id={id + "userId"} type="text" name="name" />
            </div>
            <div>
                <label htmlFor={id + "emailId"}>Email:</label>
                <input id={id + "emailId"} type="email" name="email" />
            </div>
            <div>
                <label htmlFor={id + "passwordId"}>Password:</label>
                <input id={id + "passwordId"} type="password" name="password" />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

