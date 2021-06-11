import React, {useEffect, useState} from "react";

function withLoading(WrappedComponent,api) {

    const WithLoadingComponent=(props)=>{
        const [isLoading,setLoading]=useState(true);
        const [data,setData]=useState([]);
        
        useEffect(()=>{

            fetch(api)
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                    setLoading(false);
                    setData(json)
                });
        },[]) ;

        function refetch() {

            setLoading(false);
            fetch(api)
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                    setLoading(false);
                    setData(json)
                });
        }

        if (isLoading){
            return <div>isLoading</div>
        } else{
            return <WrappedComponent refetch={refetch} data={data} {...props}  />
        }
    };

    return WithLoadingComponent;
}
export default withLoading