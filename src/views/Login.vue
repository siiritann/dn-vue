<template>
  <div class="home">
    <LoginForm msg="Login here"/>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm";

export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>
