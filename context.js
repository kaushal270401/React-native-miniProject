import React ,{  useEffect ,useReducer,useState } from "react";

export const UsersContext = React.createContext();


const initalState={
  loading:true,
  users:[]
}

const reducer=(state,action)=>{
  switch(action.type){
    case'FETCH_SUCCESS':
      return{
        loading:false,
        users:action.payload
      }
    default:
      return state
     
  }
}



const DataContextProvider = ({ children }) => {
  const movieUrl = "https://reqres.in/api/users/";
  // const [users, setUser] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);


  const[state,dispatch]= useReducer(reducer,initalState)


  useEffect(() => {
    getUser();
  }, []);


    const getUser = () => {
      fetch(movieUrl)
        .then((response) => response.json())
        .then((json) => {
          dispatch({type:'FETCH_SUCCESS', payload: json.data})
        })
        .catch((error) => {
          console.error(error);
        })
    };


  

  // const getUser = () => {
  //   fetch(movieUrl)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setUser(json.data);
  //     })
  //     .catch((error) => { 
  //       console.error(error);
  //     })
  //     .finally(setIsLoading(false));
  // };
 

  return (
    <UsersContext.Provider value={{users:state.users , isloading:state.loading}}>
      {children}
    </UsersContext.Provider>
  );
};
export default DataContextProvider;


