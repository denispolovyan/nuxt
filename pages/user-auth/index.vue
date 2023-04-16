<template>
  <div class="user-auth">
    <div class="user-auth__body">
      <section class=" user-auth__card">
        <div class="container h-90">
          <div
            class="row d-flex justify-content-center align-items-center h-100"
          >
            <div class="col-lg-10 col-xl-8">
              <div class="card text-black" style="border-radius: 25px">
                <div class="card-body p-md-3">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-2 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form class="mx-1 mx-md-4">
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              id="form3Example1c"
                              v-model="form.name"
                              type="text"
                              class="form-control"
                              maxlength="30"
                            />
                            <label class="form-label" for="form3Example1c"
                              >Your Name</label
                            >
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              id="form3Example3c"
                              v-model="form.email"
                              type="email"
                              class="form-control"
                              maxlength="30"
                            />
                            <label class="form-label" for="form3Example3c"
                              >Your Email</label
                            >
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              id="form3Example2c"
                              v-model="form.phone"
                              type="tel"
                              class="form-control"
                              maxlength="30"
                            />
                            <label class="form-label" for="form3Example2c"
                              >Your Phone</label
                            >
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              id="form3Example3c"
                              v-model="form.age"
                              type="text"
                              class="form-control"
                              maxlength="2"
                            />
                            <label class="form-label" for="form3Example3c"
                              >Your Age</label
                            >
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              id="form3Example4c"
                              v-model="form.city"
                              type="text"
                              class="form-control"
                              maxlength="30"
                            />
                            <label class="form-label" for="form3Example4c"
                              >Your city</label
                            >
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              id="form3Example4c"
                              v-model="form.password"
                              type="password"
                              class="form-control"
                              maxlength="30"
                            />
                            <label class="form-label" for="form3Example4c"
                              >Password</label
                            >
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              id="form3Example4cd"
                              v-model="form.passwordConfirmation"
                              type="password"
                              class="form-control"
                              maxlength="30"
                            />
                            <label class="form-label" for="form3Example4cd"
                              >Repeat your password</label
                            >
                          </div>
                        </div>

                        <div
                          class="form-check d-flex justify-content-center mb-2"
                        >
                          <input
                            id="form2Example3c"
                            v-model="form.checkbox"
                            class="form-check-input me-2"
                            type="checkbox"
                            value=""
                          />
                          <label class="form-check-label" for="form2Example3">
                            I agree with all statements
                          </label>
                        </div>

                        <div
                          class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                        >
                          <nuxt-link to="user-info"
                            ><button
                              type="button"
                              class="btn btn-primary btn-lg"
                              @click="createUser"
                            >
                              Register
                            </button></nuxt-link
                          >
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        age: '',
        city: '',
        password: '',
        passwordConfirmation: '',
        checkbox: false,
      },
    }
  },
  methods: {
    createUser() {
      this.$store.commit('setUserInfo', this.form)
      localStorage.setItem('user-info', JSON.stringify(this.form))
    },
  },
}
</script>

<style scoped>
.user-auth {
  min-height: calc(100vh - 60px);
  background-color: var(--films-bg-color);
  padding: 40px 30px;
  font-weight: 600;
}
.card-body {
  border-radius: 25px;
  height: 800px;
  background-color: var(--user-info-card-color);
}
</style>
