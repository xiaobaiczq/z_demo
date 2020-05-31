import { Model } from 'dva';



const OrderModel: Model = {
  namespace: 'order',
  state: {
    name: 'hello',
  },
  effects: {

  },
  reducers: {
    save(state, action:any) {
      return {
        ...state,
        ...action.payload,
      };
    },

  },
};
export default OrderModel;