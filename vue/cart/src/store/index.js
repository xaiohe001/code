import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    total: 0,
    checked: false,
    goods: [
      {
        name: '小米手机',
        price: 999,
        count: 1,
        state: false
      },
      {
        name: '华为手机',
        price: 199,
        count: 1,
        state: false
      },
      {
        name: '苹果手机',
        price: 99,
        count: 1,
        state: false
      },
      {
        name: '魅族手机',
        price: 9,
        count: 1,
        state: false
      }
    ]
  },
  mutations: {
    checkAll(state) {
      state.checked=!state.checked
      if(state.checked) {
        state.goods.forEach(item=> {
          item.state=true
          state.total=0
          for(var i=0; i<state.goods.length; i++) {
            if(state.goods[i].state) {
              state.total+=state.goods[i].count*state.goods[i].price
            }
          }
        })
      }else {
        state.total=0
        state.goods.forEach(item=> {
          item.state=false
        })
      }
    },
    add(state,payload) {
      state.goods[payload].count+=1
    },
    minus(state,payload) {
      if(state.goods[payload].count==1) {
        state.goods[payload].count=1
      }else {
        state.goods[payload].count-=1
      }
    },
    changeState(state,payload) {
      state.goods[payload].state=!state.goods[payload].state
      state.checked=state.goods.every(item=> {
        return item.state==true
      })
    },
    changeTotal(state,payload) {
      var num;
      if(typeof payload ==='number') {
        num=payload
      }else {
        num=payload[0]
      }
      if(state.goods[num].state) {
        state.total+=state.goods[num].count*state.goods[num].price
        if(payload[1]=='plus') {
          state.total=0
          for(var i=0; i<state.goods.length; i++) {
            if(state.goods[i].state) {
              state.total+=state.goods[i].count*state.goods[i].price
            }
          }
        }else if(payload[1]=='minus') {
          if(state.total==0) {
            state.total=0
          }else {
            state.total=0
            for(var i=0; i<state.goods.length; i++) {
              if(state.goods[i].state) {
                state.total+=state.goods[i].count*state.goods[i].price
              }
            }
          }
        }
      }else if(state.goods[num].state==false) {
        if(state.total==0) {
          state.total=0
        }else {
          state.total-=state.goods[num].count*state.goods[num].price
        }
        
      }else if(state.goods[num].state==null) {
        state.total=0
        for(var i=0; i<state.goods.length; i++) {
          if(state.goods[i].state) {
            state.total+=state.goods[i].count*state.goods[i].price
          }
        }
      }


      // if(state.goods[num].state || state.goods[num].state&&payload[1]=='plus') {
      //   state.total+=state.goods[num].count*state.goods[num].price
      // }else if(state.goods[num].state==false || payload[1]=='minus') {
      //   state.total-=state.goods[num].count*state.goods[num].price
      // }else if(state.goods[num].state==null) {
      //   state.total=0
      //   for(var i=0; i<state.goods.length; i++) {
      //     if(state.goods[i].state) {
      //       state.total+=state.goods[i].count*state.goods[i].price
      //     }
      //   }
      // }
    },
    delete(state,payload) {
      state.goods.splice(payload,1,{
        name: '',
        price: 0,
        count: 0,
        state: null
      })
    }
  },
  actions: {
    state(context,payload) {
      context.commit('changeState',payload)
      context.commit('changeTotal',payload)
    },
    delete(context,payload) {
      context.commit('delete',payload)
      context.commit('changeTotal',payload)
    },
    addTotal(context,payload) {
      console.log(payload[0])
      context.commit('add',payload[0])
      var num=payload[0]
      if(context.state.goods[num].state) {
        context.commit('changeTotal',payload)
      }
    },
    minusTotal(context,payload) {
      console.log(payload)
      context.commit('minus',payload[0])
      var num=payload[0]
      if(context.state.goods[num].state) {
        context.commit('changeTotal',payload)
      }
    }
  },
  modules: {
  }
})
