import {
  ADD_COUNTER,
  ADD_CART
} from './mutationType.js'

export default {
  addCart(context,payload){
      //1、查找数组中是否有该商品
      let oldProduct = context.state.cartList.find(item => item.id === payload.id)
      //2、判断oldProduct
      if(oldProduct) {
        context.commit(ADD_COUNTER,oldProduct)
      } else {
          payload.count = 1
          context.commit(ADD_CART,payload)
      }
  }
}