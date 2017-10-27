# marquee

> 跑马灯效果

##示例

```
 <div class="tf-marquee">
    <ul class="tf-marquee-box">
      <li>我是谁</li>
      <li>我从哪里来</li>
      <li>你猜啊</li>
    </ul>
  </div>
  <script>
   new Marquee({ele: document.querySelector('.tf-marquee-box')})
  </script>
```
##使用

>new Marquee(options)

##options

 options  | 含义         
 ---------|-----------  
 ele      | 绑定dom对象   
 duration | 停留时间       
 interval | 间隔运动时间  
 direction | 'up'或者'down' 

-参考vux marquee






