$(function(){
	create_rtmp_host();
})

function addDialog(type)
{
	if (liveLength < liveCount || liveCount == "无限制")
	{
		if(type == 1)//普通直播
		{
			window.top.art.dialog
			(
				{
					id:'add',iframe:'add_live.html', title:AddLiveList, width:'800', height:'550', lock:true,window:'top'
				},
				function(){
					var d = window.top.art.dialog({id:'add'}).data.iframe;
					d.addLive();
					window.location.href = '/live_list.html';
					return false;
				},
				function()
				{
					window.top.art.dialog({id:'add'}).close();
				}
			);void(0);
		}
		else if(type == 3)//回播
		{
			window.top.art.dialog
			(
				{
					id:'addBack',iframe:'add_back_live.html', title:AddBackLiveList, width:'800', height:'550', lock:true,window:'top'
				},
				function(){
					var d = window.top.art.dialog({id:'addBack'}).data.iframe;
					d.addBackLive();
					window.location.href = '/live_back_list.html';
					return false;
				},
				function()
				{
					window.top.art.dialog({id:'addBack'}).close();
				}
			);void(0);
		}
		else if(type == 4)//轮播
		{
			window.top.art.dialog
			(
				{
					id:'addWhile',iframe:'add_while_live.html', title:AddWhileLiveList, width:'1000', height:'550', lock:true,window:'top'
				},
				function(){
					var d = window.top.art.dialog({id:'addWhile'}).data.iframe;
					d.addWhileLive();
					window.location.href = '/live_while_list.html';
					return false;
				},
				function()
				{
					window.top.art.dialog({id:'addWhile'}).close();
				}
			);void(0);
		}
		else if(type == 5)//导播
		{
			window.top.art.dialog
			(
				{
					id:'addGuid',iframe:'add_guid_live.html', title:AddGuidLiveList, width:'800', height:'550', lock:true,window:'top'
				},
				function(){
					var d = window.top.art.dialog({id:'addGuid'}).data.iframe;
					d.addGuidLive();
					window.location.href = '/live_guid_list.html';
					return false;
				},
				function()
				{
					window.top.art.dialog({id:'addGuid'}).close();
				}
			);void(0);
		}
	}
	else
	{
		window.top.art.dialog({id:"mesg",content:"当前频道数已超过权限所允许的最大限制,请重新授权或删除多余频道!",time:3});
	}
}

function addSubStream(id,type)
{
	if(type == 1)//普通
	{
		window.top.art.dialog
		(
			{
				id:'output',iframe:'live_substream.html?id='+id, title:AddLiveChildStream, width:'500', height:'400', lock:true,window:'top'
			},
			function(){
				var d = window.top.art.dialog({id:'output'}).data.iframe;
				d.addSubStream();
				window.location.href = '/live_list.html';
				return false;
			},
			function()
			{
				window.top.art.dialog({id:'output'}).close()
			}
		);void(0);

	}
	else if(type == 3)//回播
	{
		window.top.art.dialog
		(
			{
				id:'output',iframe:'live_substream.html?id='+id, title:AddLiveChildStream, width:'500', height:'400', lock:true,window:'top'
			},
			function(){
				var d = window.top.art.dialog({id:'output'}).data.iframe;
				d.addSubStream();
				window.location.href = '/live_back_list.html';
				return false;
			},
			function()
			{
				window.top.art.dialog({id:'output'}).close()
			}
		);void(0);

	}
	else if(type == 4)//轮播
	{
		window.top.art.dialog
		(
			{
				id:'output',iframe:'live_substream.html?id='+id, title:AddLiveChildStream, width:'500', height:'400', lock:true,window:'top'
			},
			function(){
				var d = window.top.art.dialog({id:'output'}).data.iframe;
				d.addSubStream();
				window.location.href = '/live_while_list.html';
				return false;
			},
			function()
			{
				window.top.art.dialog({id:'output'}).close()
			}
		);void(0);

	}
	else if(type == 5)//导播
	{
		window.top.art.dialog
		(
			{
				id:'output',iframe:'live_substream.html?id='+id, title:AddLiveChildStream, width:'500', height:'400', lock:true,window:'top'
			},
			function(){
				var d = window.top.art.dialog({id:'output'}).data.iframe;
				d.addSubStream();
				window.location.href = '/live_guid_list.html';
				return false;
			},
			function()
			{
				window.top.art.dialog({id:'output'}).close()
			}
		);void(0);
	}

}

function liveReplace(id,type)
{
	if(type == 1)//普通
	{
		window.top.art.dialog
		(
			{
				id:'liveReplace',iframe:'live_replace_list.html?id='+id, title:AddLiveSpots, width:'900', height:'600', lock:true,window:'top'
			},
			function(){
				var d = window.top.art.dialog({id:'liveReplace'}).data.iframe;
				window.top.art.dialog({id:'liveReplace'}).close()
				window.location.href = '/live_list.html';
				return false;
			},
			function()
			{
				window.top.art.dialog({id:'liveReplace'}).close()
			}
		);void(0);
	}
	else if(type == 3)//回播
	{
		window.top.art.dialog
		(
			{
				id:'liveReplace',iframe:'live_replace_list.html?id='+id, title:AddLiveSpots, width:'900', height:'600', lock:true,window:'top'
			},
			function(){
				var d = window.top.art.dialog({id:'liveReplace'}).data.iframe;
				window.top.art.dialog({id:'liveReplace'}).close()
				window.location.href = '/live_back_list.html';
				return false;
			},
			function()
			{
				window.top.art.dialog({id:'liveReplace'}).close()
			}
		);void(0);
	}
}


function playUrl()
{
	var ids = "";
	$("#main_body :checkbox").each(function(i)
	{
		if($(this).attr("checked"))
		{
			var liveId = $(this).val();
			ids+= liveId + "@";
		}
	})
	
	//去掉最后一个 @
	ids = ids.substring(0,ids.lastIndexOf("@"));	
	
	if(ids == "")
	{
		window.top.art.dialog({id:'dg_test34243', content:NoChoice+'!',time:1});
		return false;
	}
		
	window.top.art.dialog
	(
		{
			id:'playUrl',iframe:"/admin/live/generatePlayUrl.jsp?ids="+ids+"", title:SelectTheProtocolToGenerate_URL, width:'500', height:'350', lock:true,window:'top'
		},
		function(){
			
			window.top.art.dialog({id:'playUrl'}).close();
			return false;
		}, 
		function()
		{
			window.top.art.dialog({id:'playUrl'}).close()
		}
	);void(0);	
}

function mobilePlay(id,name)
{
	window.top.art.dialog
	(
		{
			id:'output',iframe:'live_qrcode.html?id='+id+"&name="+name, title:MobilePlay, width:'500', height:'450', lock:true,window:'top'
		},
		function(){
			window.top.art.dialog({id:'output'}).close()
			return false;
			}, 
		function()
		{
			window.top.art.dialog({id:'output'}).close()
		}
	);void(0);

}

function editDialog(id,type)
{
	if(type == 1)
	{
		window.top.art.dialog
		(
			{
				id:'edit',iframe:'edit_live.html?id='+id, title:EditLive, width:'800', height:'550', lock:true
			},
			function(){
				var d = window.top.art.dialog({id:'edit'}).data.iframe;
				d.editLive();
				window.location.href = '/live_list.html';
				return false;
			},
			function()
			{
				window.top.art.dialog({id:'edit'}).close();
			}
		);void(0);
	}
	else if(type == 3)
	{
		window.top.art.dialog
		(
			{
				id:'editBack',iframe:'edit_back_live.html?id='+id, title:EditBackLive, width:'800', height:'550', lock:true
			},
			function(){
				var d = window.top.art.dialog({id:'editBack'}).data.iframe;
				d.editBackLive();
				window.location.href = '/live_back_list.html';
				return false;
			},
			function()
			{
				window.top.art.dialog({id:'editBack'}).close();
			}
		);void(0);
	}
	else if(type == 4)
	{
		window.top.art.dialog
		(
			{
				id:'editWhile',iframe:'edit_while_live.html?id='+id, title:EditWhileLive, width:'1000', height:'550', lock:true
			},
			function(){
				var d = window.top.art.dialog({id:'editWhile'}).data.iframe;
				d.editWhileLive();
				window.location.href = '/live_while_list.html';
				return false;
			},
			function()
			{
				window.top.art.dialog({id:'editWhile'}).close();
			}
		);void(0);
	}
	else if(type == 5)
	{
		window.top.art.dialog
		(
			{
				id:'editGuid',iframe:'edit_guid_live.html?id='+id, title:EditGuidLive, width:'800', height:'550', lock:true
			},
			function(){
				var d = window.top.art.dialog({id:'editGuid'}).data.iframe;
				d.editGuidLive();
				window.location.href = '/live_guid_list.html';
				return false;
			},
			function()
			{
				window.top.art.dialog({id:'editGuid'}).close();
			}
		);void(0);
	}
}

function delDialog(id)
{

}

function timeConfig(id,right)
{
	$.ajax({
		type: "GET",
		url: locationHref+"/rest/admin/system/webServer",//获取平台上传地址
		success: function (data) {
			var obj = data;
			if (obj != null)
			{
				var httpEnable = obj.httpEnable;
				if(httpEnable == true)
				{
					redirect('live_record_time_plat.html?id='+id+"&right="+right);
				}
				else
				{
					redirect('live_record_time.html?id='+id+"&right="+right);
				}
			}
		},
		error:function(data)
		{
			var errorObj = data;
			var status = data.status;
			var statusText = data.statusText
			if(status == 401 || status == 400)
			{
				top.location.href = "login.html";
			}
			else if(status == 409)
			{
				window.top.art.dialog({id:"mesg",content:statusText+"!",time:2});
			}
		}
	})
}

function tvguid(id,liveName)
{
	redirect("/admin/live/tvguid/tVGuidList.action?liveName="+liveName+"&liveId="+id);	
}

function visit(id,liveName)
{
	redirect("/admin/live/visit/visitList.action?liveName="+liveName+"&liveId="+id);	
}

function furl(id,type)
{
	if(type == 1)//普通
	{
		window.top.art.dialog
		(
			{
				id:'furl',iframe:'live_furls.html?id='+id, title:ForwardingFlowConfiguration, width:'500', height:'350', lock:true
			},
			function(){
				var d = window.top.art.dialog({id:'furl'}).data.iframe;
				d.addFurl();
				window.top.art.dialog({id:'furl'}).close()
				window.location.href = '/live_list.html';
				return false;
			},
			function()
			{
				window.top.art.dialog({id:'furl'}).close()
			}
		);void(0);
	}
	else if(type == 3)//回播
	{
		window.top.art.dialog
		(
			{
				id:'furl',iframe:'live_furls.html?id='+id, title:ForwardingFlowConfiguration, width:'500', height:'350', lock:true
			},
			function(){
				var d = window.top.art.dialog({id:'furl'}).data.iframe;
				d.addFurl();
				window.top.art.dialog({id:'furl'}).close()
				window.location.href = '/live_back_list.html';
				return false;
			},
			function()
			{
				window.top.art.dialog({id:'furl'}).close()
			}
		);void(0);
	}
	else if(type == 4)//轮播
	{
		window.top.art.dialog
		(
			{
				id:'furl',iframe:'live_furls.html?id='+id, title:ForwardingFlowConfiguration, width:'500', height:'350', lock:true
			},
			function(){
				var d = window.top.art.dialog({id:'furl'}).data.iframe;
				d.addFurl();
				window.top.art.dialog({id:'furl'}).close()
				window.location.href = '/live_while_list.html';
				return false;
			},
			function()
			{
				window.top.art.dialog({id:'furl'}).close()
			}
		);void(0);
	}
	else if(type == 5)//导播
	{
		window.top.art.dialog
		(
			{
				id:'furl',iframe:'live_furls.html?id='+id, title:ForwardingFlowConfiguration, width:'500', height:'350', lock:true
			},
			function(){
				var d = window.top.art.dialog({id:'furl'}).data.iframe;
				d.addFurl();
				window.top.art.dialog({id:'furl'}).close()
				window.location.href = '/live_guid_list.html';
				return false;
			},
			function()
			{
				window.top.art.dialog({id:'furl'}).close()
			}
		);void(0);
	}
}

/**
 * 每3秒一次进行所有直播频道的码率的刷新
 * @return
 */
function refreshStream()
{
	do_refresh_stream()
	
	setInterval(function()
	{
		do_refresh_stream()
		
	},3000)	
			
}
/**
 * 刷新码率的实现方法
 * @return
 */
function do_refresh_stream()
{
	$.ajax({
		type:"GET",
		url:locationHref+"/rest/admin/lives/bitRate/get",//获取直播频道码流大小
		async: false,
		dataType:"json",
		  success: function(data)
		  {
			  if(data != "")
			  {
				var obj = data;
				if(obj == null)
					return ;
				var size = obj.length;
				for(var i=0;i<size;i++)
				{
					var liveId = obj[i].id;
					var appName = obj[i].appName;
					var liveName = obj[i].liveName;
						liveName = liveName.replaceAll("/","_");
					var bitRate = obj[i].bitRate;
					var name = appName+"_"+liveName;
					$("#stream_"+name).html(bitRate+"kb");

				}
			  }
		  },
		error:function(data)
		{
			var errorObj = data;
			var status = data.status;
			var statusText = data.statusText
			if(status == 401 || status == 400)
			{
				top.location.href = "login.html";
			}
		}
	  })


	$("[name='replace_vod']").each(function(){
		var id = $(this).attr("id");
			id = id.substring(id.lastIndexOf("_")+1,id.length);

		$.ajax({
			type: "GET",
			url:locationHref+"/rest/admin/lives/"+id+"/replace",//获取一个直播频道的插播
			success: function (data)
			{
				var replaces = $.parseJSON(data);
				var replace_status_main = "";
				var replace_status_item = "";
				var replace_status_defined;
				var replace_status = "";
				if(replaces != null)
				{
					for(var x=0;x<replaces.length;x++)
					{
						var replacelistId = replaces[x].listId;
						var replacename = replaces[x].name;
						var replacestartTime = replaces[x].startTime;
						var replacestopTime = replaces[x].stopTime;
						var replacelist_status = replaces[x].status;
						replace_status_defined = replacelist_status;
						if(replacelist_status)
						{
							replace_status_main = replacename;
							var replaceitems = replaces[x].items;
							if(replaceitems != null)
							{
								for(var y=0;y<replaceitems.length;y++)
								{
									var replaceitemsName = replaceitems[y].name;
									var replaceitemsid = replaceitems[y].id;
									var replaceitemsstatus = replaceitems[y].status;
									var replaceitemsvalue = replaceitems[y].value;
									var replaceitemstype = replaceitems[y].type;
									if(replaceitemsstatus)
									{
										replace_status_item = replaceitemsName;
									}
								}
							}
						}
					}

					var replace_title = ""+ReplaceNo+"";
					var replace_img = "images/icons/replace.png";
					if(replace_status_main != "")
					{
						replace_title = ""+ReplaceList+":"+replace_status_main+" &#10;"+ReplaceFile+":"+replace_status_item;
						replace_img = "images/icons/replace.gif";
					}

					$("#replace_vod_"+id).empty();
					$("#replace_vod_"+id).html('<img src="'+replace_img+'"  title="'+replace_title+'">');
				}
			},
			error:function(data)
			{
				var errorObj = data;
				var status = data.status;
				var statusText = data.statusText
				if(status == 401 || status == 400)
				{
					top.location.href = "login.html";
				}
			}
		})
	})
}



function create_all_show()
{
	//var rtmp_ip = $("#rtmp_ip").val();
	var rtmp_ip = window.location.hostname;
	var rtmp_port = $("#rtmp_port").val();
	
	var flag = $("#selector").attr("checked");
	if(flag)
	{
		$("#main_body :checkbox").each(function(i){
			var id = $(this).attr("id");
			var alias = $(this).attr("name");
			$(this).attr("checked","checked");
			var url = "rtmp://"+rtmp_ip+":"+rtmp_port+"/"+alias;
			build_dom(url,id,alias);
		})
	}
	else
	{
		$("#main_body :checkbox").each(function(i){
			var id = $(this).attr("id");
			$(this).removeAttr("checked");
			$("#outer"+id).remove();
		})
	
	}

}

function show_pre(id,alias)
{
	//var rtmp_ip = $("#rtmp_ip").val();
	var rtmp_ip = window.location.hostname;
	var rtmp_port = $("#rtmp_port").val();
	
	var flag = $("#box"+id).attr("checked");
	if(flag)
	{
		var url = "rtmp://"+rtmp_ip+":"+rtmp_port+"/"+alias;
		build_dom(url,id,alias);
		
		setTimeout(function(){
			$("#box"+id).attr("checked","true")
			},100)
	}
	else
	{
		$("#outer"+id).remove();

		setTimeout(function(){
			$("#box"+id).removeAttr("checked")
			},100)
	}
}
function ts_hls_oper(ts_enable,hls_enable,fw_enable)
{
	/*
	var ts_enable = '${beanLic.supportTS}';
	var hls_enable = '${beanLic.supportHLS}';
	var fw_enable = '${beanLic.supportRtmpFW}';
	*/
	if(ts_enable == "true")
	{
		$("div[name='ts_oper']").css("display","inline");
	}
	if(hls_enable == "true")
	{
		$("div[name='hls_oper']").css("display","inline");
	}
	if(fw_enable == "true")
	{
		$("div[name='fw_oper']").css("display","inline");
	}
}

var liveLength = 0;
function build_whole_page(channel_type,total_count)
{
	var page_count = 0;
	var page_size = 0;

	if(channel_type == undefined)
	{
		channel_type = 0;
	}
	window.top.art.dialog({id:"wait",content:BuildingPage+"...<img width=20 src='images/loading.gif'>"});
	$("#main_body").empty();
	$.ajax({
		type:"GET",
		url:locationHref+"/rest/admin/lives",//获取直播频道
		async: false,
		success:function(data)
		{
			var obj = null;
			try
			{
				obj = data;
				liveLength = obj.length;
			}
			catch(e)
			{
				window.top.art.dialog({id:"mesg",content:FailedToGetData+"!",time:1});
				window.top.art.dialog({id:"wait"}).close();
				return ;
			}

			for(var i=0;i<obj.length;i++)
			{
				var right = obj[i]["right"];
				if(right == channel_type)
				{
					var length = obj.length;
					var id = obj[i]['id'];
					var name = obj[i]['name'];
					var name1 = name.replaceAll("/","_");
					var appName = obj[i]['appName'];
					var alias = obj[i]['alias'];
					var createdDate = obj[i]['createdDate'];
					var dataPath = obj[i]["dataPath"];
					var liveStatus = obj[i]["liveStatus"];
					var publishStatus = obj[i]["publishStatus"];
					var recordEnabled = obj[i]["recordEnabled"];
					var recordStatus = obj[i]["recordStatus"];
					var recordType = obj[i]["recordType"];
					var enableHLS = obj[i]["enableHLS"];
					var enableTS = obj[i]["enableTS"];
					var tsAddress = obj[i]["tsAddress"];
					var format = obj[i]["format"];
					var tsStatus = obj[i]["tsStatus"];
					var hlsStatus = obj[i]["hlsStatus"];
					var push = obj[i]["push"];
					var lazyPull = obj[i]["lazyPull"];
					var recordAppend = obj[i]["recordAppend"];
					var flvKeyframe = obj[i]["flvKeyframe"];
					var playback = obj[i]["playback"];
					var keepPlaybackDays = obj[i]["keepPlaybackDays"];
					var liveProperty = obj[i]["liveProperty"];
					var ip = obj[i]["ip"];
					var type = obj[i]["type"];
					var outputMode = obj[i]["outputMode"];
					var intervalTime = obj[i]["intervalTime"];
					var timeToApend = obj[i]["timeToApend"];

					//获取转发流
					var forwardUrls = obj[i]["forwardUrls"];
					//获取子码流
					var outputs = obj[i]["outputs"];
					var replaces = obj[i]["replaces"];

					//初使用化流来源
					var stream_from = "";
					if(type == 0 && ip != "")
						stream_from = DirectCurrentSource+ ":"+Encoder+ ip ;
					else if(type == 1)
						stream_from = DirectCurrentSource+ ":"+PullFlow + ip;
					else if(type == 2)
						stream_from = DirectCurrentSource+ ":"+TranscodingSubStream +ip;
					else if(type == 3)
						stream_from = DirectCurrentSource+ ":"+InsertFlow +ip;
					//初使化频道类型
					var live_channel_type = "";

					if(right == 1 || right ==0)
						live_channel_type = GeneralLive;
					else if(right == 3)
						live_channel_type = ReturnBroadcastMode;
					else if(right == 4)
						live_channel_type = CarouselMode;
					else if(right == 5)
						live_channel_type = GuidedMode;
					//初使化录像方式
					var record_type = "";
					if(recordType == 0)
						record_type = Manual;
					else if(recordType ==1)
						record_type = Timing;
					else if(recordType ==2)
						record_type = StreamingVideo;
					//初使化正在直播图片显示状态
					var live_status = "";
					if(liveStatus)
						live_status = '<img src="images/icons/live.gif" title="'+BeingBroadcastLive+'">&nbsp';
					else
						live_status = '<img src="images/icons/live.png" title="'+NotLiveState+'">&nbsp';
					//初使化录像图片显示状态
					var record_status = "";
					if(recordStatus)
						record_status = '<img src="images/icons/record.gif" title="'+BeingVideo+'">&nbsp';
					else
						record_status = '<img src="images/icons/record.png" title="'+NoVideo+'">&nbsp';
					//初使化正在转发流图片显示状态以及正在转发流的列表
					var forward_urls = "";
					var forward_status = "";
					if(forwardUrls != null)
					{
						for(var j=0;j<forwardUrls.length;j++)
						{
							var status = forwardUrls[j]["status"];
							var furl = forwardUrls[j]["url"];
							if(status == true)
							{
								forward_urls+=furl;
								forward_urls+="&nbsp;&nbsp;";
							}
						}
					}
					if(forward_urls != "")
						forward_status = '<img src="images/icons/stream.gif" title="'+IsForwardingFlow+':'+forward_urls+'">&nbsp';
					else
						forward_status = '<img src="images/icons/stream.png" title="'+NoForwardingStream+'">&nbsp';

					//初使化TS图片显示状态
					var ts_status = "";
					if(tsStatus)
						ts_status = '<img src="images/icons/ts.gif" title="'+TS_IsForwardingFlow+':'+tsAddress+'">&nbsp';
					else
						ts_status = '<img src="images/icons/ts.png" title="'+TS_NoFlow+'">&nbsp';
					//初使化HLS图片显示状态
					var hls_status = "";
					if(hlsStatus)
						hls_status = '<img src="images/icons/hls.gif" title="'+HLS_IsForwardingFlow+'">&nbsp';
					else
						hls_status = '<img src="images/icons/hls.png" title="'+HLS_NoFlow+'">&nbsp';

					//初使化定录功能
					var time_config = "";
					//在直播频道模式为 回播,轮播时不启用定录功能
					//录像方式设置为手动录像,有流即录像时不启用定录功能
					if(right != 3 & right != 4 && recordType != 2 && recordType != 0)
					{
						time_config = '<a href="javascript:;" onclick="timeConfig('+id+','+right+')"  class="ext_btn ext_btn_submit ext_btn_size" title="'+TimingVideos+'">'+TimingVideo+'</a>&nbsp';
					}

					//初使化轮播功能
					var while_play = "";
					//if(right == 4)
						//while_play = '<a href="javascript:;" onclick="whilePlay('+id+','+right+')" class="ext_btn ext_btn_submit ext_btn_size" title="'+VirtualLive+'">'+Carousel+'</a>&nbsp';
					//初使化导播功能
					var guid_play = "";
					if(right == 5)
						guid_play = '<a href="live_guid_play.html?id='+id+'" target="_blank"  class="ext_btn ext_btn_submit ext_btn_size" title="'+Director+'">'+Director+'</a>&nbsp';
					//初使化停录和开录按钮功能
					var record_button = "";
					//liveProperty 为1时候，允许推流，不允许发布，不允许录像；为3时候，不允许推流，不允许发布，不允许录像
					if(liveProperty !=1 && liveProperty != 3 && recordEnabled)
					{
						// 直播组为访谈,回播,轮播,定时时,录像按钮不能使用
						if(right != 3 && right != 4 && recordType!=1)
						{
							if(recordStatus)
								record_button = '<a href="javaScript:;" onclick="stop_record(\''+appName+'\',\''+name+'\',\''+right+'\')" class="ext_btn ext_btn_submit ext_btn_size">'+StopVideo+'</a>&nbsp';
							else
								record_button = '<a href="javaScript:;" onclick="start_record(\''+appName+'\',\''+name+'\',\''+right+'\')" class="ext_btn ext_btn_submit ext_btn_size">'+StartRecording+'</a>&nbsp';
						}
					}
					var replace_play = "";
					if(right != 4 & right != 5)
					{
						replace_play = '<a href="javascript:;" onclick="liveReplace('+id+','+right+')" class="ext_btn ext_btn_submit ext_btn_size" title="'+LiveSpots+'">'+Spots+'</a>&nbsp';
					}
					//分组
					var group_opr = '<a href="javascript:;" onclick="add_group('+id+','+right+')" class="ext_btn ext_btn_submit ext_btn_size" title="'+Grouping+'">'+Grouping+'</a>&nbsp';
					//预告
					var tshift_str ='';
					if(right == 1)
					{
						tshift_str = '<a href="javascript:;" onclick="tshiftList('+id+','+right+')" class="ext_btn ext_btn_submit ext_btn_size" title="'+Trailer+'">'+Trailer+'</a>&nbsp';
					}

					//初使化是否含有子码流
					var sub_stream = "";
					if(outputs != null)
					{
						for(var jj=0;jj<outputs.length;jj++)
						{
							var width = outputs[jj]["width"];
							var height = outputs[jj]["height"];
							var frameRate = outputs[jj]["frameRate"];
							var vBitRate = outputs[jj]["vBitRate"];
							var sub_stream_name =  outputs[jj]["name"];
							var sub_stream_liveStatus = outputs[jj]["liveStatus"];

							var substream_create_type = "";
							var substream_live_status = "";
							if(outputMode == 0)
							{
								substream_create_type = Type+":"+PushMode+"&nbsp;......";
							}
							else
							{
								substream_create_type =  Type+':'+PullMode+'&nbsp;width:'+width+';height:'+height+';frameRate:'+frameRate+';bitRate:'+vBitRate+'';
							}
							if(sub_stream_liveStatus)
								substream_live_status = '<img src="images/icons/live.gif" title="'+BeingBroadcastLive+'">&nbsp';
							else
								substream_live_status = '<img src="images/icons/live.png" title="'+NotLiveState+'">&nbsp';

							sub_stream+='<tr height="16" id="40" >';
							sub_stream+='<td  align="center">';
							sub_stream+='<input title="'+sub_stream_liveStatus+'" value="'+id+'" type="checkbox" name="'+appName+'/'+name+'/'+sub_stream_name+'" id="box'+(i+1)+'_'+(jj+1)+'" onclick="show_pre(\''+(i+1)+'_'+(jj+1)+'\',\''+appName+'/'+name+'/'+sub_stream_name+'\')"/>';
							sub_stream+='</td>';
							sub_stream+='<td  align="left">	';
							sub_stream+='<div style="float: left;">';
							sub_stream+='└────';
							sub_stream+='</div>';
							sub_stream+='<div style="float: left;margin-left: 10px; color:#000;">';
							sub_stream+='<p style="text-align: left;color: #145FA8;overflow:hidden; ">'+appName+'/'+name+'/'+sub_stream_name+'';
							sub_stream+='</p>';
							sub_stream+='</div>';
							sub_stream+='</td>';
							sub_stream+='<td  align="center">';
							sub_stream+='<p style="text-align: left;">'+StreamSize+':<span id="stream_'+appName+'_'+name1+'_'+sub_stream_name+'">...</span></p>';
							sub_stream+='</td>';
							sub_stream+='<td  align="left" colspan="2">';
							sub_stream+=''+substream_live_status+'';
							sub_stream+=''+substream_create_type+'';
							sub_stream+='</td>';
							sub_stream+='<td  align="left">';
							sub_stream+='<a target="_blank" href="play_live.html?id='+id+'&substream='+sub_stream_name+'&right='+right+'" id="show" title="'+ComputerWatch+'" class="ext_btn ext_btn_submit ext_btn_size">'+Computer+'</a>&nbsp';
							sub_stream+='<a  href="javascript:;" onclick="mobilePlay(\''+id+'\',\''+sub_stream_name+'\')" title="'+MobileViewing+'" class="ext_btn ext_btn_submit ext_btn_size">'+MobilePhone+'</a>';
							sub_stream+='<td  align="left">';
							sub_stream+='<a href="javascript:;" onclick="delSubStream(\''+id+'\',\''+sub_stream_name+'\')" title="'+Delete+'" class="sp_a_but_cir sp_a_but_padding btn btn-danger">'+Delete+'</a>';
							sub_stream+='</td>';
							sub_stream+='</tr>';
						}
					}

					var replace_status_main = "";
					var replace_status_item = "";
					var replace_status_defined;
					var replace_status = "";
					if(replaces != null)
					{
						for(var x=0;x<replaces.length;x++)
						{
							var replacelistId = replaces[x].listId;
							var replacename = replaces[x].name;
							var replacestartTime = replaces[x].startTime;
							var replacestopTime = replaces[x].stopTime;
							var replacelist_status = replaces[x].status;
							replace_status_defined = replacelist_status;
							if(replacelist_status)
							{
								replace_status_main = replacename;
								var replaceitems = replaces[x].items;
								if(replaceitems != null)
								{
									for(var y=0;y<replaceitems.length;y++)
									{
										var replaceitemsName = replaceitems[y].name;
										var replaceitemsid = replaceitems[y].id;
										var replaceitemsstatus = replaceitems[y].status;
										var replaceitemsvalue = replaceitems[y].value;
										var replaceitemstype = replaceitems[y].type;
										if(replaceitemsstatus)
										{
											replace_status_item = replaceitemsName;
										}
									}
								}
							}
						}

						if(right == 1 || right == 3 && replace_status_defined != undefined)
						{
							var replace_title = ""+ReplaceNo+"";
							var replace_img = "images/icons/replace.png";
							if(replace_status_main != "")
							{
								replace_title = ""+ReplaceList+":"+replace_status_main+" &#10;"+ReplaceFile+":"+replace_status_item;
								replace_img = "images/icons/replace.gif";
							}
							replace_status = '<div style="display: inline-block;vertical-align:top;line-height: 25px;height: 25px;" name="replace_vod" id="replace_vod_'+id+'">';
							replace_status += '<img src="'+replace_img+'"  title="'+replace_title+'">&nbsp;</div>';
						}
					}
					/*else
					{
						if(right == 1 || right == 3)
						{
							replace_status = '<img src="images/icons/live.png" title="未添加插播任务">&nbsp';
						}
					}*/


					//整个dom构建数
					var dom = '<tr>';
					dom+= '<td align="center">';
					dom+= '<input  title="'+liveStatus+'" value="'+id+'" type="checkbox" name="'+appName+'/'+name+'" id="box'+(i+1)+'" onclick="show_pre('+(i+1)+',\''+appName+'/'+name+'\')"/>';
					dom+= '</td>';
					dom+= '<td  align="center">';
					dom+= '<div style="float: left;">';
					if(right == 1)
					{
						dom+= '<img src="images/live_icon.png" width="50px" height="50px"  />';
					}
					else if(right == 3)
					{
						dom+= '<img src="images/hb.jpg" width="50px" height="50px"  />';
					}
					else if(right == 4)
					{
						dom+= '<img src="images/boardcast.jpg" width="50px" height="50px"  />';
					}
					else if(right == 5)
					{
						dom+= '<img src="images/db.jpg" width="50px" height="50px"  />';
					}
					dom+= '</div>';
					dom+= '<div style="float: left;margin-left: 10px; color:#000;">';
					dom+= '<p style="text-align: left;color: #145FA8;overflow:hidden; ">'+appName+'/'+name+'</p>';
					dom+= '<p style="text-align: left;">'+Alias+':'+alias+'</p>';
					dom+= '<p style="text-align: left;">'+stream_from+'</p>';
					dom+= '<td align="left">';
					dom+= '<p style="text-align: left;">'+ChannelType+':'+live_channel_type+'</p>';
					dom+= '<p style="text-align: left;">'+VideoMode+':'+record_type+'</p>';
					//dom+= '<p style="text-align: left;">'+StreamSize+':<span id="stream_'+appName+'_'+name+'">...</span></p>	';
					dom+= '<p style="text-align: left;">'+StreamSize+':<span id="stream_'+appName+'_'+name1+'">...</span></p>	';
					dom+= '</td>';
					dom+= '<td  align="left">';
					dom+= ''+live_status+'';
					dom+= ''+record_status+'';
					dom+= ''+forward_status+'';
					dom+= '<div name="ts_oper" style="display:none">';
					dom+= ''+ts_status+'';
					dom+= '</div>';
					dom+= '<div name="hls_oper" style="display:none">';
					dom+= ''+hls_status+'';
					dom+= '</div>';
					dom+= ''+replace_status+'';
					dom+= '</td>';
					dom+= '<td  align="left">';
					dom+= ''+time_config+'';
					dom+= '<div name="fw_oper" style="display:inline">';
					dom+= '<a href="javascript:;" onclick="furl('+id+','+right+')" class="ext_btn ext_btn_submit ext_btn_size" title="'+ForwardingStream+'">'+Bypass+'</a>&nbsp';
					dom+= '</div>';
					dom+= '<a href="javascript:;" onclick="addSubStream('+id+','+right+')" class="ext_btn ext_btn_submit ext_btn_size" title="'+AddSubStream+'">'+Subflow+'</a>&nbsp';
					dom+= ''+replace_play+'';
					dom+= ''+while_play+'';
					dom+= ''+guid_play+'';
					dom+= ''+tshift_str+'';
					//dom+= ''+group_opr+'';
					dom+= '</td>';
					dom+= '<td  align="left">';
					dom+= '<a target="_blank" href="play_live.html?id='+id+'&right='+right+'" id="show" title="'+ComputerWatch+'" class="ext_btn ext_btn_submit ext_btn_size">'+Computer+'</a>&nbsp';
					dom+= '<a  href="javascript:;" onclick="mobilePlay('+id+')" title="'+MobileViewing+'" class="ext_btn ext_btn_submit ext_btn_size" title="'+MobileViewing+'">'+MobilePhone+'</a>&nbsp';
					dom+= '</td>';
					dom+= '<td  align="left">';
					dom+= '<a href="javascript:;" onclick="delDialog('+id+')" title="'+Delete+'" class="ext_btn_red ext_btn_size">'+Delete+'</a>&nbsp';
					dom+= '<a href="javascript:;" onclick="editDialog('+id+','+right+')" id="edit" title="'+Edit+'" class="ext_btn ext_btn_submit ext_btn_size">'+Edit+'</a>&nbsp';
					dom+= ''+record_button+'';
					dom+= '</td>';
					dom+= '</tr>';

					dom+= ''+sub_stream+'';

					if(channel_type == 0)
					{
						if(i>=(total_count-1)*10 && i<(total_count-1)*10+10)
						{
							$("#main_body").append(dom);
						}
					}
					else if(right == channel_type)
					{
						if(page_size>=(total_count-1)*10 &&  page_size <(total_count-1)*10+10)
						{
							$("#main_body").append(dom);
						}
						page_size++;
					}
				}
			}
		
			/*page_size = 100;
			 total_count = 2;*/
			page_count = Math.ceil(page_size/10);
			var page_dom = '<div class="pager Library_Page" >';
			page_dom+='<span class="Library_Page_1">'+InTotal+'<font color="red">'+page_count+'</font>&nbsp;'+Page+',<font color="red">'+page_size+'</font>'+NumberOfData+'&nbsp;&nbsp;</span>';
			page_dom+='<a href="javascript:void(0)"  onclick="build_whole_page('+channel_type+',1)">'+HomePage+'</a>';
			if(total_count-1>0)
			{
				page_dom+='<a href="javascript:void(0)" onclick="build_whole_page('+channel_type+','+(total_count-1)+')">'+PreviousPage+'</a>';
			}
			var page_arr = calculatePageIndex(total_count,page_count,5);
			for(var i=page_arr[0];i<=page_arr[1];i++)
			{
				if(i == total_count)
				{
					page_dom+='<a href="javascript:void(0)" style="background-color: #3EAFE0" class="Library_Page_NoPage">'+i+'</a>';
				}
				else
				{
					page_dom+='<a href="javascript:void(0)" onclick="build_whole_page('+channel_type+','+i+')" class="Library_Page_NoPage">'+i+'</a>';
				}
			}
			if(total_count+1<=page_count)
			{
				page_dom+='<a href="javascript:void(0)" onclick="build_whole_page('+channel_type+','+(total_count+1)+')">'+NextPage+'</a>';
			}
			page_dom+='<a href="javascript:void(0)" onclick="build_whole_page('+channel_type+','+page_count+')">'+Shadowe+'</a>';
			page_dom+='</div>';

			$("#pager_outer").html(page_dom);
		},
		error:function(data)
		{
			var errorObj = data;
			var status = data.status;
			var statusText = data.statusText
			if(status == 401 || status == 400)
			{
				top.location.href = "login.html";
			}
		}
	})

	setTimeout(function(){
		init_license();
	},300)
}


function tshiftList(id,right)
{
	redirect('tshift_list.html?id='+id+"&right="+right);
}

function add_group(id,right)
{
	window.top.art.dialog
	(
		{
			id:'manager',iframe:'addToGroup.html?id='+id, title:Grouping, width:'500', height:'200', lock:true,window:'top'
		},
		function(){
			var d = window.top.art.dialog({id:'manager'}).data.iframe;
			d.addToGroup();
			window.top.art.dialog({id:'manager'}).close()
			if(right == 1)
			{
				window.location.href='/live_list.html';
			}
			else if(right == 3)
			{
				window.location.href='/live_back_list.html';
			}
			else if(right == 4)
			{
				window.location.href='/live_while_list.html';
			}
			else if(right == 5)
			{
				window.location.href='/live_guid_list.html';
			}
			return false;
		},
		function()
		{
			window.top.art.dialog({id:'manager'}).close()
		}
	);void(0);
}


function calculatePageIndex(currentPage,totalPage,viewPageCount)
{
	var startPage = 0 ;
	var endPage = 0;
	var arr = new Array();
	// 如果总页面小于 页面 分页显示页数
	if (totalPage <= viewPageCount) {
		startPage = 1;
		endPage = totalPage;
		arr[0] = startPage;
		arr[1] = endPage;

		return arr;
	}

	//计算出中间值
	var n = Math.ceil(viewPageCount/2)-1;
	startPage = currentPage - n;

	//如果当前页己经小于起始页
	if (startPage <= 1) {
		startPage = 1;
		// 因为两个边界的页码数也要显示
		endPage = startPage + (viewPageCount - 1);
		arr[0] = startPage;
		arr[1] = endPage;

		return arr;
	}

	endPage = currentPage + n;

	//前页页面显示的值是积数 还是偶数
	if (viewPageCount % 2 == 0) {
		startPage += 1;
	}
	if (endPage > totalPage) {
		endPage = totalPage;
		// 因为两个边界的页码数也要显示
		startPage = totalPage - (viewPageCount - 1);
	}
	arr[0] = startPage;
	arr[1] = endPage;

	return arr;
}

function stop_record(appName,name,right)
{

	$.ajax({
		type:"PUT",
		url:locationHref+"/rest/admin/lives/"+appName+"/"+name+"/stopRecord",//开启录像
//		data:JSON.stringify({'appName':appName,'name':name}),
		async: false,
		success: function(data)
		{
			setTimeout(function()
			{
				if(right == "1")
				{
					window.location.href = '/live_list.html';
				}
				else if(right == "5")
				{
					window.location.href = '/live_guid_list.html';
				}
			},500)
		},
		error: function()
		{
			setTimeout(function()
			{
				if(right == "1")
				{
					window.location.href = '/live_list.html';
				}
				else if(right == "5")
				{
					window.location.href = '/live_guid_list.html';
				}
			},500)
		}
	});



}

String.prototype.replaceAll  = function(s1,s2){
	return this.replace(new RegExp(s1,"gm"),s2);
}

function start_record(appName,name,right)
{
	var date = new Date();
	var year = date.getFullYear()+"";
	var month = date.getMonth()+1+"";
	if(month < 10)
	{
		month = 0+month;
	}
	var day = date.getDate()+"";
	if(day < 10)
	{
		day = 0+day;
	}
	var hours = date.getHours()+"";
	if(hours < 10)
	{
		hours = 0+hours;
	}
	var min = date.getMinutes()+"";
	if(min < 10)
	{
		min = 0+min;
	}
	var second = date.getSeconds()+"";
	if(second < 10)
	{
		second = 0+second;
	}
	date =year+month+day+hours+min+second;
	var recordFile1 = "["+appName+"_"+name+"]_"+date;
	var recordFile = recordFile1.replaceAll("/","_");
	$.ajax({
		type:"PUT",
		url:locationHref+"/rest/admin/lives/"+appName+"/"+name+"/startRecord",//开启录像
		data:JSON.stringify({'appName':appName,'name':name,'recordFile':recordFile}),
		async: false,
		success: function(data)
		{
			setTimeout(function()
			{
				if(right == "1")
				{
					window.location.href = '/live_list.html';
				}
				else if(right == "5")
				{
					window.location.href = '/live_guid_list.html';
				}
			},500)
		},
		error: function()
		{
			setTimeout(function()
			{
				if(right == "1")
				{
					window.location.href = '/live_list.html';
				}
				else if(right == "5")
				{
					window.location.href = '/live_guid_list.html';
				}
			},500)
		}

	});


}

function change_live_type(type)
{
	$("#change_live a").each(function(){
			$(this).removeClass("on");
	})

	$("#change_live a").each(function(){

		if(parseInt($(this).attr("type")) == type)
		{
			$(this).addClass("on");
		}
	})

	build_whole_page(type);

}

function generateAPK()
{
	window.top.art.dialog
	(
		{
			id:'apk',iframe:'/admin/live/generateAPK.jsp', title:'机顶盒APK生成', width:'650', height:'120', lock:true
		},
		function(){
			var d = window.top.art.dialog({id:'apk'}).data.iframe;
			var form = d.document.getElementById('dosubmit');
			form.click();			
			return false;			
			}, 
		function()
		{
			window.top.art.dialog({id:'apk'}).close()
		}
	);void(0);
}

function build_dom(url,id,alias)
{
	var whole_url = "&src="+url+"&autoHideControlBar=true&streamType=live&autoPlay=true";
	//var whole_url = url;
	var width = 180;
	var height = 180;
	var host = window.location.hostname;
	var port = window.location.port;
	//初使化swfpath路径
	var ckplayer_swfpath = "http://"+host+":"+port+"/ckplayer/ckplayer.swf";
	//构建页面  dom
	var outer = "<div id='outer"+id+"' style='float:left;margin-left:15px;width:180px;height:200px;'></div>";

	//flash 播放器
	var flashDom = "<object width='"+width+"' height='"+height+"' id='StrobeMediaPlayback'";
		flashDom+= "name='StrobeMediaPlayback' type='application/x-shockwave-flash'";
		flashDom+= "classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000'>";
		flashDom+= "<param name='movie' value='StrobeMediaPlayback.swf' />";
		flashDom+= "<param name='quality' value='high' />";
		flashDom+= "<param name='bgcolor' value='#000000' />";
		flashDom+= "<param name='allowfullscreen' value='true' />";
		flashDom+= "<param name='flashvars' id='ieval' value='"+whole_url+"' />";
		flashDom+= "<embed src='StrobeMediaPlayback.swf' width='"+width+"'";
		flashDom+= "height='"+height+"' id='StrobeMediaPlayback' quality='high'";
		flashDom+= "bgcolor='#000000' name='StrobeMediaPlayback' allowfullscreen='true'";
		flashDom+= "pluginspage='http://www.adobe.com/go/getflashplayer' flashvars='"+whole_url+"'>";
		flashDom+= "</embed>";
		flashDom+= "</object>";

	/*var flashDom = "<object style='background:#000'  width='"+width+"' height='"+height+"' align='middle' name='StrobeMediaPlayback_object'  id='StrobeMediaPlayback_object' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0' type='application/x-shockwave-flash' classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' pluginspage='http://www.macromedia.com/go/getflashplayer'>";
		flashDom+="<param name='movie' value='"+ckplayer_swfpath+"' />";
		flashDom+="<param name='quality' value='high' />";
		flashDom+="<param name='bgcolor' value='#000000' />";
		flashDom+="<param name='allowfullscreen' value='true' />";
		flashDom+="<param name='flashvars'	value='f="+whole_url+"&s=0&c=0&e=1&v=80&p=1&h=3&wh=16:9&lv=1'/>";
		flashDom+="<embed style='background:#000' src='"+ckplayer_swfpath+"' width='"+width+"' height='"+height+"' align='middle' id='StrobeMediaPlayback_embed' quality='high'";
		flashDom+="bgcolor='#000000' name='StrobeMediaPlayback_embed' allowfullscreen='true'";
		flashDom+="pluginspage='http://www.adobe.com/go/getflashplayer' ";
		flashDom+="flashvars='f="+whole_url+"&s=0&e=1&p=1&wh=16:9&lv=1";
		flashDom+="type='application/x-shockwave-flash'>";
		flashDom+="</embed>";
		flashDom+="</object>";*/

	var alias = "<div style='color:#ff0235;text-align: center'>"+alias+"</div>"

	$("#preshow").append(outer);
	$("#outer"+id).append(flashDom);
	$("#outer"+id).append(alias); //$(window.top.frames["right"].document).find("#outer"+id).append(alias);

}
/**
 * 将端口号和IP地址存放程序自己在页面上对应的id为rtmp_port  rtmp_ip的 input隐藏域中
 * 用于播放RTMP流时使用,所以ip是外网IP
 * @return
 */
function create_rtmp_host()
{
	$.ajax({
		type: "GET",
		url: locationHref+"/rest/admin/system/startupInfo",//获取端口配置
		 //处理CGI返回的JSON数据
		 success: function(data)
		 {
			var obj = data;
			var ip = obj.ip;
			var port = obj.port;
			var dom = "<input type='hidden' id='rtmp_ip' value="+ip+">";
				dom+="<input type='hidden' id='rtmp_port' value="+port+" >";
			$("body").append(dom);
		 },
		error:function(data)
		{
			var errorObj = data;
			var status = data.status;
			var statusText = data.statusText
			if(status == 401 || status == 400)
			{
				top.location.href = "login.html";
			}
		}
	  });
}
