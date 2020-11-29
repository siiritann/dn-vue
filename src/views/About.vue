<template>
  <div class="about">
    <h1>Here is the list of your cities</h1>
    <table style="margin-left: auto; margin-right: auto">
      <tr>
        <th class="mx-5 py-2 px-4">
        <p><strong>City name</strong></p>
        </th>
        <th class="mx-5 py-2 px-4">
        <p><strong>Country</strong></p>
        </th>
        <th class="mx-5 py-2 px-4">
        <p><strong>State</strong></p>
        </th>
      </tr>
      <tr v-for="row in citiesList">
        <td class="mx-3 py-1"> {{ row.name }}</td>
        <td class="mx-3 py-1"> {{ row.countryCode }}</td>
        <td class="mx-3 py-1"> {{ row.stateCode }}</td>
      </tr>
    </table>
  </div>
</template>

<script>

let getMyCities = function (city) {
  let url = 'http://localhost:8080/cities/my';
  this.$http.get(url)
      .then(response => {
        this.citiesList = response.data;
      })
}


export default {
  name: 'About',
  methods: {
    getMyCities,
    reloadPage(){
      window.location.reload()
    },
  },
  props: {
    msg: String,
  },
  data: function () {
    return {
      citiesList: [],
    };
  },
  mounted() {
    this.getMyCities();
  }
};

</script>
