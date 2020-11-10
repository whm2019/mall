<template>
  <div class="detail">
    <detail-navibar @itemClick="itemClick" ref='nav'></detail-navibar>
    <scroll ref="scroll" :probeType="3" :pullUpLoad="true" class="content" @scroll='scroll'>
      详情页
      <div ref="first">
        <ul>
          <li>this is first1</li>
          <li>this is first2</li>
          <li>this is first3</li>
          <li>this is first4</li>
          <li>this is first5</li>
          <li>this is first6</li>
          <li>this is first7</li>
          <li>this is first8</li>
          <li>this is first9</li>
          <li>this is first10</li>
          <li>this is first11</li>
          <li>this is first12</li>
          <li>this is first13</li>
          <li>this is first14</li>
          <img :src="imgUrl" alt="" />
          <li>this is first15</li>
          <li>this is first16</li>
          <li>this is first17</li>
          <li>this is first18</li>
          <li>this is first19</li>
          <li>this is first20</li>
          <li>this is first21</li>
          <li>this is first22</li>
          <li>this is first23</li>
          <li>this is first24</li>
          <li>this is first25</li>
          <li>this is first26</li>
          <li>this is first27</li>
          <li>this is first28</li>
          <li>this is first29</li>
          <li>this is first30</li>
          <li>this is first31</li>
          <li>this is first32</li>
          <li>this is first33</li>
          <li>this is first34</li>
          <li>this is first35</li>
          <li>this is first36</li>
          <li>this is first37</li>
          <li>this is first38</li>
          <li>this is first39</li>
          <li>this is first40</li>
          <li>this is first41</li>
          <li>this is first42</li>
          <li>this is first43</li>
          <li>this is first44</li>
          <li>this is first45</li>
          <li>this is first46</li>
          <li>this is first47</li>
          <li>this is first48</li>
          <li>this is first49</li>
          <li>this is first50</li>
          <li>this is first51</li>
          <li>this is first52</li>
          <li>this is first53</li>
          <li>this is first54</li>
          <li>this is first55</li>
          <li>this is first56</li>
          <li>this is first57</li>
          <li>this is first58</li>
          <li>this is first59</li>
          <li>this is first60</li>
          <li>this is first61</li>
          <li>this is first62</li>
          <li>this is first63</li>
          <li>this is first64</li>
          <li>this is first65</li>
          <li>this is first66</li>
          <li>this is first67</li>
          <li>this is first68</li>
          <li>this is first69</li>
          <li>this is first70</li>
          <li>this is first71</li>
          <li>this is first72</li>
          <li>this is first73</li>
          <li>this is first74</li>
          <li>this is first75</li>
          <li>this is first76</li>
          <li>this is first77</li>
          <li>this is first78</li>
          <li>this is first79</li>
          <li>this is first80</li>
          <li>this is first81</li>
          <li>this is first82</li>
          <li>this is first83</li>
          <li>this is first84</li>
          <li>this is first85</li>
          <li>this is first86</li>
          <li>this is first87</li>
          <li>this is first88</li>
          <li>this is first89</li>
          <li>this is first90</li>
          <li>this is first91</li>
          <img :src="imgUrl" alt="" />
          <li>this is first92</li>
          <li>this is first93</li>
          <li>this is first94</li>
          <li>this is first95</li>
          <li>this is first96</li>
          <li>this is first97</li>
          <li>this is first98</li>
          <li>this is first99</li>
          <li>this is first100</li>
        </ul>
      </div>
      <div ref="second">
        <ul>
          <li>this is second1</li>
          <li>this is second2</li>
          <li>this is second3</li>
          <li>this is second4</li>
          <li>this is second5</li>
          <li>this is second6</li>
          <li>this is second7</li>
          <li>this is second8</li>
          <li>this is second9</li>
          <li>this is second10</li>
          <li>this is second11</li>
          <li>this is second12</li>
          <li>this is second13</li>
          <li>this is second14</li>
          <li>this is second15</li>
          <li>this is second16</li>
          <li>this is second17</li>
          <li>this is second18</li>
          <li>this is second19</li>
          <li>this is second20</li>
          <li>this is second21</li>
          <li>this is second22</li>
          <li>this is second23</li>
          <li>this is second24</li>
          <li>this is second25</li>
          <li>this is second26</li>
          <li>this is second27</li>
          <li>this is second28</li>
          <li>this is second29</li>
          <li>this is second30</li>
          <li>this is second31</li>
          <li>this is second32</li>
          <li>this is second33</li>
          <li>this is second34</li>
          <li>this is second35</li>
          <li>this is second36</li>
          <img :src="imgUrl" alt="" />
          <li>this is second37</li>
          <li>this is second38</li>
          <li>this is second39</li>
          <li>this is second40</li>
          <li>this is second41</li>
          <li>this is second42</li>
          <li>this is second43</li>
          <li>this is second44</li>
          <li>this is second45</li>
          <li>this is second46</li>
          <li>this is second47</li>
          <li>this is second48</li>
          <li>this is second49</li>
          <li>this is second50</li>
          <li>this is second51</li>
          <li>this is second52</li>
          <li>this is second53</li>
          <li>this is second54</li>
          <li>this is second55</li>
          <li>this is second56</li>
          <li>this is second57</li>
          <li>this is second58</li>
          <li>this is second59</li>
          <li>this is second60</li>
          <li>this is second61</li>
          <li>this is second62</li>
          <li>this is second63</li>
          <li>this is second64</li>
          <li>this is second65</li>
          <li>this is second66</li>
          <li>this is second67</li>
          <li>this is second68</li>
          <li>this is second69</li>
          <li>this is second70</li>
          <li>this is second71</li>
          <li>this is second72</li>
          <li>this is second73</li>
          <li>this is second74</li>
          <li>this is second75</li>
          <li>this is second76</li>
          <li>this is second77</li>
          <li>this is second78</li>
          <li>this is second79</li>
          <li>this is second80</li>
          <img :src="imgUrl" alt="" />
          <li>this is second81</li>
          <li>this is second82</li>
          <li>this is second83</li>
          <li>this is second84</li>
          <li>this is second85</li>
          <li>this is second86</li>
          <li>this is second87</li>
          <li>this is second88</li>
          <li>this is second89</li>
          <li>this is second90</li>
          <li>this is second91</li>
          <li>this is second92</li>
          <li>this is second93</li>
          <li>this is second94</li>
          <li>this is second95</li>
          <li>this is second96</li>
          <li>this is second97</li>
          <li>this is second98</li>
          <li>this is second99</li>
          <li>this is second100</li>
        </ul>
      </div>
      <div ref="third">
        <ul>
          <li>this is third1</li>
          <li>this is third2</li>
          <li>this is third3</li>
          <li>this is third4</li>
          <li>this is third5</li>
          <li>this is third6</li>
          <li>this is third7</li>
          <li>this is third8</li>
          <li>this is third9</li>
          <li>this is third10</li>
          <li>this is third11</li>
          <li>this is third12</li>
          <li>this is third13</li>
          <li>this is third14</li>
          <li>this is third15</li>
          <li>this is third16</li>
          <li>this is third17</li>
          <li>this is third18</li>
          <li>this is third19</li>
          <li>this is third20</li>
          <li>this is third21</li>
          <li>this is third22</li>
          <li>this is third23</li>
          <li>this is third24</li>
          <li>this is third25</li>
          <li>this is third26</li>
          <li>this is third27</li>
          <li>this is third28</li>
          <li>this is third29</li>
          <li>this is third30</li>
          <li>this is third31</li>
          <li>this is third32</li>
          <li>this is third33</li>
          <li>this is third34</li>
          <li>this is third35</li>
          <li>this is third36</li>
          <li>this is third37</li>
          <li>this is third38</li>
          <li>this is third39</li>
          <li>this is third40</li>
          <li>this is third41</li>
          <li>this is third42</li>
          <li>this is third43</li>
          <li>this is third44</li>
          <li>this is third45</li>
          <li>this is third46</li>
          <li>this is third47</li>
          <li>this is third48</li>
          <li>this is third49</li>
          <li>this is third50</li>
          <li>this is third51</li>
          <li>this is third52</li>
          <li>this is third53</li>
          <li>this is third54</li>
          <li>this is third55</li>
          <li>this is third56</li>
          <li>this is third57</li>
          <li>this is third58</li>
          <li>this is third59</li>
          <li>this is third60</li>
          <li>this is third61</li>
          <li>this is third62</li>
          <li>this is third63</li>
          <li>this is third64</li>
          <li>this is third65</li>
          <li>this is third66</li>
          <li>this is third67</li>
          <li>this is third68</li>
          <li>this is third69</li>
          <li>this is third70</li>
          <li>this is third71</li>
          <li>this is third72</li>
          <li>this is third73</li>
          <li>this is third74</li>
          <li>this is third75</li>
          <li>this is third76</li>
          <li>this is third77</li>
          <li>this is third78</li>
          <li>this is third79</li>
          <li>this is third80</li>
          <li>this is third81</li>
          <li>this is third82</li>
          <li>this is third83</li>
          <li>this is third84</li>
          <li>this is third85</li>
          <li>this is third86</li>
          <li>this is third87</li>
          <li>this is third88</li>
          <li>this is third89</li>
          <li>this is third90</li>
          <li>this is third91</li>
          <li>this is third92</li>
          <li>this is third93</li>
          <li>this is third94</li>
          <li>this is third95</li>
          <li>this is third96</li>
          <li>this is third97</li>
          <li>this is third98</li>
          <li>this is third99</li>
          <li>this is third100</li>
        </ul>
      </div>
      <div ref="fourth">
        <ul>
          <img :src="imgUrl" alt="" />
          <li>this is fourth1</li>
          <li>this is fourth2</li>
          <li>this is fourth3</li>
          <li>this is fourth4</li>
          <li>this is fourth5</li>
          <li>this is fourth6</li>
          <li>this is fourth7</li>
          <li>this is fourth8</li>
          <li>this is fourth9</li>
          <img :src="imgUrl" alt="" @load="imgLoad" />
          <li>this is fourth10</li>
          <li>this is fourth11</li>
          <li>this is fourth12</li>
          <li>this is fourth13</li>
          <li>this is fourth14</li>
          <li>this is fourth15</li>
          <li>this is fourth16</li>
          <li>this is fourth17</li>
          <li>this is fourth18</li>
          <li>this is fourth19</li>
          <li>this is fourth20</li>
          <li>this is fourth21</li>
          <li>this is fourth22</li>
          <li>this is fourth23</li>
          <li>this is fourth24</li>
          <li>this is fourth25</li>
          <li>this is fourth26</li>
          <li>this is fourth27</li>
          <li>this is fourth28</li>
          <li>this is fourth29</li>
          <li>this is fourth30</li>
          <li>this is fourth31</li>
          <li>this is fourth32</li>
          <li>this is fourth33</li>
          <li>this is fourth34</li>
          <li>this is fourth35</li>
          <li>this is fourth36</li>
          <li>this is fourth37</li>
          <li>this is fourth38</li>
          <li>this is fourth39</li>
          <li>this is fourth40</li>
          <li>this is fourth41</li>
          <li>this is fourth42</li>
          <li>this is fourth43</li>
          <li>this is fourth44</li>
          <li>this is fourth45</li>
          <li>this is fourth46</li>
          <li>this is fourth47</li>
          <li>this is fourth48</li>
          <li>this is fourth49</li>
          <li>this is fourth50</li>
          <li>this is fourth51</li>
          <li>this is fourth52</li>
          <li>this is fourth53</li>
          <li>this is fourth54</li>
          <li>this is fourth55</li>
          <li>this is fourth56</li>
          <li>this is fourth57</li>
          <li>this is fourth58</li>
          <li>this is fourth59</li>
          <li>this is fourth60</li>
          <li>this is fourth61</li>
          <li>this is fourth62</li>
          <li>this is fourth63</li>
          <li>this is fourth64</li>
          <li>this is fourth65</li>
          <li>this is fourth66</li>
          <li>this is fourth67</li>
          <li>this is fourth68</li>
          <li>this is fourth69</li>
          <li>this is fourth70</li>
          <li>this is fourth71</li>
          <li>this is fourth72</li>
          <li>this is fourth73</li>
          <li>this is fourth74</li>
          <li>this is fourth75</li>
          <li>this is fourth76</li>
          <li>this is fourth77</li>
          <li>this is fourth78</li>
          <li>this is fourth79</li>
          <li>this is fourth80</li>
          <li>this is fourth81</li>
          <li>this is fourth82</li>
          <li>this is fourth83</li>
          <li>this is fourth84</li>
          <li>this is fourth85</li>
          <li>this is fourth86</li>
          <li>this is fourth87</li>
          <li>this is fourth88</li>
          <li>this is fourth89</li>
          <li>this is fourth90</li>
          <li>this is fourth91</li>
          <li>this is fourth92</li>
          <li>this is fourth93</li>
          <li>this is fourth94</li>
          <li>this is fourth95</li>
          <li>this is fourth96</li>
          <li>this is fourth97</li>
          <li>this is fourth98</li>
          <li>this is fourth99</li>
          <li>this is fourth100</li>
        </ul>
      </div>
    </scroll>
  </div>
</template>

<script>
import detailNavibar from "./children/detailNavibar";
import Scroll from "components/common/scroll/Scroll";

import { getImg } from "network/home";
export default {
  data() {
    return {
      offsetTops: [],
      imgUrl: "",
      positionY: Number
    }
  },
  components: {
    detailNavibar,
    Scroll,
  },
  methods: {
    itemClick(index) {
      // console.log(index + '--this is detail\'s')
      // console.log(this.$refs.first)
      this.$refs.scroll.scroll.scrollTo(0, -this.offsetTops[index], 200);
    },
    imgLoad() {
      this.$refs.scroll.scroll.refresh();//当图片加载完毕后刷新可滚动高度值

      this.offsetTops.push(this.$refs.first.offsetTop);//图片加载完毕后把各个子块的高度值存入数组
      this.offsetTops.push(this.$refs.second.offsetTop);
      this.offsetTops.push(this.$refs.third.offsetTop);
      this.offsetTops.push(this.$refs.fourth.offsetTop);
      console.log(this.offsetTops)
    },
    scroll(position){
        this.positionY = -position.y
        // console.log(this.offsetTops[0]

        if(this.positionY < this.offsetTops[1]){
            this.$refs.nav.currentIndex = 0
        }else if(this.positionY < this.offsetTops[2]){
            this.$refs.nav.currentIndex = 1
        }else if(this.positionY < this.offsetTops[3]){            
            this.$refs.nav.currentIndex = 2
        }else {
            this.$refs.nav.currentIndex = 3
        }
    }
  },
  mounted() {
    this.imgUrl =
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605006009624&di=21abb45a533e2fcce93fd3cc52dc9dcc&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1308%2F29%2Fc0%2F25038622_1377746019192.jpg";
    
  },
};
</script>

<style scoped>
.detail {
  height: 100vh;
}
.content {
  height: calc(100% - 93px);
  overflow: hidden;
}
.content img {
  width: 400px;
}
</style>