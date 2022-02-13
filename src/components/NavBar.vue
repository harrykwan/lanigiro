<template>
  <!-- navbar top -->
  <div class="navbar-top">
    <div class="side-nav-panel-left">
      <a href="#" data-activates="slide-out-left" class="side-nav-left"
        ><i class="fa fa-bars"></i
      ></a>
    </div>
    <!-- site brand	 -->
    <div class="site-brand">
      <a href="/"><h1>LANIGIRO</h1></a>
    </div>
    <!-- end site brand	 -->
    <div class="side-nav-panel-right">
      <i :onclick="signinmetamsk" class="fa fa-sign-in"></i>

      <!-- <a href="cart.html" class="side-nav-right"
        ><i class="fa fa-shopping-basket"></i><span>2</span></a
      > -->
    </div>
  </div>
  <!-- end navbar top -->

  <!-- side nav left-->
  <div class="side-nav-panel-left">
    <ul id="slide-out-left" class="side-nav side-nav-panel collapsible">
      <li class="profil">
        <!-- <img src="img/profile.jpg" alt="" />
        <h2>John Doe</h2>
        <h6>Mobile Developer</h6> -->
        <h2>Wallet</h2>
        <h6>{{ walletid.substring(0, walletid.length / 2) }}</h6>
        <h6>{{ walletid.substring(walletid.length / 2) }}</h6>
      </li>
      <li class="li-top">
        <a href="/"><i class="fa fa-home"></i>Home</a>
      </li>
      <li>
        <a href="product.html"
          ><i class="fa fa-shopping-basket"></i>Product List</a
        >
      </li>
      <li>
        <a href="cart.html"><i class="fa fa-shopping-cart"></i>Shopping Cart</a>
      </li>
      <li>
        <a href="checkout.html"><i class="fa fa-send"></i>Checkout</a>
      </li>
      <li>
        <a href="blog.html"><i class="fa fa-bold"></i>Blog</a>
      </li>

      <li>
        <a href="about-us.html"><i class="fa fa-user"></i>About Us</a>
      </li>
      <li>
        <a href="contact.html"><i class="fa fa-envelope-o"></i>Contact Us</a>
      </li>
      <!-- <li>
        <a href="login.html"><i class="fa fa-sign-in"></i>Login</a>
      </li>
      <li>
        <a href="register.html"><i class="fa fa-user-plus"></i>Register</a>
      </li> -->
    </ul>
  </div>
  <!-- end side nav left-->
</template>

<script setup>
if (typeof window.ethereum !== "undefined") {
  console.log("MetaMask is installed!");
} else {
  alert("pleaes install metamask");
}
</script>

<script>
export default {
  data: function () {
    return {
      walletid: "",
    };
  },
  methods: {
    signinmetamsk: async function () {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      console.log(account);
      this.walletid = account;
    },
  },
};
</script>

<style scoped></style>
