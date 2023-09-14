import { createStore } from 'vuex'
import router from '@/router';
import axios from 'axios';
import { useCookies } from 'vue3-cookies';
const { cookies } = useCookies();
import Swal from 'sweetalert2';

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
    users: null,
    user: null || JSON.parse(localStorage.getItem("user")),
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

    setSelectedProduct(state, product) {
      state.selectedProduct = product;
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
        let products = await (await fetch(url+ "products")).json()
        if (products) {
          context.commit("setProducts", products);
        } else {
          alert("error")
        }
        // const {data} = await axios.get(`${url}products`);
        
      } 
      catch (e) {
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
        const { res } = await axios.post(`${url}product, payload`);
        const { msg, err } = await res.data;
        
        console.log(msg, err);

        if (msg) {
          context.commit("setProduct, msg");
          context.commit("setSpinner", false);
        } else {
          context.commit("setMsg", err)
        }
      } catch (e) {
        context.commit(
          "setMsg", 
          "An Error Occurred while adding a product!"
          );
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
    },

    async fetchUsers(context) {
      try {
        const { data } = await axios.get(`${url}users`);
        context.commit("setUsers", data.results);
      } catch (e) {
        context.commit(
          "setMsg",
          "An Error Occurred While Fetching Users!"
          )
      }
    },

    async fetchUser(context, payload) {
      try {
        const { data } = await axios.get(`${url}user/${payload.userID}`, payload.data);
        context.commit("setUser", data.result);
      } catch (e) {
        context.commit(
          "setMsg",
          "An Error Occurred While Fetching A Single User!"
          )
      }
    },

    async registerUser(context, payload) {
      try {
        const res = await axios.post(`${url}register`, payload);
        const { msg, err } = await res.data;

        if (err) {
          context.commit(
            "setMsg",
            "Something went wrong in the registration process"
          );
        }

        if (msg) {
            context.commit("setUser", msg)
            setTimeout(() => {
              router.push("/login")
            }), 3000
        }
      } catch (e) {
        context.commit(
          "setMsg", 
          "An Error Occurred!"
          );
      }
    },

    async login(context, payload) {
      try {
        const res = await axios.post(`${url}login`, payload);
        const { result, token, msg, err } = await res.data;

        if ( result ) {
          context.commit("setUser", result);
          context.commit("setToken", token);
          localStorage.setItem("setToken", token);
          localStorage.setItem("user", JSON.stringify(result));
          cookies.set("setToken", token);
          context.commit("setMsg", msg);
        } else {
          context.commit("setMsg", err);
        }
      } catch (e) {
        console.error(e)
      }
    },

    async updateUser(context, payload) {
      try {
        const res = await axios.patch(`${url}user/${payload.userID}`, payload.data);
        const { msg, err } = res.data;
        if (msg) {
          context.commit("setUser", msg);
        } else {
          context.commit("setMsg", err);
        }
      } catch (e) {
        context.commit(
          "setMsg", 
          "An Error Occurred While Updating User"
          );
      }
    },

    async deleteUser(context, userID) {
      try {
        const { res } = await axios.delete(`${url}user/${userID}`);
        const { message, err } = res.data;

        if (err) {
          console.error("An error has occurred: ", err);
          context.commit(
            "setMessage",
            "An error has occurred while deleting user."
          );
        }

        if (message) {
          context.commit("setUser", message);
          console.log("User deleted successfully!");
        }
      } catch (e) {
        context.commit("setMessage", "An error occurred while deleting user.");
      }
    },


    async fetchOrders(context) {
      try {
        const { data } = await axios.get(`${url}orders`);
        context.commit("setOrders", data.results);
      } catch (e) {
        context.commit(
          "setMsg", 
          "An Error Has Occurred While Fetching Orders!"
          );
      }
    },

    async fetchCart(context, userID) {
      try {
        let userID = context.state.user.userID
        await axios.get(`${url}user/${userID}/carts`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data != null) {
            context.commit("setCart", data)
          } else {
            context.commit(
              "setMsg", 
              "An Error Occurred While Fetching Cart!"
              );
          }
        })
      } catch (e) {
        context.commit(
          "setMsg", 
          "An Error Occurred While Fetching Cart!"
          );
      }
    },

    async addToCart(context, { payload }) {
      try {
        let userID = localStorage.getItem("userID");
        const { res, msg } = await axios.post(`${url}user/${userID}/cart`, payload);

        if (res) {
          context.commit("setMsg", res.data);
        } else {
          context.commit("setMsg", msg);
        }
      } catch (e) {
        context.commit(
          "setMsg", 
          "An Error Occurred While Adding Cart!"
          );
      }
    },

    async updateCart(context, userID, orderID) {
      try {
        const res = await axios.patch(`${url}user/${userID}/cart/${orderID}`);
        const { results, err } = await res.data;

        if (results) {
          context.commit("setCart", results);
        } else {
          context.commit("setMsg", err);
        }
      } catch (e) {
        context.commit(
          "setMsg", 
          "An Error Occurred While Updating Cart!"
          );
      }
    },

    async clearCart(context, userID) {
      try {
        const res = await axios.delete(`${url}/user/${userID}/cart`);
        const { msg, err } = await res.data;

        if (err) {
          context.commit("setMsg", err);
        } 

        if (msg) {
          context.commit("setCart", msg);
          console.log("Cart Cleared Successfully!")
        }
      } catch (e) {
        context.commit(
          "setMsg", 
          "An Error Occurred While Clearing Cart!"
          );
      }
    },

    async removeFromCart(context, userID, prodID) {
      try {
        const res = await axios.delete(`${url}user/${userID}/cart/${prodID}`);
        const { err, msg } = res.data;

        if (err) {
          context.commit("setCart", msg);
          // console.log("Removed Item From Cart Successfully!");
        } 
      } catch (e) {
        context.commit(
          "setMsg", 
          "An Error Occurred While Removing From Cart!"
          );
      }
    }
  }
})
