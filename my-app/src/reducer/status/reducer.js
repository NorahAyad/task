
const initialState = {
    statusUsers: [{id:1 ,statusList:[]},{id:2 ,statusList:[]},{id:3 ,statusList:[]}],
  };
  
  
  const statusList = (state = initialState, { type, payload }) => {
    switch (type) {
      case "SET_STATUS":
        console.log("add");
        console.log(state.statusList);

        return {
            
            statusUsers: payload,
        };
       
      default:
        return state;
    }
  };
  
  export default statusList;
  

  
  