<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <p>
        Please use this search box to find a city
      </p>
      <input v-model="city" id="city" placeholder="insert city name" class="myRounded"><br><br>
    </div>
    <div>
      <div class="py-3">
        <button
            v-on:click="searchCities(city)"
            type="button"
            class="btn btn-outline-primary shadow-sm btn-lg">
          Search
        </button>
      </div>
      <div v-if="searchResult.length">
        <div class="py-3">
          <table id="result" style="margin-left: auto; margin-right: auto">
            <tr>
              <th>City id</th>
              <th>City name</th>
              <th>Country</th>
              <th>State</th>
            </tr>
            <tr v-for="row in searchResult">
              <td>
                <input v-model="cityId" type="radio" name="selectedCity" :value="row.id"/>
                {{ row.id }}
              </td>
              <td>
                {{ row.name }}
              </td>
              <td>
                {{ row.countryCode }}
              </td>
              <td>
                {{ row.stateCode }}
              </td>
            </tr>
          </table>
        </div>
        <div class="py-3">
          <button
              v-on:click="addCity()"
              type="button"
              id="addcity"
              class="btn btn-outline-info shadow-sm btn-lg ">
            Add city
          </button>
        </div>
        <div class="alert alert-success py-2" v-if="savingSuccessful">
          City successfully added to your watchlist
        </div>
      </div>
      <div class="alert alert-error py-2" v-if="savingFailed">
        {{ failureReason }}
      </div>
    </div>
    <div class="py-4">
      <p>You can see the list of your cities
        <router-link to="Cities">here</router-link>
        <br><br>
      </p>
    </div>
  </div>
</template>

<script>

let searchCities = function (city) {
  this.failureReason = '';
  this.savingSuccessful = false;
  this.savingFailed = false;
  let url = this.$server + '/cities?name=' + city;

  this.$http.get(url)
      .then(response => {
        this.searchResult = response.data;
        this.cityId = this.searchResult[0].id;
      })

}

let addCity = function () {
  this.failureReason = '';
  this.savingSuccessful = false;
  this.savingFailed = false;
  let url = this.$server + '/cities/add?id=' + this.cityId;
  this.$http.post(url)
      .then(result => {
        this.savingSuccessful = true
      })
      .catch(error => {
        this.failureReason = error.response.data.message
        this.savingFailed = true;
      })
}


export default {
  name: 'Welcome',
  methods: {
    searchCities,
    addCity
  },
  props: {
    msg: String,
    citydata: {}
  },
  data: function () {
    return {
      city: '',
      searchResult: [],
      cityId: 0,
      savingSuccessful: false,
      savingFailed: false,
      failureReason: ''
    };
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myRounded {
  border-radius: 0.3rem;
  border-color: black;
  border-width: 1px;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
