// app/home/home-comp/home-tab/home-tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommends : {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickRecommendImg(event){
      const index = event.currentTarget.dataset.index
      this.triggerEvent("recommendDidSelected",{selectedIndex : index},{})
    }
  }
})
