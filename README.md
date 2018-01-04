# gulp-rev-stamp
以最简单粗暴的方式，添加静态资源版本号，防止浏览器缓存

## 安装

```shell

$ npm install --save-dev gulp-rev-stamp

```

## 使用

```javascript
// gulpfile.js
const gulp = require('gulp');
const stamp = require('gulp-rev-stamp');

gulp.task("build", function() {
    gulp.src('./test/index.html')
    .pipe(stamp('$hehe$'))
    .pipe(gulp.dest('./test/dist'));
});

```
```html
<!--index.html-->
<!DOCTYPE html>
<html>
<head>
    <title>测试时间戳</title>
    <link rel="stylesheet" type="text/css" href="./main.css?v=$hehe$" />
</head>
<body>
<h1 >就是这么简单粗暴！</h1>
</body>
<script>
	var a = 'v=$hehe$'
</script>
</html>

```

## API
只有一个stamp函数，它只有一个参数，就是要替换版本号的占位符。比如上面的示例，\$hehe\$就是占位符。
就是这么简单粗暴，所以在使用的过程中，占位符的选择尽量避免一些常用的字符，以免误伤(*￣︶￣)

## License

MIT © [khadron](https://www.cnblogs.com/Khadron/)