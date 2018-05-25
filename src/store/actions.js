import * as types from './mutation-types'
// 用户注册
export const logInUser = function ({commit, state}, {index}) {
  alert(index)
  commit(types.SET_USER)
}
// 撤销注册
export const logOutUser = function ({commit}) {
  commit(types.DELETE_USER_GOODS)
  commit(types.DELETE_USER)
}
// 从数据库导入goods
export const importGoodsData = function ({commit}, goods) {
  for (const good of goods) {
    commit(types.SET_USER_GOOD, good)
  }
}
