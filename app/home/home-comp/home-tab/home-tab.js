// app/home/home-comp/home-tab/home-tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectedTab(event){
      const selectedIndex = event.currentTarget.dataset.index
      this.setData({
        currentIndex: selectedIndex
      })

      this.triggerEvent('tabSelected', {selectedIndex}, {})
    },

    setSelectedType(type) {
      console.log(type)
    }
  }
})
