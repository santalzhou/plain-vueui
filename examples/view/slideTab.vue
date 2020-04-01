<template>
  <div class="st_page">
    <h3 class="st_title">slideTab 滑块标签</h3>
    <div class="st_content">
      <slide-tab :length=options.length @change="chgSlideTab" color="green">
          <!-- 传递length是否不合理？ -->
          <template v-for="(item, idx) in options"  :slot="'slide' + idx">
              <div :key="item.id" class="weather_item">
                  <p class="item_time">{{item.time}}</p>
                  <p class="item_temp">{{item.temp + ' '+ item.weat}}</p>
                  <p class="item_temp">{{item.title}}</p>
              </div>
          </template>
      </slide-tab>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        name: 'slide0',
        slide: 'slide',
      options: [
        {
          id: "aa",
          time: "今天",
          temp: "2-15°C",
          weat: "阴天",
          title: "小雨， 记得出门带伞"
        },
        { id: "bb", time: "明天", temp: "2-15°C", weat: "阴天",title: "小雨， 记得出门带伞" },
        { id: "cc", time: "周1", temp: "2-15°C", weat: "阴天",title: "小雨， 记得出门带伞"  },
        { id: "dd", time: "周2", temp: "2-15°C", weat: "阴天" ,title: "小雨， 小雨，记得出门带伞" },
        { id: "ee", time: "周3", temp: "2-15°C", weat: "阴天",title: "小雨， 小雨，记得出门带伞"  },
        { id: "ff", time: "周4", temp: "2-15°C", weat: "阴天",title: "小雨， 小雨，记得出门带伞"  },
        { id: "gg", time: "周5", temp: "2-15°C", weat: "阴天",title: "小雨， 小雨，记得出门带伞"  },
        { id: "hh", time: "周6", temp: "2-15°C", weat: "阴天", title: "小雨，小雨， 记得出门带伞"  }
      ],
      test: ['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg']
    };
  },
  created() {
  },

  methods: {
    chgSlideTab(idx){
      console.log('单击的tab的索引', idx);
    }
  }
};
</script>

<style lang="scss">
.st_page {
  .st_title {
    font-weight: normal;
  }
  .weather_item{
      box-sizing: border-box;
      padding: 10px;
      float: left;
      width: 200px;
      height: 100px;
      .item_time{
          padding:0;
          margin: 0;
          font-size: 14px;
          text-align: center;
          color: #999;
          line-height: 20px;
      }
      .item_temp{
        text-align: center;
          font-size: 12px;
      }
  }
}
</style>
