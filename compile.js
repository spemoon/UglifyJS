var fs  = require('fs'); 
var jsp = require("./uglify-js").parser;
var pro = require("./uglify-js").uglify;

// 批量读取文件，压缩之
function buildOne(fileIn, fileOut) {
    if (fileIn.length > 0) {
        var finalCode = [];
        var origCode = '';
        var ast = '';
        for (var i = 0,len = fileIn.length; i < len; i++) {
            origCode = fs.readFileSync(fileIn[i], 'utf8');
	        ast = jsp.parse(origCode); 
		    ast = pro.ast_mangle(ast); 
		    ast = pro.ast_squeeze(ast);
		
            finalCode.push(pro.gen_code(ast), ';');
        };
    }
	
    fs.writeFileSync(fileOut, finalCode.join(''), 'utf8');
}
//压缩首页js
buildOne(['../lib/slides.jquery.js', '../data/country.js', '../util/date.js', '../tpl/header_notice.tpl.js', '../tpl/notice_item_list.tpl.js', '../view/tpl.js', '../view/home.js'], '../compile/home.min.js');
//压缩创建活动js
buildOne(['../data/country.js', '../util/date.js', '../tpl/header_notice.tpl.js', '../tpl/notice_item_list.tpl.js', '../view/tpl.js', '../lib/calendar.js', '../lib/gmap.js', '../lib/swfupload.js', '../lib/upload.js', '../lib/jquery.imgareaselect.pack.js', '../view/create.js'], '../compile/create.min.js');
//压缩活动详细页面js
buildOne(['../data/country.js', '../util/date.js', '../tpl/header_notice.tpl.js', '../tpl/notice_item_list.tpl.js', '../tpl/feed.tpl.js', '../tpl/singlecomment.tpl.js', '../view/tpl.js', '../lib/swfupload.js', '../lib/upload.js', '../lib/photo.js', '../lib/photoPop.js', '../data/weather_city.js', '../view/show.js'], '../compile/show.min.js');
//压缩我的活动js
buildOne(['../data/country.js', '../util/date.js', '../tpl/header_notice.tpl.js', '../tpl/notice_item_list.tpl.js', '../view/tpl.js', '../view/mine.js'], '../compile/mine.min.js');
//压缩管理活动页面js
buildOne(['../data/country.js', '../util/date.js', '../tpl/header_notice.tpl.js', '../tpl/notice_item_list.tpl.js', '../view/tpl.js', '../view/manager.js'], '../compile/manager.min.js');
//压缩管理活动页面js
buildOne(['../data/country.js', '../util/date.js', '../tpl/header_notice.tpl.js', '../tpl/notice_item_list.tpl.js', '../view/tpl.js', '../lib/calendar.js', '../lib/gmap.js', '../view/update.js'], '../compile/update.min.js');
//压缩修改活动封面页面js
buildOne(['../data/country.js', '../util/date.js', '../tpl/header_notice.tpl.js', '../tpl/notice_item_list.tpl.js', '../view/tpl.js', '../lib/swfupload.js', '../lib/upload.js', '../lib/jquery.imgareaselect.pack.js', '../view/update_cover.js'], '../compile/cover.min.js');
