import { createStore } from 'vuex'
import router from '@/router';
import axios from 'axios';
const url = "https://capstone-grct.onrender.com/"

export default createStore({
  state: {
    products: null,
    product: null,
    orders: null,
    cart: null,
    spinner: null,
    asc: true,
    msg: null,
    users: null || JSON.parse(localStorage.getItem("user")),
    user: null,
    userAuth: null,
    userLoggedIn: false,
    token: null || JSON.parse(localStorage.getItem("token"))
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },

    setProduct(state, product) {
      state.product = product;
    },
    
    setOrders(state, orders) {
      state.orders = orders;
    },

    setCart(state, cart) {
      state.cart = cart;
    },

    setSpinner(state, spinner) {
      state.spinner = spinner;
    },

    setMsg(state, msg) {
      state.msg = msg;
    },

    setUsers(state, users) {
      state.users = users;
    },

    setUser(state, user) {
      (state.user = user), 
        (state.userAuth = true),
        localStorage.setItem("user", JSON.stringify(user))
    },

    setUserLoggedIn(state, userLoggedIn) {
      state.userLoggedIn = userLoggedIn;
    },

    setToken(state, token) {
      state.token = token;
    },

    sortByPrice: (state) => {
      state.products.sort((a, b) => {
        return a.price - b.price;
      })

      if (!state.asc) {
        state.products.reverse();
      }

      state.asc = !state.asc
    },

    sortByName: (state) => {
      state.products.sort((a, b) => {
        if (a.productName < b.productName) {
          return -1;
        }

        if (a.productName > b.productName) {
          return 1;
        }
        return 0;
      });

      if (!state.asc) {
        state.products.reverse();
      }
      state.asc = !state.asc;
    }


  },
  actions: {
    async fetchProducts(context) {
      try {
        const {data} = await axios.get(`${url}products`);
        context.commit("setProducts", data.results);
      } catch (e) {
        context.commit(
          "setMsg", 
          "An Error Occurred while fetching products!"
        )
      }
    },

    async fetchProduct(context, payload) {
      try {
        const { data } = await axios.get(`${url}product/${payload.prodID}`,
        payload.data
        );
        context.commit("setProduct", data.results);
      } catch (e) {
        context.commit(
          "setMsg",
          "An Error Occurred while fetching the product!"
        );
      }
    },

    async addProduct(context, payload) {
      try {
        
      } catch (e) {
        
      }
    },
    
    async updateProduct(context, payload) {
      try {
        const res = await axios.patch(`${url}product/${payload.prodID}`, payload); 
        const { msg, err } = await res.data;
        
        if (err) {
          console.log("An Error Has Occurred", err);
          console.commit("setMSg", err)
        }

        if (msg) {
          context.dispatch("fetchProducts");
          context.commit("setProduct", msg);
          context.commit(
            "setMsg", 
            "Product was updated successfully!"
            );
        }
      } catch (e) {
        context.commit("setMsg", e)
      }
    },

    async deleteProduct(context, prodID) {
      try {
        const { res } = await axios.delete(`${url}product/${prodID}`);
        const { msg, err } = await res.data;
        if (err) {
          alert("An Error has Occurred, please try again later!");
        }

        if (message) {
          context.commit("setProduct", msg);
          context.commit("setSpinner", false);
        } else {
          context.commit(
            "setMsg", 
            "An error occurred."
            );
        } 

      } catch (e) {
        context.commit(
          "setMsg",
          "An Error Occurred while deleting a product!"
        );
      }
    }

    
  }
})
