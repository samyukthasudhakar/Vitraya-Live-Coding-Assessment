import { createContext, useContext, useState } from "react";

const dataSourceContext = createContext([])

function DataSourceContext({children}){

    const [dataSource, setDataSource] = useState([])
    
    return (
        <dataSourceContext.Provider value = {{dataSource, setDataSource}}>
            {children}
        </dataSourceContext.Provider>
    )
}

const useDataSourceContext = () => useContext(dataSourceContext)

export {DataSourceContext, useDataSourceContext}