// app/home/pages/home.js

import {
  getMultiData,
  getSelectedTabData
} from "../../sevice/home-service/home-sevice.js"

import {
  POP,
  NEW,
  SELL
} from "../../const/const.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav_title: "iGola机票比价",
    
    bannerData: [],   // 轮播图数据
    recommends: [],   // 推荐数据

    // 商品类型
    tabTitles: ['流行', '新款', '精选'],
    currentType: POP,
    goods: {
      [POP]: { page: 1, list: [] },
      [NEW]: { page: 1, list: [] },
      [SELL]: { page: 1, list: [] }
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 设置导航条标题
    wx.setNavigationBarTitle({
      title: this.data.nav_title,
    }),

    // 轮播图数据
    this._getMultiBannerData()
    
    // 获取默认选中的数据
    this._getSelectedData('pop')
    this._getSelectedData('new')
    this._getSelectedData('sell')
  },

  loadMoreData(event){
    console.log(event)
  },
  
  scrollDidScroll(event){
    console.log(event)
  },

  _getSelectedData(type){
    const page = this.data.goods[type].page
    getSelectedTabData(type, page).then(res => {
      const list = res.data.data.list
      this.data.goods[type].list.push(...list)
      this.data.goods[type].page += 1
      this.setData({
        goods: this.data.goods
      })
    })
  },

  _getMultiBannerData(){
    getMultiData().then(res => {
      const bannerData = res.data.data.banner.list.map(item => {
        return item.image
      })

      const recoms = res.data.data.recommend.list

      this.setData({
        bannerData: bannerData,
        recommends: recoms
      })
    })
  },

  // 监听tab点击
  handlerSelectedTab(event){
    const selectedIndex = event.detail.selectedIndex
    let type = ""
    switch (selectedIndex) {
      case 0:       // 流行
        type = POP
        break;
      case 1:       // 新款
        type = NEW
        break;
      case 2:       // 精选
        type = SELL
        break;
      default:
        break;
    }
    
    this.setData({
      currentType: type
    })

    // 获取组件并调用组件的方法
    this.selectComponent('.home-tab').setSelectedType(type)
  },

  // 点击banner监听
  selectedBannerWithIndex(event){
    const selectedIndex = event.detail.index
  },
  
  // 点击推荐
  handlerRecommendSelectedIndex(event){
    const selectedIndex = event.detail.selectedIndex
  },

  // 点击本周流行
  handlerFeatureImageClick(res){
    console.log("点击本周流行",res)
  }
})