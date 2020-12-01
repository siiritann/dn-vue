<template>
  <div class="about">
    <div class="mx-3 py-4">
      <h1>Here is the list of your cities</h1>
      <h2>Click on city name to see weather data for this city</h2>
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
          <th class="mx-1 py-2 px-4">
            <p></p>
          </th>
        </tr>
        <tr v-for="(row,index) in citiesList">
          <td>{{ row.id }}</td>
          <td class="mx-3 py-1">
            <router-link :to="'/weather/' + row.id"> {{ row.name }}</router-link>
          </td>
          <td class="mx-3 py-1"> {{ row.countryCode }}</td>
          <td class="mx-3 py-1"> {{ row.stateCode }}</td>
          <td>
            <div>
              <button
                  v-on:click="removeCity(index)"
                  type="button"
                  class="btn btn-outline-secondary btn-sm">
                Remove
              </button>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <div class="alert alert-success py-3" v-if="savingSuccessful">
      City successfully removed
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

let removeCity = function (index) {
  let id = this.citiesList[index].id;
  let url = 'http://localhost:8080/cities/' + id;
  this.$http.delete(url)
      .then(result => {
        this.savingSuccessful = true
        console.log(result)
      })
      .catch(error => console.log(error));
  this.citiesList.splice(index, 1);
}

export default {
  name: 'Cities',
  methods: {
    getMyCities,
    removeCity,
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
      savingSuccessful: false
    };
  },
  mounted() {
    this.getMyCities();
  }
};

</script>
