/**
 * 使用此文件时 需要引入barrage.js 并且 需先定义好以下变量
 * playerId 播放器ID
 * id 字幕对应着视频文件的ID
 * isLive 若isLive为true时需定义 appName	liveName
 * playTime 获取存放在cookie当中视频播放时间的 KEY值
 * 
 */



/**
 * 获取播放器方法
 * @param url	视频源,可以是HTTP 也可以是 RTMP
 * @param tiptime	提示点时间，如 30|60鼠标经过进度栏30秒，60秒会提示n指定的相应的文字
 * @param tipcontent 提示点文字，跟k配合使用，如 提示点1|提示点2
 * @param cnsrt 中文字幕HTTP路径 
 * @param ensrt 英文字幕HTTP路径 
 * @param headEndTime 视频直接g秒开始播放
 * @param tailStartTime	跳过片尾功能，j>0则从播放多少时间后跳到结束，<0则总总时间-该值的绝对值时跳到结束
 * @param bAdvertTime	视频开始前播放swf/图片时的时间，多个用竖线隔开
 * @param bAdvertCon  前置广告，swf/图片/视频，多个用竖线隔开，图片和视频要加链接地址    *****若有前置广告则不会去自动播放
 * @param bAdvertUrl  广告链接
 * @param pAdvertCon  暂停广告
 * @param pAdvertUrl  暂停广告链接
 * @param videoType 用来区分视频的类型 flv or mp4
 * @return
 */
function get_flash_var(url, tiptime, tipcontent, cnsrt, ensrt, headEndTime,
			tailStartTime, bAdvertTime, bAdvertCon, bAdvertUrl, pAdvertCon,
			pAdvertUrl,videoType) {
		//alert("cnsrt:"+cnsrt);
		//alert("ensrt:"+ensrt);
		var playUrl = url;
		var flashvars = {
			f : playUrl,//视频地址  可以支持HTTP的方式播放MP4文件
			a : '',//调用时的参数，只有当s>0的时候有效
			s : '0',//调用方式，0=普通方法（f=视频地址），1=网址形式,2=xml形式，3=swf形式(s>0时f=网址，配合a来完成对地址的组装)
			c : '0',//是否读取文本配置,0不是，1是
			x : '',//调用配置文件路径，只有在c=1时使用。默认为空调用的是ckplayer.xml
			i : '',//初始图片地址 
			d : pAdvertCon,//暂停时播放的广告，swf/图片,多个用竖线隔开，图片要加链接地址，没有的时候留空就行
			u : pAdvertUrl,//暂停时如果是图片的话，加个链接地址
			l : bAdvertCon,//前置广告，swf/图片/视频，多个用竖线隔开，图片和视频要加链接地址    *****若有前置广告则不会去自动播放
			r : bAdvertUrl,//前置广告的链接地址，多个用竖线隔开，没有的留空
			t : bAdvertTime,//视频开始前播放swf/图片时的时间，多个用竖线隔开
			y : '',//这里是使用网址形式调用广告地址时使用，前提是要设置l的值为空
			z : '',//缓冲广告，只能放一个，swf格式
			e : '0',//视频结束后的动作，0是调用js函数，1是循环播放，2是暂停播放并且不调用广告，3是调用视频推荐列表的插件，4是清除视频流并调用js功能和1差不多，5是暂停播放并且调用暂停广告
			v : '80',//默认音量，0-100之间
			p : '1',//视频默认0是暂停，1是播放，2是不加载视频
			h : videoType,//播放http视频流时采用何种拖动方法，=0不使用任意拖动，=1是使用按关键帧，=2是按时间点，=3是自动判断按什么(如果视频格式是.mp4就按关键帧，.flv就按关键时间)，=4也是自动判断(只要包含字符mp4就按mp4来，只要包含字符flv就按flv来)
			q : '',//视频流拖动时参考函数，默认是start
			m : '',//让该参数为一个链接地址时，单击播放器将跳转到该地址
			o : '',//当p=2时，可以设置视频的时间，单位，秒
			w : '',//当p=2时，可以设置视频的总字节数
			g : headEndTime,//视频直接g秒开始播放
			j : tailStartTime,//跳过片尾功能，j>0则从播放多少时间后跳到结束，<0则总总时间-该值的绝对值时跳到结束
			k : tiptime,//提示点时间，如 30|60鼠标经过进度栏30秒，60秒会提示n指定的相应的文字
			n : tipcontent,//提示点文字，跟k配合使用，如 提示点1|提示点2
			b : '0',
			wh : '16:9',//宽高比，可以自己定义视频的宽高或宽高比如：wh:'4:3',或wh:'1080:720'
			lv : '0',//是否是直播流，=1则锁定进度栏
			loaded : 'loadedHandler',//当播放器加载完成后发送该js函数loaded
			subtitle_cn : cnsrt,
			subtitle_en : ensrt,
			//以下为自定义的播放器参数用来在插件里引用的
			my_url : encodeURIComponent(window.location.href)
		//本页面地址
		//调用自定义播放器参数结束
		};

		return flashvars;
	}
/**
 * 加载播放器后调用的函数
 * @return
 */
function loadedHandler() {
	if (CKobject.getObjectById(playerId).getType())//说明使用html5播放器
	{
		CKobject.getObjectById(playerId).addListener('barrageShow','barrageShowHandler');
		if(!isLive)//不是直播才需要来监听时间
		{
			CKobject.getObjectById(playerId).addListener('time','barrageTimeHandler');
		}
		CKobject.getObjectById(playerId).addListener('play', playHandler);
	} 
	else
	{
		CKobject.getObjectById(playerId).addListener('barrageShow','barrageShowHandler');
		if(!isLive)//不是直播才需要来监听时间
		{
			CKobject.getObjectById(playerId).addListener('time','barrageTimeHandler');
		}
		CKobject.getObjectById(playerId).addListener('play', 'playHandler');
	}

	CKobject.ajax("post","utf-8","barrage.action?action=get&isLive="+isLive+"&id="+id+"&appName="+appName+"&liveName="+liveName+"",function(data){
		if(data)
		{
			var obj=eval('(' + data + ')');
			bgArr=obj['ckplayer'];
		}
	});
	
	if(isOpen){
		openOrclose(true);
	}
}

/**
 * 不断的将播放时间写入到cookie当中，并且如果打开了字幕 将会调用相应时间内的字幕内容
 * @param t
 * @return
 */
function timeHandler(t)
{
    if (t > -1)
    {
        SetCookie(playTime, t);
    }
   if(isOpen && t>0 && nTime!=parseInt(t) && bgArr)
   {
		nTime=parseInt(t);
		var j=bgArr[0];
		var s=bgArr[1];
		var nj=getNewArr(j,nTime);
		for(var i=0;i<nj.length;i++)
		{
			CKobject.getObjectById(playerId).loadBarrage(s[parseInt(nj[i])]);
		}
	}
    
}
/**
 * 播放器开始播放时调用函数，用来添加时间监听器
 * @return
 */
function playHandler()
{
    removePlayListener();
    CKobject.getObjectById(playerId).videoSeek(getCookie(playTime));
    addTimeListener();
}
/**
 * 增加时间监听函数,在播放时调用
 * @return
 */
function addTimeListener() 
{
    if (CKobject.getObjectById(playerId).getType()) {//说明使用html5播放器
        CKobject.getObjectById(playerId).addListener('time', timeHandler);
    }
    else {
        CKobject.getObjectById(playerId).addListener('time', 'timeHandler');
    }
}
/**
 * 移除时间监听函数
 * @return
 */
function removePlayListener() {
    if (CKobject.getObjectById(playerId).getType()) {//说明使用html5播放器
        CKobject.getObjectById(playerId).removeListener('play', playHandler);
    }
    else {
        CKobject.getObjectById(playerId).removeListener('play', 'playHandler');
    }
}





