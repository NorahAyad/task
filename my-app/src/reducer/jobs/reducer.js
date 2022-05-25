
const initialState = {
    
    Jobs: [
      {
          id:0,
          theCompany:'Flow ',
          headline: 'Company  jobs in Flow ',
          details: "Administrative obs in Flow Logistics Services  ",
          img :'https://media-exp1.licdn.com/dms/image/C4E0BAQEzA0HWia9lJg/company-logo_200_200/0/1648453743104?e=1660176000&v=beta&t=fRMNzU6cTzICVbkOalUbo72AonMaWCHhXxoyv6NEBno',
          JobDescription: "Administrative obs in Flow Logistics Services in Dammam, Riyadh and Jeddah ",
          JobTitle:"Administrative",
          skills: "java1",
          category:"governmental",
      },
      {
        id:1,
          theCompany:'Lenovo ',
          headline: ' Company  jobs in Lenovo',
          details: "Administrative obs in Lenovo Logistics Services ",
          img :'https://static.wixstatic.com/media/fb6722_a85721af590f4216a882101b9c377f9c~mv2.png/v1/fill/w_315,h_307,al_c,lg_1,q_85,enc_auto/c7782643-db04-4d8b-bd49-e18652a44633_edi.png',
          JobDescription: "Administrative obs in Flow Logistics Services in Dammam, Riyadh and Jeddah ",
          JobTitle:"Administrative",
          skills: "java2",
          category:"governmental",
      },
      {
        id:2,
          theCompany:'DHL ',
          headline: ' Company DHL jobs   ',
          details: "Provides jobs for high school holders and above ",
          img :'https://www.ewdifh.com/uploads/7/5fa1d56ecf4cb.png',
          JobDescription: "DHL International Company (DHL) announced on its website (employment portal) the availability of jobs for high school holders and above in several cities in the Kingdom (Riyadh, Jeddah, Dammam, Dhahran), according to the details and the method of submission shown below. ",
          JobTitle:"Programmer and technical support",
          skills: "java ،php ,c# ",
          category:"Private company",
      },
      {
        id:3,
          theCompany:'Samaco Automotive  ',
          headline: 'Samaco Automotive Company ',
          details: "Samaco Automotive school holders and above  ",
          img :'https://www.ewdifh.com/uploads/1/logo/5b567c8dbea97.png',
          JobDescription: "Samaco Automotive Company announced on its website (employment portal) the availability of vacancies for high school holders and above in several cities in the Kingdom (Riyadh, Jeddah, Al-Khobar), according to the rest of the conditions and details shown below. ",
          JobTitle:"Technical Support",
          skills: "Networks",
          category:"Private company",
      },
      {
        id:3,
          theCompany:'Samaco Automotive  ',
          headline: 'Samaco Automotive Company ',
          details: "Samaco Automotive school holders and above  ",
          img :'https://www.ewdifh.com/uploads/11/602d36ac7c604.png',
          JobDescription: "Samaco Automotive Company announced on its website (employment portal) the availability of vacancies for high school holders and above in several cities in the Kingdom (Riyadh, Jeddah, Al-Khobar), according to the rest of the conditions and details shown below. ",
          JobTitle:"Technical Support",
          skills: "Networks",
          category:"Private company",
      },
  ],
    category:"",
    headline:""

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
          case "SET_HEADLINEE":
            return{
              headline:payload,
              Jobs:state.Jobs,
               
            }
      //"DELETE_ITEMS
      case "DELETE_JOBS":
        return {
          Jobs: state.Jobs.filter((element) => {
            return element.headline !== payload.headline;
          }),
         
        };
      // updlet
      case "UPDET_JOBS":
        console.log("mm")
        return {
          Jobs: state.Jobs.map((element) => {
            console.log("element.headline    "+element.headline)
            console.log("element.headline    "+payload.jobs.Headline)
            if (element.headline === payload.jobs.Headline) {
              console.log("yse")
              console.log(payload.data);
              return payload.data;
            }
            console.log("no")

            return element;
          }),
  
        };
    
      default:
        return state;
    }
  };
  
  export default JobsReducer;
  