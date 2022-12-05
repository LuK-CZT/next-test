import React, {createContext, ReactNode, useState } from 'react'


type usernameType = {
    username: string,
    setUsername: React.Dispatch<React.SetStateAction<string>>
}

type Props = {
    children: ReactNode;
};


const usernameContext = createContext<usernameType>({} as usernameType);

const UsernameProvider = ({children} : Props) => {
    const [username, setUsername] = useState('')

    return (
        
        <usernameContext.Provider value={{ username, setUsername }}>
            {children}
        </usernameContext.Provider>
    )
}

export default UsernameProvider;

export const useUsername = () => React.useContext(usernameContext);