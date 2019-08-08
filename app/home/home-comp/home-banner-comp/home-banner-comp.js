// app/home/home-comp/home-banner-comp/home-banner-comp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Array,
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
    //点击banner
    bannerClick(event){
      const index = event.currentTarget.dataset.index
      this.triggerEvent("handlerBannerImg", {index}, {})
    }
  }
})