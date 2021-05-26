<template>
  <div class="hello container-fluid mt-5">
    <!--container-fluid mt-5是Bootstrap 4 把文字內容往內縮的語法-->
    <div>狀態 : {{ status }}</div>
    <div class="form-inline mb-3">
      <input type="text" class="form-control mr-1" v-model="username" />
      <button class="btn btn-primary" @click="updateUsername">更新姓名</button>
      <!--新增方法綁在button按鈕上-->
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in listData" :class="{ 'bg-info': item.seLected }"><!--如果item.seLected是true的話她會加上bg-info-->
          <!--用V-for把陣列資料存近來,item會把陣列資料一筆一筆存進去,i代表序號 ,把每一筆ListData資料存到item裡-->
          <th scope="row">{{ i + 1 }}</th>
          <td><img :src="item.picture.medium" width="60" alt="">
          </td>
          <td>{{ item.name.first }} {{ item.name.last }}</td>
          <!--輸入檢查裡陣列中某幾筆資料出來-->
          <td>{{ item.email }}</td>
          <td>
            <button class="btn btn-outline-peimary" @click="clickMe(item)">點我</button> <!--當我click時候把item傳到70行-->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["status"], //宣告接資料的,對應 APP.vue40行status
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      listData: [],
      username: "Casper", //預設出現的姓名
    };
  },
  methods: {
    getData() {
      let vm = this
      vm.axios.get("https://randomuser.me/api/?results=50")
        .then(function (response) {
          // handle success
          console.log(response);
          vm.listData = response.data.results //把讀取回來的資料存到ListData裡面
          vm.listData.forEach(function(item){
           vm.$set(item,'seLected', false)  //每一筆listData資料都加入selected屬性,用VUE的時候資料沒雙向綁定時用此方法
          });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
    updateUsername() {
      let vm = this
      vm.$emit('pushNewName', vm.username) //$emit由內往外傳會用到
    },
    clickMe(item){
      item.seLected = !item.seLected
      console.log(item.seLected)
    } 
      },
  mounted() {
    this.getData()
    }
  }
</script>
