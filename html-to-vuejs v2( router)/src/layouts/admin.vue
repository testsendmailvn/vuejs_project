<template>
 <!-- ======= Header ======= -->
        <header id="header">
          <div class="d-flex flex-column">
            <div class="profile">
              <img
                src="../assets/img/profile-img.jpg"
                alt=""
                class="img-fluid rounded-circle"
              />
              <h1 class="text-light">
                <a href="index.html">TRẦN ĐĂNG KHÔI</a>
              </h1>
              <div class="social-links mt-3 text-center">
                <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                <a href="#" class="instagram"
                  ><i class="bx bxl-instagram"></i
                ></a>
                <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
              </div>
            </div>
            <TheMenu />
          </div>
        </header>
        <!-- End Header -->
        <main id="main">
          <router-view></router-view>
        </main>
</template>

<script setup>
import TheMenu from "../components/TheMenu.vue";
</script>
