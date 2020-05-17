export const GET_HOME_LIST = 'GET_HOME_LIST';
export const UPFATE_HOME_LIST = 'UPFATE_HOME_LIST';
export const UPDATE_FAILURE_HOME_LIST = 'UPDATE_FAILURE_HOME_LIST';

/**
*@Description
*首页数据发起action
*/
export const fetchHomeList = () => {
  return {
    type: GET_HOME_LIST,
  };
};

/**
*@Description
*首页数据更新成功传回数据
*/
export const updateHomeList = (data) => {
  return {
    type: UPFATE_HOME_LIST,
    data,
  };
};

/**
*@Description
*首页数据更新失败
*/
export const updateFailureHomeist = () => {
  return {
    type: UPDATE_FAILURE_HOME_LIST,
  };
};
