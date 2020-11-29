<template>
  <div class="about">
    <div class="mx-3 py-4">
      <h1>Here is the list of your cities</h1>
      <hr2>Click on city name to see weather data for this city</hr2>
    </div>
    <div>
      <table style="margin-left: auto; margin-right: auto">
        <tr>
          <th class="mx-1 py-2 px-4">
            <p><strong>id</strong></p>
          </th>
          <th class="mx-1 py-2 px-4">
            <p><strong>City name</strong></p>
          </th>
          <th class="mx-1 py-2 px-4">
            <p><strong>Country</strong></p>
          </th>
          <th class="mx-1 py-2 px-4">
            <p><strong>State</strong></p>
          </th>
        </tr>
        <tr v-for="row in citiesList">
          <td>{{ row.id }} </td>
          <td class="mx-3 py-1">
            <router-link :to="'/weather/' + row.id"> {{ row.name }}</router-link>
          </td>
          <td class="mx-3 py-1"> {{ row.countryCode }}</td>
          <td class="mx-3 py-1"> {{ row.stateCode }}</td>
        </tr>
      </table>
    </div>
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
  name: 'Cities',
  methods: {
    getMyCities,
    reloadPage() {
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
