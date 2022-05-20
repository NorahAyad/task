
const initialState = {
    
    Jobs: [
      {
          theSide:'Flow ',
          headline: 'Administrative jobs in Flow Logistics Services in Dammam, Riyadh and Jeddah',
          details: "Administrative obs in Flow Logistics Services in Dammam, Riyadh and Jeddah ",
          img :'https://media-exp1.licdn.com/dms/image/C4E0BAQEzA0HWia9lJg/company-logo_200_200/0/1648453743104?e=1660176000&v=beta&t=fRMNzU6cTzICVbkOalUbo72AonMaWCHhXxoyv6NEBno',
          JobDescription: "Administrative obs in Flow Logistics Services in Dammam, Riyadh and Jeddah ",
          JobTitle:"Administrative",
          skills: "java1",
          category:"private1",
      },
      {
          theSide:'Lenovo ',
          headline: 'Administrative jobs in Flow Logistics Services in Dammam, Riyadh and Jeddah',
          details: "Administrative obs in Flow Logistics Services in Dammam, Riyadh and Jeddah ",
          img :'https://static.wixstatic.com/media/fb6722_a85721af590f4216a882101b9c377f9c~mv2.png/v1/fill/w_315,h_307,al_c,lg_1,q_85,enc_auto/c7782643-db04-4d8b-bd49-e18652a44633_edi.png',
          JobDescription: "Administrative obs in Flow Logistics Services in Dammam, Riyadh and Jeddah ",
          JobTitle:"Administrative",
          skills: "java2",
          category:"private3",
      },
      {
          theSide:'Rici ',
          headline: 'Administrative jobs in Flow Logistics Services in Dammam, Riyadh and Jeddah',
          JobDescription: "Administrative obs in Flow Logistics Services in Dammam, Riyadh and Jeddah ",
          JobTitle:"Administrative",
          skills: "java3",
          img :'https://media-exp1.licdn.com/dms/image/C4D0BAQG1Y3tETmegBA/company-logo_200_200/0/1600006526185?e=1660780800&v=beta&t=mTOd7ixuHVOABaZJ743nscVrxd6j0_d2FfbZ0r0rXCU',
          category:"private3",
      },
      
  ],
    Favorite: [],
    category:"",
    theSide:""

  };
  // action -> {type: "ABC", payload: 2}
  const JobsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
  
      case "SET_JOBS":
        return {
          Jobs: [...state.Jobs, payload],
          Favorite: state.Favorite,
         
        };
        case "SET_CATEGORY":
          return{
            category:payload,
            Jobs:state.Jobs,
             
          }
          case "SET_THE_SIDE":
            return{
             theSide:payload,
              Jobs:state.Jobs,
               
            }
      //"DELETE_ITEMS
      case "DELETE_JOBS":
        return {
          Jobs: state.Jobs.filter((element) => {
            return element.name !== payload.name;
          }),
         
        };
      // updlet
      case "UPDET_JOBS":
        return {
          Jobs: state.Jobs.map((element) => {
            if (element.name === payload.jobs.name) {
              console.log(payload.data);
              return payload.data;
            }
            return element;
          }),
  
        };
      //add to favorite
      case "SET_FAVORITE":
        // the payload is an object
        const FavoriteList = state.Favorite.slice();
        let x = false;
        for (let i = 0; i < FavoriteList.length; i++) {
          if (FavoriteList[i].name === payload.name) {
            x = true;
            alert("The items already exists");
            break;
          }
        }
        if (x === false) {
          FavoriteList.push(payload);
        }
  
        return {
          Items: state.Items,
          Favorite: FavoriteList,
        };
      
      default:
        return state;
    }
  };
  
  export default JobsReducer;
  