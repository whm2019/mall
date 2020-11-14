<template>
  <div class="shop-cart">
    <cart-nav></cart-nav>
    <scroll class="content">
      <div>购物车</div>
      <ul>
        <li>goods1</li>
        <li>goods2</li>
        <li>goods3</li>
        <li>goods4</li>
        <li>goods5</li>
        <li>goods6</li>
        <li>goods7</li>
        <li>goods8</li>
        <li>goods9</li>
        <li>goods10</li>
        <li>goods11</li>
        <li>goods12</li>
        <li>goods13</li>
        <li>goods14</li>
        <li>goods15</li>
        <li>goods16</li>
        <li>goods17</li>
        <li>goods18</li>
        <li>goods19</li>
        <li>goods20</li>
        <li>goods21</li>
        <li>goods22</li>
        <li>goods23</li>
        <li>goods24</li>
        <li>goods25</li>
        <li>goods26</li>
        <li>goods27</li>
        <li>goods28</li>
        <li>goods29</li>
        <li>goods30</li>
        <li>goods31</li>
        <li>goods32</li>
        <li>goods33</li>
        <li>goods34</li>
        <li>goods35</li>
        <li>goods36</li>
        <li>goods37</li>
        <li>goods38</li>
        <li>goods39</li>
        <li>goods40</li>
        <li>goods41</li>
        <li>goods42</li>
        <li>goods43</li>
        <li>goods44</li>
        <li>goods45</li>
        <li>goods46</li>
        <li>goods47</li>
        <li>goods48</li>
        <li>goods49</li>
        <li>goods50</li>
        <li>goods51</li>
        <li>goods52</li>
        <li>goods53</li>
        <li>goods54</li>
        <li>goods55</li>
        <li>goods56</li>
        <li>goods57</li>
        <li>goods58</li>
        <li>goods59</li>
        <li>goods60</li>
        <li>goods61</li>
        <li>goods62</li>
        <li>goods63</li>
        <li>goods64</li>
        <li>goods65</li>
        <li>goods66</li>
        <li>goods67</li>
        <li>goods68</li>
        <li>goods69</li>
        <li>goods70</li>
        <li>goods71</li>
        <li>goods72</li>
        <li>goods73</li>
        <li>goods74</li>
        <li>goods75</li>
        <li>goods76</li>
        <li>goods77</li>
        <li>goods78</li>
        <li>goods79</li>
        <li>goods80</li>
        <li>goods81</li>
        <li>goods82</li>
        <li>goods83</li>
        <li>goods84</li>
        <li>goods85</li>
        <li>goods86</li>
        <li>goods87</li>
        <li>goods88</li>
        <li>goods89</li>
        <li>goods90</li>
        <li>goods91</li>
        <li>goods92</li>
        <li>goods93</li>
        <li>goods94</li>
        <li>goods95</li>
        <li>goods96</li>
        <li>goods97</li>
        <li>goods98</li>
        <li>goods99</li>
        <li>goods100</li>
      </ul>
    </scroll>
    <cart-buttom></cart-buttom>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

import CartNav from "./children/CartNav";
import CartButtom from "./children/CartButtom";

export default {
  components: {
    CartNav,
    Scroll,
    CartButtom,
  },
};
</script>

<style scoped>
.shop-cart {
  height: 100vh;
}
.content {
  height: calc(100% - 133px);
  /* margin-top: 44px; */
  overflow-y: hidden;
}
</style>