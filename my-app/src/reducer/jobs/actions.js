export const setJobs = (jobs) => {
  // user: is an object that represents a user
  return {
    type: "SET_JOBS",
    payload: jobs,
  };
};
export const deleteIJobs = (jobs) => {
  // user: is an object that represents a user
  return {
    type: "DELETE_JOBS",
    payload: jobs,
  };
};
export const updetJobs = (data) => {
  // user: is an object that represents a user
  console.log(data);

  return {
    type: "UPDET_JOBS",
    payload: data,
  };
};
export const getcategory = (jobs) => {
  return {
    type: "SET_CATEGORY",
    payload: jobs,
  };
};
export const getheadline = (jobs) => {
  return {
    type: "SET_HEADLINEE",
    payload: jobs,
  };
};
