export const setStatusList = (statusList) => {
    console.log(statusList);
    return {
      type: "SET_STATUS",
      payload: statusList,
    };
  };