<template>
  <div class="home">
    <div class="content center">
      <div class="contentWidth">
        <card :style="{'margin-top': index!= 0 ? '1px' : '0'}" boxShadow opacity v-for="(item, index) in MainContentList" :key="index">
          <div class="article-content">
            <div class="HaderBar">
              <div class="top">
                <div class="title">
                  <h3>{{item.title}}</h3>
                </div>
              </div>
              <div class="HaderInfo">
                <div class="date">
                  <div class>
                    <svg
                      t="1586624516489"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="3295"
                      width="30"
                      height="30"
                    >
                      <path
                        d="M759.051 949.125H264.948c-83.037 0-150.36-67.324-150.36-150.36V357.64c0-83.032 67.324-150.36 150.36-150.36h494.103c83.037 0 150.362 67.329 150.362 150.36v441.125c-0.095 83.036-67.325 150.36-150.362 150.36z m0 0"
                        fill="#3D100B"
                        p-id="3296"
                      />
                      <path
                        d="M909.413 693.257v79.066c-0.095 82.937-67.325 150.26-150.362 150.26H264.948c-83.037 0-150.36-67.324-150.36-150.355v-441.03c0-83.037 67.324-150.36 150.36-150.36h494.103c83.037 0 150.362 67.324 150.362 150.36v102.059m0 84v87.999M759.051 922.583"
                        fill="#E7402E"
                        p-id="3297"
                      />
                      <path
                        d="M759.051 937.583H264.948c-91.18 0-165.36-74.178-165.36-165.355v-441.03c0-91.18 74.18-165.36 165.36-165.36h494.103c91.181 0 165.362 74.18 165.362 165.36v102.059c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15V331.198c0-74.638-60.723-135.36-135.362-135.36H264.948c-74.638 0-135.36 60.723-135.36 135.36v441.03c0 74.635 60.722 135.355 135.36 135.355h494.103c74.553 0 135.276-60.685 135.362-135.277v-79.049c0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15v79.066c-0.105 91.132-74.286 165.26-165.362 165.26z m150.362-317.326c-8.284 0-15-6.716-15-15v-88c0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15v88c0 8.284-6.716 15-15 15z"
                        fill="#3D100B"
                        p-id="3298"
                      />
                      <path
                        d="M725.049 868.579h-61.807c-8.284 0-15-6.716-15-15s6.716-15 15-15h61.807c8.284 0 15 6.716 15 15s-6.716 15-15 15z m-147.807 0h-290c-8.284 0-15-6.716-15-15s6.716-15 15-15h290c8.284 0 15 6.716 15 15s-6.716 15-15 15z"
                        fill="#FFFFFF"
                        p-id="3299"
                      />
                      <path
                        d="M308.855 251.482c0 34.165 27.695 61.86 61.86 61.86s61.86-27.695 61.86-61.86-27.695-61.865-61.86-61.865-61.86 27.7-61.86 61.865z m0 0M582.545 251.482a61.873 61.873 0 0 0 30.929 53.575 61.88 61.88 0 0 0 61.865 0 61.865 61.865 0 0 0 0-107.15 61.875 61.875 0 0 0-61.865 0 61.867 61.867 0 0 0-30.929 53.575z m0 0"
                        fill="#3D100B"
                        p-id="3300"
                      />
                      <path
                        d="M370.715 295.68c-29.272 0-52.983-23.706-52.983-52.978V127.858c0-29.272 23.711-52.983 52.983-52.983s52.983 23.711 52.983 52.983v114.844c0 29.172-23.711 52.978-52.983 52.978z m0 0M644.404 295.68c-29.272 0-52.978-23.706-52.978-52.978V127.858c0-29.272 23.706-52.983 52.978-52.983s52.984 23.711 52.984 52.983v114.844c0 29.172-23.713 52.978-52.984 52.978z m0 0"
                        fill="#F4DD50"
                        p-id="3301"
                      />
                      <path
                        d="M380.667 747.631V583.843h-58.243v-39.711h5.118c21.767 0 37.946-3.646 48.536-10.943 10.589-7.294 16.59-18.943 18.002-34.946h49.595v249.388h-63.008zM519.039 638.557l17.826-140.667h155.669v49.772h-113.84l-6.53 48.889c5.529-5.648 12.324-9.884 20.385-12.708 8.058-2.824 17.443-4.236 28.151-4.236 24.71 0 44.447 7.62 59.214 22.856 14.765 15.24 22.15 35.682 22.15 61.332 0 28.239-8.913 50.42-26.739 66.539-17.826 16.122-42.331 24.18-73.51 24.18-28.005 0-49.802-6.619-65.391-19.856-15.592-13.237-24.268-32.387-26.033-57.449h61.067c0.587 9.062 3.676 16.122 9.266 21.179 5.587 5.061 13.088 7.59 22.503 7.59 11.295 0 19.914-3.381 25.857-10.148 5.94-6.765 8.913-16.618 8.913-29.563 0-12.823-2.854-22.826-8.56-30.004-5.709-7.176-13.678-10.767-23.915-10.767-7.06 0-13.149 1.266-18.268 3.795-5.118 2.532-9.503 6.442-13.149 11.737l-55.066-2.471z"
                        fill="#FFFFFF"
                        p-id="3302"
                      />
                      <path
                        d="M740.166 381.34c0 9.942-8.06 18.002-18.002 18.002h-419.84c-9.942 0-18.002-8.06-18.002-18.002 0-9.942 8.06-18.002 18.002-18.002h419.84c9.942 0 18.002 8.059 18.002 18.002z"
                        fill="#3D100B"
                        p-id="3303"
                      />
                    </svg>
                  </div>
                  <div class="text">{{item.date}}</div>
                </div>
                <div class="right-info">
                  <div class="comment info-item">
                    <svg
                      t="1586625862000"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="1272"
                      width="20"
                      height="20"
                    >
                      <path
                        d="M711.4 925c-0.7 0-1.4 0-2.1-0.1-11.8-0.8-21.7-8.7-25.1-20l-62.9-208.8H110.6c-33.8 0-61.3-27.5-61.3-61.3V143.4c0-33.8 27.5-61.3 61.3-61.3H899c33.8 0 61.3 27.5 61.3 61.3v491.4c0 33.8-27.5 61.3-61.3 61.3h-63.8L737 908.6c-4.7 10.1-14.6 16.4-25.6 16.4zM110.6 114.4c-16 0-29 13-29 29v491.4c0 16 13 29 29 29h522.7c7.1 0 13.4 4.7 15.5 11.5l63.3 210.1 98.2-212.2c2.7-5.7 8.4-9.4 14.7-9.4h74c16 0 29-13 29-29V143.4c0-16-13-29-29-29H110.6z"
                        :fill="SVGfill"
                        p-id="1273"
                      />
                      <path
                        d="M504.9 460.1c-5.8 0-11.7-0.7-17.4-2.2-18.4-4.6-33.9-16.1-43.7-32.4-9.8-16.3-12.6-35.4-7.9-53.8 4.6-18.4 16.1-33.9 32.4-43.7 16.3-9.7 35.4-12.5 53.8-7.9s33.9 16.1 43.7 32.4c9.8 16.3 12.6 35.4 7.9 53.8-4.6 18.4-16.1 33.9-32.4 43.6-11.2 6.8-23.7 10.2-36.4 10.2z m-0.2-109.8c-6.9 0-13.7 1.9-19.8 5.5-8.9 5.3-15.2 13.8-17.7 23.8s-1 20.4 4.3 29.3c5.3 8.9 13.8 15.2 23.8 17.7 10.1 2.6 20.4 1 29.3-4.3 8.9-5.3 15.2-13.8 17.7-23.8s1-20.4-4.3-29.3c-5.3-8.9-13.8-15.2-23.8-17.7-3.1-0.8-6.3-1.2-9.5-1.2z m-53.1 25.4h0.2-0.2zM262.5 460.1c-5.8 0-11.7-0.7-17.4-2.2-18.4-4.6-33.9-16.1-43.7-32.4-9.8-16.3-12.6-35.4-7.9-53.8 4.6-18.4 16.1-33.9 32.4-43.7 16.3-9.7 35.4-12.5 53.8-7.9s33.9 16.1 43.7 32.4c9.8 16.3 12.6 35.4 7.9 53.8-4.6 18.4-16.1 33.9-32.4 43.6-11.2 6.8-23.7 10.2-36.4 10.2z m-0.2-109.8c-6.9 0-13.7 1.9-19.8 5.5-8.9 5.3-15.2 13.8-17.7 23.8s-1 20.4 4.3 29.3c5.3 8.9 13.8 15.2 23.8 17.7 10.1 2.6 20.4 1 29.3-4.3 8.9-5.3 15.2-13.8 17.7-23.8s1-20.4-4.3-29.3c-5.3-8.9-13.8-15.2-23.8-17.7-3.1-0.8-6.3-1.2-9.5-1.2z m-53.1 25.4h0.2-0.2zM747.1 460.1c-15 0-30.1-4.7-42.9-14.5-31.2-23.7-37.3-68.4-13.6-99.6 23.7-31.2 68.4-37.2 99.5-13.5 31.2 23.7 37.3 68.4 13.6 99.5-13.9 18.4-35.1 28.1-56.6 28.1z m-30.7-94.5c-12.9 17-9.6 41.3 7.4 54.3s41.3 9.6 54.3-7.4c12.9-17 9.6-41.3-7.4-54.3-17-12.8-41.4-9.6-54.3 7.4z"
                        fill="#1890ff"
                        p-id="1274"
                      />
                    </svg>
                    <span>{{item.info.commentCount}}</span>
                  </div>
                  <div class="like info-item">
                    <svg
                      t="1586625789466"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="1078"
                      width="20"
                      height="20"
                    >
                      <path
                        d="M480.2 921.5c-11.2 0-22.4-2.8-32.4-8.6C342.5 852.4 34.1 605.1 25.3 385.5c-3-76.7 24.4-149.4 77.4-204.5 50.5-52.6 120-82.8 190.6-82.8 69.9 0 136 28.6 186.3 80.6 0.5 0.6 1.2 0.7 1.7 0.7s1.2-0.1 1.7-0.7c50.2-51.9 116.4-80.6 186.2-80.6 77.7 0 155.4 36 208 96.2 48.1 55.1 69.4 123.6 59.9 192.8-30.6 223.6-303 454.1-422.5 524.9-10.6 6.3-22.5 9.4-34.4 9.4zM293.3 133.1c-61.1 0-121.5 26.3-165.5 72.1-46.4 48.2-70.4 111.8-67.7 179 7.7 193.8 289 431.9 405.1 498.6 9.6 5.5 21.7 5.3 31.7-0.6 128-75.8 378.5-300.2 405.8-499.6 8.1-59-10.3-117.7-51.7-165.1-46-52.8-114-84.3-181.7-84.3-60.3 0-117.6 24.8-161.2 69.9-7 7.2-16.7 11.3-26.7 11.3-10.2 0-19.7-4-26.7-11.3-43.8-45.2-101-70-161.4-70z"
                        :fill="item.SVGlikeFill? SVGlikeFill : SVGfill"
                        p-id="1079"
                      />
                    </svg>
                    <span :style="{color: item.SVGlikeFill? SVGlikeFill : ''}">{{item.info.likeCount}}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="dline"></div>
            <div class="main-content">
              <div class="main-text">
                {{item.content}}
              </div>
              <div style="height: 20px"></div>
              <dir class="dline"></dir>
              <div class="bottom">
                <svg
                  t="1586680211195"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="7669"
                  width="40"
                  height="40"
                >
                  <path
                    d="M371.2 294.4h256c42.24 0 76.8 34.56 76.8 76.8v320c0 28.16-23.04 51.2-51.2 51.2H371.2c-28.16 0-51.2-23.04-51.2-51.2V345.6c0-28.16 23.04-51.2 51.2-51.2z"
                    fill="#046EA7"
                    p-id="7671"
                  />
                  <path
                    d="M524.8 460.8h204.8c21.76 0 38.4 16.64 38.4 38.4v102.4c0 21.76-16.64 38.4-38.4 38.4H524.8c-21.76 0-38.4-16.64-38.4-38.4v-102.4c0-21.76 16.64-38.4 38.4-38.4z"
                    fill="#FCCF0A"
                    p-id="7672"
                  />
                </svg>
                <span class="pathName">{{item.path}}</span>
              </div>
            </div>
          </div>
        </card>
      </div>
      <div class="NavWidth">
        <!-- <div style="display: flex;">
1
        </div> -->
        <!-- 头像组件 -->
        <Cportrait></Cportrait>
        <!-- 文章分类组件 -->
        <Ccategories :search="categoriesID" :Hover="searchHover"></Ccategories>
        <!-- 推荐文章 -->
        <CPopular></CPopular>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import card from "@/components/card-component.vue";
// import backtop from "@/components/backtop-component.vue";
// import Yswitch from "@/components/switch-component.vue";
// import Ysliider from "@/components/slider-conponent.vue";

import Cportrait from "../childComponents/portrait.vue";
import Ccategories from "../childComponents/categoriesList.vue";
import CPopular from "../childComponents/Popular.vue";

import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {
    card,
    // backtop,
    // Yswitch,
    // Ysliider,
    Cportrait,
    Ccategories,
    CPopular
  }
})
export default class Home extends Vue {
  // CPopular 热推组件赋值传输到 Ccategories 文章分类组件
  private searchHover: object | undefined = {};
  private categoriesID: object = {};

  private SVGfill: string | undefined = "#1890ff";
  private SVGlikeFill: string | undefined = "#E7402E";
  private MainContentList: object[] = [
    { date: '2020-02-09', id: 1, title: 'Java基本数据类型转换', path: '学习/Java', content: 'Hello Worl!', SVGlikeFill: false, info:{commentCount: 2, likeCount: 2} },
    { date: '2020-02-09', id: 1, title: 'Java基本数据类型转换', path: '学习/Java', content: 'Hello Worl!', SVGlikeFill: false, info:{commentCount: 2, likeCount: 2} },
    { date: '2020-02-09', id: 1, title: 'Java基本数据类型转换', path: '学习/Java', content: 'Hello Worl!', SVGlikeFill: false, info:{commentCount: 2, likeCount: 2} },
    { date: '2020-02-09', id: 1, title: 'Java基本数据类型转换', path: '学习/Java', content: 'Hello Worl!', SVGlikeFill: false, info:{commentCount: 2, likeCount: 2} },
    { date: '2020-02-09', id: 1, title: 'Java基本数据类型转换', path: '学习/Java', content: 'Hello Worl!', SVGlikeFill: false, info:{commentCount: 2, likeCount: 2} }
  ]
}
</script>

<style lang="scss" scoped>
@import "../style.scss";

.home {
  padding-top: 20px;
  .content {
    display: flex;
    word-wrap: normal;
    justify-content: space-between;
    width: $pageWidth;
    margin: auto;
  }

  .contentWidth {
    width: $contentWidth;
  }

  .NavWidth {
    width: $FunctionNavWidth;
    user-select: none;
  }

  .HaderBar {
    // display: flex;
    // justify-content: space-between;

    .title {
      position: relative;
      display: inline-block;
      padding: 0;
      transition: padding $ThemeThemeAnimationTime;

      h3 {
        color: inherit;
        font-size: 16px;
        padding: 8px 0;
        color: #1890ff;
        font-weight: bold;
        cursor: pointer;
      }

      &::after {
        content: "";
        position: absolute;
        left: 0;
        height: 2px;
        width: 0%;
        bottom: 4px;
        background: #1890ff;
        transition: width 0.2s;
        margin: auto;
      }

      &:hover::after {
        width: 100%;
      }
      &:hover {
        padding: 0 5px;
      }
    }

    .HaderInfo {
      display: flex;
      justify-content: space-between;

      .right-info {
        display: flex;
        align-items: center;
        .info-item {
          display: flex;
          margin-right: 15px;
          span {
            padding-left: 5px;
          }
        }
      }
    }
    .date {
      font-size: 12px;
      align-items: center;
      display: flex;

      .text {
        line-height: inherit;
        padding-left: 10px;
      }
    }
  }
  .main-content {
    // display: flex;
    .bottom {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }
}

@keyframes zoomclicked {
  0% {
    width: 0;
    height: 0;
  }
  100% {
    width: 999px;
    height: 999px;
  }
}
</style>