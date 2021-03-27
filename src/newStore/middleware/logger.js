// SNA
const logger = extraParam => store => next => action => {
  console.log("Logging", extraParam);
  return next(action);
  // logger >> toast >> api
};

export default logger;

  // Currying
  // N => 1
